import { useEffect, useState } from "react";
import { compentences, projects } from "../assets/data/project";
import { Services } from "../assets/data/services";
import ProjectCarte from "../components/cartes/projectCarte";
import ServiceCarte from "../components/cartes/serviceCarte/serviceCarte";
import Hero from "../components/hero";
import About from "./About";
import Contact from "./Contact";
import CarteCompetence from "../components/cartes/competences/carteCompetence";
import { FaTimes } from "react-icons/fa";

export default function Home() {
  const [project, setProj] = useState({});
  const [affiche, setAffiche] = useState(false);
  const [index, setIndex] = useState(0)
   const prevImage = () => {
    setIndex((prev) => (prev === 0 ? project.imgs.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === project.imgs.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show"); // quand visible
          } else {
            entry.target.classList.remove("show"); // quand il sort
          }
        });
      },
      { threshold: 0.1 } // déclenche quand 10% de l'élément est visible
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-container">
      <Hero />
      <h3 className="h1">Voir mes projects les plus recents</h3>
      <section>
        <div className="projects hidden">
          {projects.map((project, index) => (
            <div
              className="fadeIn"
              style={{ animationDelay: `${index * 0.8}s` }}
              key={index}
            >
              <ProjectCarte
                project={project}
                onClick={() => {
                  setProj(project), setAffiche(!affiche);
                }}
              />
            </div>
          ))}
        </div>
      </section>
      <h3>À propos de moi</h3>
      <section>
        <About />
      </section>
      <h3>Mes compétences</h3>
      <section>
        <div className="hidden competences">
          <h6>Front-End</h6>
          <div className="comListes">
            {compentences
              .filter((compet) => compet.type === "FrontEnd")
              .map((compentence, index) => (
                <div
                  className="fadeIn"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  key={compentence.id}
                >
                  <CarteCompetence competence={compentence} />
                </div>
              ))}
          </div>
          <h6>BackEnd</h6>
          <div className="comListes">
            {compentences
              .filter((compet) => compet.type === "BackEnd")
              .map((compentence, index) => (
                <div
                  className="fadeIn"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  key={compentence.id}
                >
                  <CarteCompetence competence={compentence} />
                </div>
              ))}
          </div>
          <h6>IDE</h6>
          <div className="comListes">
            {compentences
              .filter((compet) => compet.type === "IDE")
              .map((compentence, index) => (
                <div
                  className="fadeIn"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  key={compentence.id}
                >
                  <CarteCompetence competence={compentence} />
                </div>
              ))}
          </div>
          <h6>Base de données </h6>
          <div className="comListes">
            {compentences
              .filter((compet) => compet.type === "Base de donées")
              .map((compentence, index) => (
                <div
                  className="fadeIn"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  key={compentence.id}
                >
                  <CarteCompetence competence={compentence} />
                </div>
              ))}
          </div>
        </div>
      </section>
      <h3 className="h1">Voir mes services offerts</h3>
      <section>
        <div className="projects hidden">
          {Services.map((service, index) => (
            <div
              className="fadeIn"
              style={{ animationDelay: `${index * 0.5}s` }}
              key={service.id}
            >
              <ServiceCarte service={service} key={service.id} />
            </div>
          ))}
        </div>
      </section>
      <h3 className="h1">Me Contacter</h3>

      <section>
        <Contact />
      </section>
      {affiche && (
        <div className="projectPresentaion">
          <div className="x">
               <FaTimes size={25}  color="black" onClick={() =>{
                setAffiche(!affiche)
               }}/>
          </div>
       
          <div className="projectCorps">
            <div className="projectsImgs">
               <img src={project.imgs[index]} alt={project.titre} />
               <div className="bis">
                <i onClick={prevImage} className="bi bi-chevron-left"></i>
                <i onClick={nextImage} className="bi bi-chevron-right"></i>
               </div>
            </div>
           
            <div className="details">
              <h5>{project.titre}</h5>
              <p>{project.desc}</p>

              <div>
                <ul>
                  <h6>Fonctionnalités</h6>
                  {project.fonctionnalites.map((fonc, index) => (
                    <li key={index}>{fonc}</li>
                  ))}
                </ul>
                <ul>
                  <h6>Compétences acquises</h6>
                  {project.competences_acquises.map((fonc, index) => (
                    <li key={index}>{fonc}</li>
                  ))}
                </ul>
                <ul>
                  <h6>Défis relevés</h6>
                  {project.defis_releves.map((fonc, index) => (
                    <li key={index}>{fonc}</li>
                  ))}
                </ul>
              </div>
              <div className="stack">
                {project.stack_technique.map((stack, index) => (
                  <li key={index}>{stack}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
