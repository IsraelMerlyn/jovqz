import "./certificate.css";

import IMG1 from "../../assets/certificados/documentacionSwagger.png";
import IMG2 from "../../assets/certificados/spring.png";
import IMG3 from "../../assets/certificados/git.png";
import IMG4 from "../../assets/certificados/APIsTesting.png";

import React from "react";

//Portfolio function
const certificate = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Curso de Documentacion de APIs con Swagger",
      img: IMG1,
      description:
        "",
      technologies: "Spring | SpringBoot | Postman",
      Codigo:"64dac53a-5760-4e39-b435-903e165841f3",
      link: "https://israelmerlyn.github.io/pagina_web_/",
      github: "https://github.com/IsraelMerlyn/pagina_web_",
    },
    {
      id: 2,
      title: "APIs Testing con Postman",
      img: IMG4,
      description:
        "",
      technologies: "JDK 17| SpringBoot | Swagger 2",
      link: "https://www.udemy.com/certificate/UC-4dd0bdc1-c2de-4a19-a8e6-5096683379c9/",
      github: "https://www.udemy.com/certificate/UC-4dd0bdc1-c2de-4a19-a8e6-5096683379c9/",
    },
    {
      id: 3,
      title: "Universidad Spring-Spring Framework y Spring Boot",
      img: IMG2,
      description: "",
      technologies: "HTML | JS | Bootstrsp | CSS",
      link: "https://www.udemy.com/certificate/UC-05c04a7b-ccb1-40b2-9ae1-0fe0b73d3216/",
      github: "https://www.udemy.com/certificate/UC-4dd0bdc1-c2de-4a19-a8e6-5096683379c9/",
    },
    {
      id: 4,
      title: " Git y GitHub 100% Práctico",
      img: IMG3,
      description:
        "ApiRest. un backend de Biblioteca, asi mismo con documentacion usando uso de Swagger 2.7",
      technologies: " Java 8 | SpringBoot | Postman | Swagger 2.7",
      link: "https://www.udemy.com/certificate/UC-4c94bb7e-7082-40df-a36a-81c7da82a496/",
      github: "https://www.udemy.com/certificate/UC-4c94bb7e-7082-40df-a36a-81c7da82a496/",
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
      <h5>Cursos Tomados en Udemy / Codigo Facilito</h5>
      <h2>Certificaciones</h2>

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
              <p>{pro.codigo}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
              
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Mostrar Credenciales
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default certificate ;
