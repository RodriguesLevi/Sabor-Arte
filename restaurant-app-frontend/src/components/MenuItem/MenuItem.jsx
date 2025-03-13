import React from 'react';
import './MenuItem.css';

function MenuItem({ item }) {
  return (
    <li className="menu-item">
      <div 
        className="menu-item__image" 
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="menu-item__content">
        <h3 className="menu-item__title">{item.title}</h3>
        <p className="menu-item__restaurant">{item.restaurantChain}</p>
        <div className="menu-item__footer">
          <span className="menu-item__price">${item.price || '10.99'}</span>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;