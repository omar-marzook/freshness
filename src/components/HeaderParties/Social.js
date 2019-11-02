import React from "react";
import google from "../../assets/icons/icon-google-plus.svg";
import linkedin from "../../assets/icons/icon-linkedin.svg";
import twitter from "../../assets/icons/icon-twitter.svg";
import pinterest from "../../assets/icons/icon-pinterest.svg";
import rss from "../../assets/icons/icon-rss.svg";
import "./Social.css";

function Social() {
  return (
    <nav className="social" aria-label="Social Navigation">
      <ul>
        <li className="social_icons">
          <a
            class="social_Icons-link transition_delay"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin link." />
          </a>
        </li>
        <li className="social_icons">
          <a
            class="social_Icons-link transition_delay"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter link." />
          </a>
        </li>
        <li className="social_icons">
          <a
            class="social_Icons-link transition_delay"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pinterest} alt="pinterest link." />
          </a>
        </li>
        <li className="social_icons">
          <a
            class="social_Icons-link transition_delay"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={google} alt="google link." />
          </a>
        </li>
        <li className="social_icons">
          <a
            class="social_Icons-link transition_delay"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rss} alt="rss link." />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Social;
