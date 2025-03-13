import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Início
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            to="/menu" 
            className={({isActive}) => 
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Menu
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `navigation__link ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;