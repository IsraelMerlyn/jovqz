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
              <h5>Experiencia</h5>
              <small>1 año</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>3+ Proyectos</small>
            </article>
          </div>
          <p className="text-justify"> 
          Soy desarrollador Back-end con el framework de Spring y SpringBoot, tengo experiencia en la parte del frontend 
          con el framework de React.He ocupado los manejadores de estilos Bootstrap, Material UI.
          En la parte móviles he trabajado con Flutter 2.5, solo tengo experiencia en la parte de maquetado.
          Sigo aprendiendo y realizando bootcamp para seguir mejorando mi conocimiento y experiencia.
         
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
