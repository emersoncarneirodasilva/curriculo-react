import React from 'react';
import '../styles/components/formationcontainer.sass';

const FormationContainer = () => {
  return (
    <section className="formation-container">
      <h2>Formação</h2>

      <div>
        <h3>Mestrado em Química (2016 - 2018)</h3>        
        <p>Universidade Federal do Rio Grande do Norte</p>
      </div> 

      <div>
        <h3>Bacharelado em Química (2008 - 2013)</h3>        
        <p>Universidade Federal do Rio Grande do Norte</p>
      </div>  
    
      <div>
        <h3>Ensino Médio (2003 - 2005)</h3>        
        <p>Instituto Padre Miguelinho</p>
      </div> 
    </section>
  );
};

export default FormationContainer;
