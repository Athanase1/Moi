import { FaStar } from "react-icons/fa"; // Icône étoile
import "./carteCompétence.css";
export default function CarteCompetence({ competence }) {
  return (
    <div className="carte-com">
      <div className="imgEtNom">
        <img src={competence.icon} alt="" />
        <h1>{competence.nom}</h1>
      </div>
      <div className="etoiles">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            key={i}
            size={20}
           color={i < competence.étoile ? "#facc15" : "#d1d5db"} // jaune ou gris
          />
        ))}
      </div>
      <p>Niveau: {competence.niv}</p>
    </div>
  );
}
