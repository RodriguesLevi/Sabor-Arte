import React from 'react';
import About from '../About/About';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Delicious Bistro</h1>
          <p className="hero__subtitle">Uma experiência gastronômica inesquecível</p>
          <a href="/menu" className="hero__button">Ver Menu</a>
        </div>
      </section>
      <SpecialOffers />
      <About />
    </main>
  );
}

export default Main;