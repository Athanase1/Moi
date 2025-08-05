import "./serviceCarte.css";
export default function ServiceCarte({ service }) {
  return (
    <div className="serviceCarte-container">
      <i className={`bi ${service.icon} icon`}></i>

      <div className="sCorps">
        <h1>{service.nom}</h1>
        <ul>
          {service.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <button>acquérir</button>
    </div>
  );
}
