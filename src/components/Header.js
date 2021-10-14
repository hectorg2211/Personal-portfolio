import React from "react";
import Me from "../assets/hector.jpeg";

export default function Header() {
  return (
    <div className="header">
      <img src={Me} alt="Héctor" className="header__image" />
      <div className="header__info">
        <h1 className="h1">Héctor García</h1>
        <h2 className=" h2 h2--1 fix">Front - End Developer & Web Designer</h2>
      </div>
    </div>
  );
}
