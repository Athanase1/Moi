import { useState } from "react";
import validerChamps from "../services/validations";
import { envoyerMail } from "../services/https";

export default function Contact({ champs, handleChange }) {
  const handlerSub = async () => {
    const res = await envoyerMail(champs);
    if (res.success) {
      alert(
        "Submission réçu avec succès vous récevez un email de confirmation"
      );
    } else {
      alert(res.message);
    }
  };
  const [inputs, setInputs] = useState({
    nom: false,
    email: false,
  });
  const erreurs = validerChamps(champs);

  const compterMots = (texte) => {
    // On enlève les espaces en trop et on split
    const mots = texte.trim().split(/\s+/);
    // Si le champ est vide => 0 mots
    return texte.trim() === "" ? 0 : mots.length;
  };
  const estFocus = (key) => {
    setInputs({
      nom: false,
      email: false,
      [key]: true,
    });
  };
  return (
    <div className="contact-container hidden" id="contact">
      <form
        id="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          handlerSub();
        }}
      >
        <h1>Contact</h1>
        <div className={inputs.nom ? "focus inputcon" : "inputcon"}>
          <label htmlFor="nom">Nom <span>{erreurs.nom}</span></label>
          <input
            type="text"
            id="name"
            name="nom"
            required
            value={champs.nom}
            onFocus={() => estFocus("nom")}
            onChange={handleChange}
          />
        </div>
        <div className={inputs.email ? "focus inputcon" : "inputcon"}>
          <label htmlFor="email">Email <span>{erreurs.email}</span></label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={champs.email}
            onFocus={() => estFocus("email")}
            onChange={handleChange}
          />
        </div>
        <div className="inputcon" id="txt">
          <label htmlFor="message" id="ms">
            Message <span>{erreurs.message}</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={champs.message}
            onChange={handleChange}
          ></textarea>
          <span className="Tspan">{compterMots(champs.message)}/100mots</span>
        </div>
        <button
          id="submit"
          type="submit"
          disabled={Object.keys(erreurs).length > 0}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
