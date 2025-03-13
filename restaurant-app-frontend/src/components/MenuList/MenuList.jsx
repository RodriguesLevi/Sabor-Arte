import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './MenuList.css';

function MenuList({ items }) {
  return (
    <ul className="menu-list">
      {items.map((item) => (
        <MenuItem 
          key={item.id} 
          item={item} 
        />
      ))}
    </ul>
  );
}

export default MenuList;