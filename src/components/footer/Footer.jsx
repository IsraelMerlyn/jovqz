import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">IsraelMerlyn</a>
      <ul className="permalinks">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonio</a></li> */}
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/josu%C3%A9-israel-v%C3%A1squez-mart%C3%ADnez-355a41187/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/IsraelMerlyn" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.youtube.com/@Tecno-DevTutos/" target="_blank" rel="noreferrer" ><FaYoutube /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; IsraelMerlyn 2023. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer