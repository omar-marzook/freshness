import React from "react";
import Header from "./components/Header.js";
import HeroSlider from "./components/HeroSlider.js";
import IntroCard from "./components/IntroCard.js";
import ServicesCard from "./components/ServicesCard.js";
import Footer from "./components/Footer.js";
import Copyrights from "./components/Copyrights.js";

function App() {
  return (
    <main className="app">
      <Header />

      <section className="container silder_section">
        <HeroSlider />
      </section>

      <section className="container intro_section">
        <IntroCard />
        <IntroCard />
        <IntroCard />
      </section>

      <article className="container shout">
        <h3 className="shout-text">
          “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
          diam erat. In fringilla massa ut nisi ullamcorper pellentesque „
        </h3>
      </article>

      <section className="container services_section">
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </section>

      <footer className="footer">
        <div className="container">
          <Footer />
        </div>
      </footer>

      <footer className="copyrights">
        <div className="container">
          <Copyrights />
        </div>
      </footer>
    </main>
  );
}

export default App;
