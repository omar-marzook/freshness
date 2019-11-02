import React from "react";
import "./Footer.css";
import Contact from "./FooterParties/Contact.js";
import QuickLinks from "./FooterParties/QuickLinks.js";
import BlogQuote from "./FooterParties/BlogQuote.js";
import Newsletter from "./FooterParties/Newsletter.js";

function Footer() {
  return (
    <div className="footer_parties">
      <Contact />
      <QuickLinks />
      <BlogQuote />
      <Newsletter />
    </div>
  );
}

export default Footer;
