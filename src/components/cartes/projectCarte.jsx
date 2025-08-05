import "./projectCarte.css";
export default function ProjectCarte({ project }) {
  return (
    <div className="carte-container">
      <div className="carteImgs">
        {project.icons.map((icon, index) => (
          <div className="imgCon" key={index}>
            <img src={icon} alt="icon" />
          </div>
        ))}
      </div>
      <div className="carteCorps">
        <h1>{project.nom}</h1>
        <p>{project.desc}</p>
      </div>
      <button>savoir plus</button>
    </div>
  );
}
