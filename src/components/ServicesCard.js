import React from "react";
import "./ServicesCard.css";
import placeholder from "../assets/images/80x80.jpg";

function ServicesCard() {
  return (
    <article className="services_card">
      <img
        className="services_card-img"
        src={placeholder}
        alt="placeholder image."
      />
      <div className="services_card-text">
        <h3 className="services_card-title">Title Goes Here</h3>
        <p className="services_card-p">
          Morbit incidunt maurisque eros molest nunc anteget sed vel lacus mus
          semper. Anter dumnullam.
        </p>
      </div>
    </article>
  );
}

export default ServicesCard;
