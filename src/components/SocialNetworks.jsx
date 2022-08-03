import React from 'react';
import '../styles/components/socialnetworks.sass';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/emerson-carneiro-da-silva-2a9402218/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/emersoncarneirodasilva" },
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
