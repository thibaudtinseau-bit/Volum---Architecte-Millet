"""Signe les visuels des projets avec le logo Volum, discrètement, dans un coin de l'image.

Prérequis : Python 3 et Pillow (pip install pillow). Usage, depuis la racine du dépôt :
    python3 scripts/signer-images.py            # signe les images qui ne le sont pas encore
    python3 scripts/signer-images.py --essai    # aperçu dans /tmp/volum-signature, sans rien modifier

- Logo clair avec une ombre légère sur les photos et perspectives ; logo sombre sur les fonds clairs (plans, esquisses).
- Coin inférieur droit par défaut ; si ce coin est chargé (cartouche d'un plan, texte), le coin le plus uniforme est choisi.
- Le fichier scripts/images-signees.json garde l'empreinte de chaque image signée : relancer le script ne signe
  jamais deux fois la même image, et une image ajoutée ou remplacée plus tard est signée au prochain passage.
- Les originaux non signés restent disponibles dans l'historique Git.
"""
import hashlib
import json
import sys
from pathlib import Path

from PIL import Image, ImageFilter, ImageStat

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "img" / "projets"
MANIFEST = ROOT / "scripts" / "images-signees.json"
LOGO_CLAIR = ROOT / "public" / "logo" / "volum-wordmark-light.webp"
LOGO_SOMBRE = ROOT / "public" / "logo" / "volum-wordmark.webp"

LARGEUR = 0.085      # largeur du logo, en part du plus grand côté de l'image
LARGEUR_MIN, LARGEUR_MAX = 58, 170
MARGE = 0.022        # marge au bord, en part du plus grand côté
OPACITE_CLAIR = 0.82
SEUIL_CLAIR = 168    # luminance moyenne du coin au-delà de laquelle on prend le logo sombre
OPACITE_SOMBRE = 0.55
PREFERENCE = 1.8     # un autre coin n'est retenu que s'il est nettement plus uniforme que le coin inférieur droit
QUALITE = 82


def empreinte(path: Path) -> str:
    return hashlib.sha1(path.read_bytes()).hexdigest()


def logo_rgba(path: Path, largeur: int, opacite: float) -> Image.Image:
    logo = Image.open(path).convert("RGBA")
    hauteur = round(logo.height * largeur / logo.width)
    logo = logo.resize((largeur, hauteur), Image.LANCZOS)
    alpha = logo.getchannel("A").point(lambda a: round(a * opacite))
    logo.putalpha(alpha)
    return logo


def signer(src: Path, dst: Path) -> str:
    im = Image.open(src).convert("RGB")
    w, h = im.size
    cote = max(w, h)
    lw = max(LARGEUR_MIN, min(LARGEUR_MAX, round(cote * LARGEUR)))
    marge = max(10, round(cote * MARGE))
    ratio = 150 / 551
    lh = round(lw * ratio)
    gris = im.convert("L")

    def zone(cx: int, cy: int):
        # la zone qui recevra le logo, un peu élargie
        return ImageStat.Stat(gris.crop((max(0, cx - marge // 2), max(0, cy - marge // 2),
                                         min(w, cx + lw + marge // 2), min(h, cy + lh + marge // 2))))

    coins = [(w - lw - marge, h - lh - marge), (marge, h - lh - marge), (w - lw - marge, marge), (marge, marge)]
    agitation = [zone(cx, cy).stddev[0] for cx, cy in coins]
    meilleur = min(range(1, 4), key=lambda i: agitation[i])
    x, y = coins[0] if agitation[0] <= max(14, agitation[meilleur] * PREFERENCE) else coins[meilleur]
    clair = zone(x, y).mean[0] > SEUIL_CLAIR
    base = im.convert("RGBA")
    if clair:
        logo = logo_rgba(LOGO_SOMBRE, lw, OPACITE_SOMBRE)
    else:
        logo = logo_rgba(LOGO_CLAIR, lw, OPACITE_CLAIR)
        # ombre douce pour rester lisible sur les zones claires d'une photo
        ombre = Image.new("RGBA", logo.size, (0, 0, 0, 0))
        ombre.putalpha(logo.getchannel("A").point(lambda a: round(a * 0.45)))
        pad = max(4, lh // 3)
        calque = Image.new("RGBA", (lw + 2 * pad, lh + 2 * pad), (0, 0, 0, 0))
        calque.paste(ombre, (pad, pad + max(1, lh // 30)), ombre)
        calque = calque.filter(ImageFilter.GaussianBlur(max(1.5, lh / 9)))
        base.alpha_composite(calque, (x - pad, y - pad))
    base.alpha_composite(logo, (x, y))
    base.convert("RGB").save(dst, "WEBP", quality=QUALITE, method=6)
    return "sombre" if clair else "clair"


def main() -> None:
    essai = "--essai" in sys.argv
    manifest = {} if essai or not MANIFEST.exists() else json.loads(MANIFEST.read_text())
    out_dir = Path("/tmp/volum-signature")
    if essai:
        out_dir.mkdir(exist_ok=True)
    fichiers = sorted(IMAGES.rglob("*.webp"))
    signes = 0
    for f in fichiers:
        rel = f.relative_to(IMAGES).as_posix()
        if manifest.get(rel) == empreinte(f):
            continue
        dst = out_dir / rel.replace("/", "__") if essai else f
        variante = signer(f, dst)
        if not essai:
            manifest[rel] = empreinte(f)
        signes += 1
        print(f"{rel} : logo {variante}")
    if not essai:
        MANIFEST.write_text(json.dumps(dict(sorted(manifest.items())), indent=1) + "\n")
    print(f"{signes} image(s) signée(s), {len(fichiers) - signes} déjà signée(s).")


if __name__ == "__main__":
    main()
