import React from "react";

function Newsletter() {
  return (
    <section className="newsletter" tabIndex="0">
      <h4>Newsletter</h4>
      <form className="newsletter_form">
        <input
          className="newsletter_input"
          type="text"
          placeholder="Name"
          name="name"
          aria-label="name"
        />
        <input
          className="newsletter_input"
          type="email"
          placeholder="Email"
          name="email"
          aria-label="email"
        />
        <button
          className="newsletter_submit transition_delay hover-color btn"
          type="submit"
          value="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
