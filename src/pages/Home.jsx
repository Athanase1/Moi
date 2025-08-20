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
import Entete from "../components/links/dropDown";

export default function Home() {
  const [project, setProj] = useState({});
  const [affiche, setAffiche] = useState(false);
  const [entete, setEntetes] = useState({
    frontend: false,
    backend: false,
    bd: false,
    ide: false,
  });
  const [champs, setChamps] = useState({
    nom: "John Doe",
    email: "johnDoe@gmaail.com",
    message: "Je veux un site web",
  });
  const gererChangement = (e) => {
    const { name, value } = e.target;

    // Si c'est le champ "message", on limite à 100 mots
    if (name === "message") {
      const mots = value.trim().split(/\s+/);
      if (mots.length > 100) return; // ignore si >100 mots
    }

    setChamps((prev) => ({
      ...prev,
      [name]: value, // mise à jour dynamique selon le champ modifié
    }));
  };

  const ouvrirEnteteUnique = (key) => {
    setEntetes((prev) => {
      const estDejaOuvert = prev[key]; // true ou false

      if (estDejaOuvert) {
        // 👉 Si déjà ouvert, on le ferme
        return {
          ...prev,
          [key]: false,
        };
      } else {
        // 👉 Sinon on ferme tout et on ouvre seulement lui
        return {
          frontend: false,
          backend: false,
          bd: false,
          ide: false,
          [key]: true,
        };
      }
    });
  };

  const [index, setIndex] = useState(0);
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
  const scrollToSectionProject = () => {
    document.getElementById("proj").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSectionContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <Hero
        scollContact={scrollToSectionContact}
        scrollProj={scrollToSectionProject}
      />
      <h3 id="proj">Voir mes projects les plus recents</h3>
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
                  setProj(project), setAffiche(!affiche), setIndex(0);
                }}
              />
            </div>
          ))}
        </div>
      </section>
      <h3 id="about">À propos de moi</h3>
      <section>
        <About />
      </section>
      <h3 id="competence">Mes compétences</h3>
      <section>
        <div className="hidden competences">
          <Entete
            titre="Front-End"
            drop={entete.frontend}
            onClick={() => ouvrirEnteteUnique("frontend")}
          />
          {entete.frontend && (
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
          )}
          <Entete
            titre="Back-End"
            drop={entete.backend}
            onClick={() => ouvrirEnteteUnique("backend")}
          />

          {entete.backend && (
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
          )}
          <Entete
            titre="IDE"
            drop={entete.ide}
            onClick={() => ouvrirEnteteUnique("ide")}
          />

          {entete.ide && (
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
          )}
          <Entete
            titre="Base de données"
            drop={entete.bd}
            onClick={() => ouvrirEnteteUnique("bd")}
          />
          {entete.bd && (
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
          )}
        </div>
      </section>
      <h3 id="service">Voir mes services offerts</h3>
      <section>
        <div className="projects hidden">
          {Services.map((service, index) => (
            <div
              className="fadeIn"
              style={{ animationDelay: `${index * 0.5}s` }}
              key={service.id}
            >
              <ServiceCarte
                service={service}
                key={service.id}
                onclick={scrollToSectionContact}
              />
            </div>
          ))}
        </div>
      </section>
      <h3 id="contact">Me Contacter</h3>

      <section>
        <Contact champs={champs} handleChange={gererChangement} />
      </section>
      {affiche && (
        <div className="projectPresentaion">
          <div className="x">
            <FaTimes
              size={25}
              color="black"
              onClick={() => {
                setAffiche(!affiche);
              }}
            />
            <a href={`https://${project.lien}`} id="lienProj">
              Voir site
            </a>
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
