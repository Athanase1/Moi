import { Link, useNavigate } from "react-router-dom";
export default function Header({ affiche, setAffiche }) {
    const navigate = useNavigate()
  return (
    <header className={affiche ? "header-active" : ""}>
      <div className="Logo" onClick={() =>{
        navigate("/")
      }}>
        <h1>
          Athan<span>.</span><span>d</span>
          <span>e</span>
          <span>v</span>
        </h1>
        <i
          className={affiche ? "bi bi-x" : "bi bi-list"}
          onClick={setAffiche}
        ></i>
      </div>
      <nav className={affiche ? "": "cache"}>
        <ul>
          <li onClick={ () => setAffiche(!affiche)} >
            <Link to="/">
              {" "}
              <i className="bi bi-house"></i>Acceuil
            </Link>
          </li>
          <li onClick={ () => setAffiche(!affiche)}>
            <Link to="/apropos">
              {" "}
              <i className="bi bi-person"></i>À propos
            </Link>
          </li>
          <li onClick={ () => setAffiche(!affiche)}>
            <Link to="/projects">
              {" "}
              <i className="bi bi-archive"></i>Projects
            </Link>
          </li>
          <li onClick={ () => setAffiche(!affiche)}>
            <Link to="/contact">
              <i className="bi bi-person-lines-fill"></i>Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
