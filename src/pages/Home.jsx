import { projects } from "../assets/data/project";
import { Services } from "../assets/data/services";
import ProjectCarte from "../components/cartes/projectCarte";
import ServiceCarte from "../components/cartes/serviceCarte/serviceCarte";
import Hero from "../components/hero";

export default function Home(){
    return <div className="home-container">
      <Hero/>
      <div className="section">
        <h1 className="h1">Voir mes projects les plus recents</h1>
        <div className="projects">
          {projects.map((project) =>(
            <ProjectCarte project={project} key={project.id}/>
          ))}
        </div>
      </div>
      <div className="section">
        <h1 className="h1">Voir mes services offerts</h1>
        <div className="projects">
          {Services.map((service) =>(
            <ServiceCarte service={service} key={service.id}/>
          ))}
        </div>
      </div>
    </div>
}