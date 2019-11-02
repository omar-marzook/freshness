import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import Social from "./HeaderParties/Social.js";
import SearchForm from "./HeaderParties/SearchForm.js";
import Menu from "./HeaderParties/Menu.js";

function Header() {
  return (
      <header className="header">
        <div className="container">
          <div className="header_row">
            <Social />
            <SearchForm />
          </div>
          <div className="header_row">
            <img src={logo} className="header_logo" alt="logo" />
            <Menu />
          </div>
        </div>
      </header>
  );
}

export default Header;
