import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
      <p className="preloader__text">Carregando...</p>
    </div>
  );
}

export default Preloader;