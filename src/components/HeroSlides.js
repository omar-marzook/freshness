import React from "react";
import monitor from "../assets/images/monitor.png";

function HeroSlides() {
    return (
        <article className="hero_silders">
          <img className="hero_silders-img" src={monitor} alt="image inside imac mockup." />
          <div className="hero_silders-text">
            <h2 className="hero_silders-title">YOUR TITLE HERE</h2>
            <p className="hero_silders-p">
              Cursuspenatisaccum ut curabitur nulla tellus tor ames a in
              curabitur pede. Idet mollisi eros dis orci congue elis et
              curabitur consequam intesque. Curabiturpisametur in ante.
            </p>
            <button className="hero_silders-btn btn transition_delay">
              <a href="#">READ MORE »</a>
            </button>
          </div>
        </article>
    );
  }

export default HeroSlides;
