import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu" aria-label="Primary">
      <ul>
        <li className="menu_items active">
          <a href="#" className="menu_items-links transition_delay">
            home
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_delay">
            style demo
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_delay">
            full width
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_delay">
            dropdown
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_delay">
            portfolio
          </a>
        </li>
        <li className="menu_items">
          <a href="#" className="menu_items-links transition_delay">
            gallery
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
