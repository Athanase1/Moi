import "./serviceCarte.css";
export default function ServiceCarte({ service, onclick }) {
  return (
    <div className="serviceCarte-container">
        <div className="icon">
            <i className={`bi ${service.icon}`}></i>
        </div>
      <div className="sCorps">
           <h1>{service.nom}</h1>
       <p>{service.services}</p>
          <button onPointerDown={onclick}>acquérir</button>
      </div>
    </div>
  );
}
