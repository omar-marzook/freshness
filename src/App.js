import React, { Component } from "react";
import Header from "./components/Header.js";
import HeroSlider from "./components/HeroSlider.js";
import IntroCard from "./components/IntroCard.js";
import ServicesCard from "./components/ServicesCard.js";
import Footer from "./components/Footer.js";
import Copyrights from "./components/Copyrights.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      checked: localStorage.getItem("theme") === "dark" ? true : false,
      theme: localStorage.getItem("theme")
    };
  }

  componentDidMount() {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("theme", localStorage.getItem("theme"));
  }

  toggleThemeChange() {
    const { checked } = this.state;
    if (checked === false) {
      document.documentElement.classList.add("theme-transition");

      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("theme", localStorage.getItem("theme"));
      this.setState({
        checked: true
      });
      window.setTimeout(function() {
        document.documentElement.classList.remove("theme-transition");
      }, 700);
    } else {
      document.documentElement.classList.add("theme-transition");

      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("theme", localStorage.getItem("theme"));
      this.setState({
        checked: false
      });
      window.setTimeout(function() {
        document.documentElement.classList.remove("theme-transition");
      }, 700);
    }
  }

  render() {
    return (
      <main className="app">
        <div className="theme_color">
          <p>Change Theme Color</p>
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={this.state.checked}
              onChange={() => this.toggleThemeChange()}
            />
            <span className="switcher round"></span>
          </label>
        </div>
        <Header />

        <section className="container slider_section">
          <HeroSlider />
        </section>

        <section className="container intro_section">
          <IntroCard />
          <IntroCard />
          <IntroCard />
        </section>

        <article className="container shout" tabIndex="0">
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

        <footer className="footer" role="contentinfo" tabIndex="0">
          <div className="container">
            <Footer />
          </div>
        </footer>

        <footer className="copyrights" tabIndex="0">
          <div className="container">
            <Copyrights />
          </div>
        </footer>
      </main>
    );
  }
}

export default App;
