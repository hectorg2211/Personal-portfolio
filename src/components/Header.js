import React from "react";
import Typewriter from "typewriter-effect";
import Me from "../assets/hector.jpeg";

new Typewriter();

const removeTypeCursor = () =>
  console.log(document.querySelector(".Typewriter__cursor").remove());

export default function Header() {
  return (
    <div className="header">
      <img src={Me} alt="Héctor" className="header__image" />
      <div className="header__info">
        <h1 className="h1">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Héctor García")
                .pauseFor(1000)
                .callFunction(removeTypeCursor)
                .start();
            }}
          />
        </h1>
        <h2 className=" h2 h2--1 fix">
          <Typewriter
            options={{ delay: 20 }}
            onInit={(typewriter) => {
              setTimeout(() => {
                typewriter
                  .typeString("Front - End Developer & Web Designer")
                  .pauseFor(1000)
                  .callFunction(removeTypeCursor)
                  .start();
              }, 2000);
            }}
          />
        </h2>
      </div>
    </div>
  );
}
