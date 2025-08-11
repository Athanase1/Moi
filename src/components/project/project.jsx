import { useState } from "react";
import "./project.css";
export default function Project({ project }) {
  const [index, setIndex] = useState(0);

  const prochainImage = (nbImages) => {
    if (index >= nbImages - 1) {
      return; // Déjà à la dernière image
    }
    setIndex((prev) => prev + 1);
  };

  const precedentImage = () => {
    if (index <= 0) {
      return; // Déjà à la première image
    }
    setIndex((prev) => prev - 1);
  };
  return (
    <div className="project">
      <div className="projectImg">
        <img
          src={project.imgs[index]}
          alt={`image du project ${project.nom}`}
        />
        <div className="icons">
          <i
            className="bi bi-chevron-compact-left"
            onClick={() => {
              precedentImage(project.imgs.length);
            }}
          ></i>
          <i
            className="bi bi-chevron-compact-right"
            onClick={() => {
              prochainImage(project.imgs.length);
            }}
          ></i>
        </div>
      </div>
      <div className="projectCorps">
        <h1 id="titre">{project.titre}</h1>
        <div className="pDetail">
          <ul>
            <h1>Fonctionnalités:</h1>
            <li>
              {project.fonctionnalites.map((fonc, index) => (
                <li key={index}>{fonc}</li>
              ))}
            </li>
          </ul>

          <ul>
            <h1>Compétences acquises:</h1>
            {project.competences_acquises.map((fonc, index) => (
              <li key={index}>{fonc}</li>
            ))}
          </ul>

          <ul>
            <h1>Compétences acquises:</h1>
            {project.competences_acquises.map((fonc, index) => (
              <li key={index}>{fonc}</li>
            ))}
          </ul>

          <ul>
            <h1>Defis relevés:</h1>
            {project.defis_releves.map((fonc, index) => (
              <li key={index}>{fonc}</li>
            ))}
          </ul>
        </div>
        <h1>Stack technique:</h1>
        <div className="stack">
          {project.stack_technique.map((stackItem, idx) => (
            <>
              {stackItem.listes.map((li, index) => (
                <h4 key={index}>{li}</h4>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
