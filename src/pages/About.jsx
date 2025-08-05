import Moi from "../assets/Moi1.jpg";
export default function About() {
  return (
    <div className="about-container">
      <div className="presentation">
        <div className="imgDiv">
             <img src={Moi} alt="Une photo de moi" />
        </div>
       
        <div className="about">
          <h1>À propos de moi</h1>
          <p>
            Développeur full stack passionné par le développement d'applications
            web et mobiles. Solide maîtrise de technologies telles que React,
            React Native, Node.js, PostgreSQL, et une expertise dans la création
            d'interfaces utilisateurs intuitives et performantes. Capable de
            gérer des projets de bout en bout, de la conception à la mise en
            production, avec une attention particulière à l'expérience
            utilisateur et aux bonnes pratiques de développement. En quête d'une
            nouvelle opportunité pour contribuer à des projets innovants dans
            une équipe dynamique.
          </p>
        </div>
      </div>
    </div>
  );
}
