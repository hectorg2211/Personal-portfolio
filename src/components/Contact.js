import React from "react";
import Me from "../assets/hector.jpeg";

export default function Contact() {
  return (
    <footer className="footer" id="contact">
      <h2 className="h2 h2--2">Contact me</h2>
      <div className="footer__info">
        <form
          className="footer__form"
          action="https://formspree.io/f/meqvykey"
          method="POST"
        >
          <div>
            <input
              name="name"
              className="footer__input"
              type="text"
              placeholder="Your name"
            />
            <input
              name="email"
              className="footer__input"
              type="email"
              placeholder="Your email"
            />
            <textarea
              className="footer__input"
              name="message"
              id=""
              placeholder="Enter your message here"
            ></textarea>
          </div>
          <button className="button button--1 about__button form__button">
            <span>Send</span>
          </button>
        </form>
        <div className="right">
          <img src={Me} alt="Hector" className="footer__img" />
          <a
            href="./files/CV - Héctor Joaquín García Rincón - English - C.pdf"
            download="Héctor García - Full Stack - Resume"
            className="button button--1 right__button"
          >
            <span>Download my resume</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
