import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="heroe section">
      <div className="intro">
        <h1>Athanase Kpan</h1>
        <p>Développeur Web & Mobile full-Stack junior</p>
        <p>
          Passionné par le code, je transforme vos idées en solutions numériques
          innovantes.
        </p>
      </div>
      <div className="btns">
        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          Voir mon travail
        </button>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Me contacter
        </button>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/Jesus.love.you.forever.bro.sis?mibextid=LQQJ4d">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/a.thanos_?igsh=MTRuaGQzZTBvMmVyeg%3D%3D&utm_source=qr">
          {" "}
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/athan-roi-0a77852b1/">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
