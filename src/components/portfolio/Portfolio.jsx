import "./portfolio.css";

import IMG1 from "../../assets/tecno_dev.png";
import IMG2 from "../../assets/IsraelMerlyn.png";
import IMG3 from "../../assets/API_Biblioteca.png";
import IMG4 from "../../assets/apiRest_tareas.png";
import IMG5 from "../../assets/gifApp.png";
import IMG6 from "../../assets/proyecto-Tareas.png";
import IMG7 from "../../assets/diario_app.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Pagina Web Responsiva",
      img: IMG1,
      description:
        "Pagina Web realizada para mi canal de youtube, con fines de practica / aprendizaje",
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
      title: "Portafolio web ",
      img: IMG2,
      description: "Anterior Portafolio web, realizado con el fin de dar a conocer mi anterior experiencia",
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
      technologies: " Java 8 | SpringBoot | Postman | Swagger 2.7 | GitHub",
      link: "",
      github: "https://github.com/IsraelMerlyn/ApiRest_conRelaciones_Spring",
    },
    {
      id: 5,
      title: "Gif App",
      img: IMG5,
      description:
        "Sitio web, consumo de APIRest de giphy developer",
      technologies: "React | Hook | Postman | GitHub",
      link: "https://israelmerlyn.github.io/gifApp_Israel/",
      github: "https://github.com/IsraelMerlyn/gifApp_Israel",
    },
    {
      id: 6,
      title: "Tareas con Prioridad",
      img: IMG6,
      description:
        "CRUD de Tareas con prioridad, APIRest con sus respectivos EndPoint",
      technologies: "SpringBoot  | MongoDB | Typescript | Angular | Postman | GitHub",
      link: "",
      github: "https://github.com/IsraelMerlyn/tareasCliente",
    },
    {
      id: 7,
      title: "Diario App",
      img: IMG7,
      description:
        "App de Diario, Consumo de API y Autenticacion con firebase",
      technologies: "React 18 | Redux | Firebase | cloudinary",
      link: "https://israelmerlyn.github.io/diario_app_react/",
      github: "https://github.com/IsraelMerlyn/diario_app_react",
    },
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
              <h4>{pro.title}</h4>
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
