import React from "react";

export default function AboutMe() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__left">
          <h2 className="h3 h3--1">About me</h2>
          <p className="p about__info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            pariatur quis nulla inventore ea aliquid? Repellendus officia
            consequuntur ullam distinctio eligendi aut libero delectus saepe vel
            error, modi deleniti ad.
          </p>
          <p className="p about__info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            pariatur quis nulla inventore ea aliquid.
          </p>
        </div>
        <a href="somewhere" className="button about__button">
          <span>Check my work</span>
        </a>
        {/* TODO: Change the image or place something else here */}
        {/* <img src="" alt="Something" className="about__img" /> */}
        <div className="about__dummy"></div>
      </div>
    </section>
  );
}
