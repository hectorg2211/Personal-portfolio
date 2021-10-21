import React from "react";
import Me from "../assets/hector.jpeg";

export default function Contact() {
  return (
    <footer className="footer">
      <h2 className="h2 h2--2">Contact me</h2>
      <div className="footer__info">
        <form action="#" className="footer__form">
          <input
            className="footer__input"
            type="text"
            placeholder="Your name"
          />
          <input
            className="footer__input"
            type="email"
            placeholder="Your email"
          />
          <textarea
            className="footer__input"
            name=""
            id=""
            placeholder="Enter your message here"
          ></textarea>
          <button className="btn-send">Send</button>
        </form>
        <img src={Me} alt="Hector" className="footer__img" />
      </div>
    </footer>
  );
}
