/* =========================================================
   COMPARATEUR DE DIRECTIONS ARTISTIQUES (phase de présentation)
   ---------------------------------------------------------
   V2 — Original : app/globals.css (inchangé)
   V3 — Émeraude : app/design-v3.css (règles limitées à html[data-design="v3"])

   - enableComparison : true  → sélecteur sur l'accueil, ?design=v2 / ?design=v3, choix mémorisé
                        false → une seule version (finalVersion), préférences et paramètres ignorés
   - defaultVersion   : version montrée aux nouveaux visiteurs pendant la comparaison
   - finalVersion     : version imposée quand la comparaison est désactivée

   Après validation : enableComparison = false + finalVersion = version choisie.
   Nettoyage complet ensuite : voir README, section « Comparateur V2 / V3 ».
   ========================================================= */
export type DesignVersion = "v2" | "v3";

export const DESIGN_CONFIG = {
  enableComparison: true,
  defaultVersion: "v3" as DesignVersion,
  finalVersion: "v3" as DesignVersion,
};

export const DESIGN_VERSIONS: { id: DesignVersion; label: string; name: string }[] = [
  { id: "v2", label: "V2", name: "Original" },
  { id: "v3", label: "V3", name: "Émeraude" },
];

export const DESIGN_STORAGE_KEY = "volum-design-version";
export const DESIGN_PARAM = "design";

/** Version rendue côté serveur (le script d'initialisation corrige avant le premier affichage). */
export const SERVER_DESIGN: DesignVersion = DESIGN_CONFIG.enableComparison ? DESIGN_CONFIG.defaultVersion : DESIGN_CONFIG.finalVersion;

/** Script exécuté dans <head> avant l'affichage : URL > préférence enregistrée > version par défaut. Évite tout flash. */
export const DESIGN_INIT_SCRIPT = `(function(){try{
var c=${JSON.stringify(DESIGN_CONFIG)},k=${JSON.stringify(DESIGN_STORAGE_KEY)},ok=function(v){return v==="v2"||v==="v3"},v=c.finalVersion;
if(c.enableComparison){var q=new URLSearchParams(location.search).get(${JSON.stringify(DESIGN_PARAM)}),s=null;
try{s=localStorage.getItem(k)}catch(e){}
if(ok(q)){v=q;try{localStorage.setItem(k,q)}catch(e){}}else if(ok(s)){v=s}else{v=c.defaultVersion}}
document.documentElement.setAttribute("data-design",v);
}catch(e){}})();`;
