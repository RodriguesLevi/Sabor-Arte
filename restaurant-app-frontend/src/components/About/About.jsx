import React from 'react';
import './About.css';
import cozinhaImg from '../../images/cozinha.jpg';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2 className="about__title">Sobre Nós</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              O Delicious Bistro é um restaurante acolhedor que combina sabores tradicionais com técnicas modernas.
            </p>
            <p>
              Nossa equipe de chefs experientes trabalha com ingredientes frescos e sazonais para criar pratos memoráveis que encantam os paladares mais exigentes.
            </p>
            <p>
              Estabelecido em 2010, nosso restaurante se tornou um ponto de encontro favorito para moradores locais e turistas que buscam uma experiência gastronômica autêntica em um ambiente elegante e descontraído.
            </p>
          </div>
          <div className="about__image-container">
            <img 
              src={cozinhaImg}
              alt="Interior do restaurante" 
              className="about__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;