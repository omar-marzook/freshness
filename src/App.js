import React from "react";
import logo from "./assets/logo.svg";
import Social from "./components/Social.js";
import SearchForm from "./components/SearchForm.js";
import Menu from "./components/Menu.js";
import HeroSlider from "./components/HeroSlider.js";
import IntroCard from "./components/IntroCard.js";

function App() {
  return (
    <main className="app">
      <header className="header">
        <div className="container">
          <div className="row">
            <Social />
            <SearchForm />
          </div>
          <div className="row margin-top">
            <img src={logo} className="header_logo" alt="logo" />
            <Menu />
          </div>
        </div>
      </header>
      <section className="container silder_section">
        <HeroSlider />
      </section>

      <section className="container intro_section">
        <IntroCard />
        <IntroCard />
        <IntroCard />
      </section>
    </main>
  );
}

export default App;
