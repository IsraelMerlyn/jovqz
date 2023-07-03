import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/israel.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5></h5>
      <h2>Acerca de mi:</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Josue Vasquez" />
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
          Soy desarrollador Back-end con el framework de Spring y SpringBoot, tengo experiencia en la parte del frontend 
          con el framework de React.He ocupado los manejadores de estilos Bootstrap, tailwind css.
          En la parte móviles he trabajado con Flutter 2.5, actualmente solo tengo experiencia en la parte de maquetado.
          Actualmente sigo aprendiendo y realizando bootcamp para seguir mejorando mi conocimiento y experiencia.
          Egrese de la universidad en julio del 2022 y actualmente estoy en proceso de titulacion.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
