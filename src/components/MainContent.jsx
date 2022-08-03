import React from 'react';
import AboutContainer from './AboutContainer';
import FormationContainer from './FormationContainer';
import ExperienceContainer from './ExperienceContainer';
import TechnologiesContainer from './TechnologiesContainer';
import '../styles/components/maincontent.sass';

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <FormationContainer />
      <ExperienceContainer />      
      <TechnologiesContainer />      
    </main>
  );
};

export default MainContent;
