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
      </div>
    </header>
  );
}
