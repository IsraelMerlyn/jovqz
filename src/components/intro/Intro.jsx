import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/yoo.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5></h5>
      <h2>Acerca de mi:</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p> 
          Mi nombre es Josue Vasquez, Egrese en el mes de Junio del 2022 de la carrera de Ing.
           sistemas computacionales en el Instituto Tecnologico de Tlaxiaco,
            tengo conocmientos intermedios con el Vue js (2), Angular (14), Laravel (8)
             y aplicaciones moviles con Flutter (frontEnd). 
             Me gusta aprender las nuevas tecnologias y adquirir nuevos conocimientos en el desarrollo de software
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
