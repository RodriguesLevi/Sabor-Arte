import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/" className="header__logo-link">
          <h1 className="header__logo">Delicious Bistro</h1>
        </Link>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;