import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">© {currentYear} Delicious Bistro</p>
        <div className="footer__links">
          <a href="#" className="footer__link">Termos de Uso</a>
          <a href="#" className="footer__link">Política de Privacidade</a>
          <a href="#" className="footer__link">Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;