import React from 'react';
import './StylesAbout.css'; // Importa el archivo CSS para los estilos

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">Acerca de</h2>
      <p className="about-description">
        Bienvenido a nuestra aplicación de Pokémon. Aquí podrás explorar información sobre los diferentes Pokémon, sus habilidades y más.
      </p>
      <p className="about-disclaimer">Todas las imágenes y datos de Pokémon son propiedad de The Pokémon Company.</p>
    </div>
  );
}

export default About;