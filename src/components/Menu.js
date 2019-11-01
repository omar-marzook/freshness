import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li className="menu_items active">
          <a href="#" className="menu_items-links transition_animation">
            home
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_animation">
            style demo
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_animation">
            full width
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_animation">
            dropdown
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_animation">
            portfolio
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_animation">
            gallery
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
