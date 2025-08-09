import { projects } from "../assets/data/project";
import Project from "../components/project/project";

export default function Projects() {
  return (
    <div className="Project-Container">
      <div className="entete">
        <button>
          {" "}
          <i className="bi bi-arrow-left"></i>Retour
        </button>
        <h1>Liste de mes projects récents</h1>
      </div>
      <div className="projectsContainer">
          <Project project={projects[0]} />
      </div>
           <div className="entete2">
        <button>
          {" "}
          <i className="bi bi-arrow-left"></i>Retour
        </button>
         <button>
          {" "}
          <i className="bi bi-arrow-right"></i>Suivant
        </button>
      </div>
    </div>
  );
}
