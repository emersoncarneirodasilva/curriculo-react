import React from 'react';
import Avatar from '../images/eu.jpg';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import LanguesContainer from './LanguesContainer';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Emerson C. da Silva" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworks />
      <InformationContainer />
      <p className="title-second">Idiomas</p>
      <LanguesContainer />
      <a href="../../public/curriculo-02.pdf" download="curriculo-02.pdf" className="btn">Download Currículo</a>
    </aside>
  );
};

export default Sidebar;
