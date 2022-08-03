import { DiHtml5, DiCss3, DiJsBadge, DiReact, } from "react-icons/di";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Possui ótimo conhecimento na linguagem de marcação HTML." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Possui ótimo conhecimento na linguagem de estilização CSS." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Possui bom conhecimento na linguagem de programação JavaScript." },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript />, text: "Possui pouco conhecimento no superset do JavaScript, TypeScript." },
  { id: "react", name: "React.JS", icon: <DiReact />, text: "Possui bom conhecimento na biblioteca JavaScript, React." },
  { id: "next", name: "Next.JS", icon: <SiNextdotjs />, text: "Possui conhecimento aceitável no framework React, Next." },  
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;