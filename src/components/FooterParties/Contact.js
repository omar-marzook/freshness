import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h4>Contact Details</h4>
      <p>Company Name</p>
      <p>Street Name & Number</p>
      <p>Town</p>
      <p>Postcode/Zip</p>
      <p>
        Tel: <a href="tel:xxxxxxxxxxxxxxx">xxxxx xxxxxxxxxx</a>
      </p>
      <p>
        Fax: <a href="tel:xxxxxxxxxxxxxxx">xxxxx xxxxxxxxxx</a>
      </p>
      <p>
        Email: <a className="transition_delay" href="mailto:contact@mydomain.com">contact@mydomain.com</a>
      </p>
    </section>
  );
}

export default Contact;
