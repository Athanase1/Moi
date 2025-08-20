// Fonction de validation
export default function validerChamps(champs) {
  const erreurs = {};

  // Nom obligatoire
  if (!champs.nom.trim()) {
    erreurs.nom = "Le nom est requis";
  }
  if(champs.nom.length < 3){
    erreurs.nom = "Le nom est invalide"
  }

  // Email obligatoire et format simple
  if (!champs.email.trim()) {
    erreurs.email = "L'email est requis";
  } else if (!/\S+@\S+\.\S+/.test(champs.email)) {
    erreurs.email = "Email invalide";
  }

  // Message obligatoire et au moins 3 mots
  if (!champs.message.trim()) {
    erreurs.message = "Le message est requis";
  } else if (champs.message.trim().split(/\s+/).length < 3) {
    erreurs.message = "Le message doit contenir au moins 3 mots";
  }

  return erreurs; // renvoie un objet vide si tout est ok
}
