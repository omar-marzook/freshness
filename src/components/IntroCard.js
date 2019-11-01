import React from "react";
import "./IntroCard.css";
import placeholder from "../assets/images/300x160.jpg";

function IntroCard() {
  return (
    <article className="card">
      <img className="card_img" src={placeholder} alt="placeholder image." />
      <h3 className="card_title">YOUR TITLE HERE</h3>
      <p className="card_p">
        Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean
        elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac
        aliquat non tincidunt.
      </p>
      <button className="card_btn btn transition_delay">
        <a href="#">READ MORE »</a>
      </button>
    </article>
  );
}

export default IntroCard;
