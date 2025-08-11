import {useState, useEffect} from "react"
export default function Footer(){
    const year = new Date().getFullYear()
      const [now, setNow] = useState(new Date());
  const [use24, setUse24] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = now.getHours();
  const displayHours = use24 ? hours : (hours % 12) || 12;
  const ampm = use24 ? "" : (hours >= 12 ? " PM" : " AM");

  const timeString = `${String(displayHours).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds()).padStart(2,"0")}${ampm}`;

  const dateString = now.toLocaleDateString("fr-FR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
  const tz =  Intl.DateTimeFormat().resolvedOptions().timeZone || "Fuseau local";
    return <footer>
        <div className="footerDiv">

      
       <div className="liens">
        <ul>
            <h6>access rapides</h6>
            <li>accueil</li>
            <li>à propos</li>
            <li>projects</li>
            <li>contact</li>
        </ul>
       </div>
       
       <div className="projs">
        <ul>
            projects récents
            <li>little lemon</li>
            <li>Distributions koba global inc</li>
        </ul>
       </div>
       <div className="date">
        <p>{timeString}</p>
        <p>{dateString}</p>
        <p>{tz}</p>
       </div>
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
       <p id="copy">Athan.div &copy; {year}</p>
    </footer>
}