import { useState } from "react";
import { projects } from "../assets/data/project";
import Project from "../components/project/project";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const retour = () => {
    navigate("/");
  };

  const Suivant = () => {
    if (index >= projects.length - 1) {
      return; // Déjà à la dernière image
    }
    setIndex((prev) => prev + 1);
  };

  const precedent = () => {
    if (index <= 0) {
      return; // Déjà à la première image
    }
    setIndex((prev) => prev - 1);
  };

  return (
    <div className="Project-Container">
      {/* Entête */}
      <div className="entete">
        <button onClick={retour}>
          <i className="bi bi-arrow-left"></i> Retour
        </button>
        <h1>Liste de mes projets récents</h1>
      </div>

      {/* Contenu */}
      <div className="projectsContainer">
        <Project project={projects[index]} />
      </div>

      {/* Navigation */}
      <div className="entete2">
        <button onClick={precedent}>
          <i className="bi bi-arrow-left"></i> Précédent
        </button>
        <button onClick={Suivant}>
          <i className="bi bi-arrow-right"></i> Suivant
        </button>
      </div>
    </div>
  );
}
