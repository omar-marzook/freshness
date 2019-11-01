import React from "react";
import logo from "./assets/logo.svg";
import Social from "./components/Social.js";
import SearchForm from "./components/SearchForm.js";
import Menu from "./components/Menu.js";

function App() {
  return (
    <main className="app">
      <header className="header">
        <div className="container">
          <div className="row">
            <Social />
            <SearchForm />
          </div>
          <footer className="row margin-top">
            <img src={logo} className="header_logo" alt="logo" />
            <Menu />
          </footer>
        </div>
      </header>
    </main>
  );
}

export default App;
