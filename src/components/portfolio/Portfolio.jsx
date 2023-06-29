import "./portfolio.css";

import IMG1 from "../../assets/tecno_dev.png";
import IMG2 from "../../assets/IsraelMerlyn.png";
import IMG3 from "../../assets/API_Biblioteca.png";
import IMG4 from "../../assets/apiRest_tareas.png";
import IMG5 from "../../assets/gifApp.png";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Pagina Web Responsiva",
      img: IMG1,
      description:
        "Pagina Web realizada para mi canal de youtube, con fin de practica y aprendizaje realizada con HTML, CSS, JS y Bootstrap 4.",
      technologies: "Html | CSS | Javascript | Bootstrap 4",
      link: "https://israelmerlyn.github.io/pagina_web_/",
      github: "https://github.com/IsraelMerlyn/pagina_web_",
    },
    {
      id: 2,
      title: "API REST Tareas",
      img: IMG4,
      description:
        "API Rest de Tareas",
      technologies: "JDK 17| SpringBoot | Swagger 2",
      link: "",
      github: "https://github.com/IsraelMerlyn/tareas_APIrest",
    },
    {
      id: 3,
      title: "Portafolio web IsraelMerlyn",
      img: IMG2,
      description: "Anterios Portafolio web, realizado con el fin de dar a conocer mi conocimiento, educacion, experiencia personal y laboralmente",
      technologies: "HTML | JS | Bootstrsp | CSS",
      link: "https://israelmerlyn.github.io/IsramerlynPortafolio/#page-4",
      github: "https://github.com/IsraelMerlyn/pagina_web_",
    },
    {
      id: 4,
      title: "APIRest Biblioteca",
      img: IMG3,
      description:
        "ApiRest. un backend de Biblioteca, asi mismo con documentacion usando uso de Swagger 2.7",
      technologies: " Java 8 | SpringBoot | Postman | Swagger 2.7",
      link: "",
      github: "https://github.com/IsraelMerlyn/ApiRest_conRelaciones_Spring",
    },
    {
      id: 5,
      title: "Gif App",
      img: IMG5,
      description:
        "Sitio web, consumo de API de giphy developer",
      technologies: "React | Hook | Postman",
      link: "https://israelmerlyn.github.io/gifApp_Israel/",
      github: "https://github.com/IsraelMerlyn/gifApp_Israel",
    },
  /*  {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://jokes-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Joke-App",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    },*/
  ];

  return (
    <section id="portfolio">
      <h5>MI Trabajo Realizado</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
