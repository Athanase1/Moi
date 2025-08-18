
import "./projectCarte.css";
export default function ProjectCarte({ project, onClick }) {
  return (
    <div className="carte-container">
    
        <img src={project.imgs[0]} alt={`image du project ${project.nom}`} />
     
      <div className="cartedes">
        <h4>{project.nom}</h4>
        <p>{project.titre}</p>
        <div className="stack">
         {project.stack_technique.map((li, index) =>(
          <li key={index}>{li}</li>
        ))}
      </div> 
      </div>
      <button onClick={onClick}>Savoir plus</button>
    </div>
  );
}
