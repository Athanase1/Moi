import "./project.css";
export default function Project({ project }) {
  return (
    <div className="project">
      <div className="projectImg">
        <img src={project.imgs[0]} alt={`image du project ${project.nom}`} />
        <div className="icons">
          <i className="bi bi-chevron-compact-left"></i>
          <i className="bi bi-chevron-compact-right"></i>
        </div>
      </div>
      <div className="projectCorps">
        <h1>{project.titre}</h1>
        <div>
          <h1>stack_technique</h1>
          {project.stack_technique.map((stack, index) => (
            <ul key={index}>
              <li>
                <h1>{stack.type}</h1>
                <ul>
                  {stack.listes.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
        <div>
          <ul>
            <li>
              <h1>Fonctionnalités:</h1>
              <ul>
                <li>
                  {project.fonctionnalites.map((fonc, index) => (
                    <li key={index}>{fonc}</li>
                  ))}
                </li>
              </ul>
            </li>
            <li>
              <h1>Compétences acquises:</h1>
              <ul>
                {project.competences_acquises.map((fonc, index) => (
                  <li key={index}>{fonc}</li>
                ))}
              </ul>
            </li>
            <li>
              <h1>Compétences acquises:</h1>
              <ul>
                {project.competences_acquises.map((fonc, index) => (
                  <li key={index}>{fonc}</li>
                ))}
              </ul>
            </li>
            <li>
              <h1>Defis relevés:</h1>
              <ul>
                {project.defis_releves.map((fonc, index) => (
                  <li key={index}>{fonc}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
