import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaYoutube } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/josu%C3%A9-israel-v%C3%A1squez-mart%C3%ADnez-355a41187/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/IsraelMerlyn/" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.youtube.com/@Tecno-DevTutos/" target="_blank" rel="noreferrer" ><FaYoutube /></a>
    </div>
  )
}

export default HeaderSocials