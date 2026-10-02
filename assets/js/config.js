/* =========================================================
   CONFIGURATION DU SITE — à personnaliser
   ========================================================= */
window.VOLUM_CONFIG = {
  /* Formulaire de contact.
     GitHub Pages ne peut pas envoyer d'e-mails : on passe par un service gratuit.
     1. Créez un formulaire sur https://formspree.io (ou https://web3forms.com)
     2. Collez ici l'URL d'envoi, ex. "https://formspree.io/f/abcdwxyz"
     Tant que ce champ est vide, le formulaire ouvre la messagerie du visiteur
     (mailto) si CONTACT_EMAIL est renseigné, sinon propose d'appeler. */
  FORM_ENDPOINT: "",

  /* Adresse e-mail de l'agence (affichée et utilisée en secours). */
  CONTACT_EMAIL: "",

  /* Téléphone */
  PHONE_DISPLAY: "06 71 06 87 16",
  PHONE_LINK: "+33671068716",

  /* Avis Google en direct (optionnel).
     Laissez vide pour afficher les avis enregistrés dans assets/js/avis.js.
     Pour les charger en direct : créez une clé « Places API (New) » dans
     Google Cloud Console, restreinte au domaine du site (référents HTTP). */
  GOOGLE_PLACES_API_KEY: "",
  GOOGLE_PLACE_ID: "",            // facultatif : trouvé automatiquement sinon
  GOOGLE_PLACE_QUERY: "Millet Jean-Yves architecte, 8 Rue de l'Ancienne Poste, 34570 Montarnaud",

  /* Liens Google Maps */
  GOOGLE_REVIEWS_URL: "https://www.google.fr/maps/place/Millet+Jean-Yves/@43.6488427,3.6936409,17z/data=!4m8!3m7!1s0x12b15382d3fedf49:0x10f4cfdaa3deba16!8m2!3d43.6488388!4d3.6962158!9m1!1b1!16s%2Fg%2F11b6c_rvkd?hl=fr",
  GOOGLE_MAPS_EMBED: "https://www.google.com/maps?q=Millet+Jean-Yves+architecte,+8+Rue+de+l%27Ancienne+Poste,+34570+Montarnaud&hl=fr&z=14&output=embed"
};
