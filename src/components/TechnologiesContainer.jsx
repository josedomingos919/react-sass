import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    text: `HTML é o componente base da web. Isso quer dizer que ele permite...`,
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    text: `Você sabe o que é CSS? Trata-se de uma linguagem de marcação...`,
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    text: `JavaScript é uma linguagem de programação que permite a você implementar...`,
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    text: `O Node. js pode ser definido como um ambiente de execução Javascript server-side...`,
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: <DiMysql />,
    text: `MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto...`,
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    text: `O React é uma biblioteca criada para construir telas de forma declarativa...`,
  },
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
              <p>{tech?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
