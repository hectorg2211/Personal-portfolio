import React from "react";

export default function AboutMe() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__left">
          <h2 className="h3 h3--1">About me</h2>
          <p className="p about__info">
            Hey! I'm Héctor. I enjoy designing web applications and making them
            look amazing. I'm a very creative person who fell in love with web
            design and programming in general a couple oKWf years ago.
          </p>
          <p className="p about__info">
            Since I'm a very passionate developer, I make sure that no detail is
            lost when building each project I participate in.
          </p>
        </div>
        <a href="#mywork" className="button about__button">
          <span>Check my work</span>
        </a>
        {/* TODO: Change the image or place something else here */}
        {/* <img src="" alt="Something" className="about__img" /> */}
        <div className="about__right">
          <div className="top">
            <h3 className="h3 h3--1">See my Github page</h3>
            <a
              href="https://github.com/hectorg2211"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./images/Github.svg"
                alt="Github logo"
                className="github-logo"
              />
            </a>
          </div>

          <div className="bottom">
            <h3 className="h3 h3--1">Or Contact me </h3>
            <a href="#contact" className="button about__button">
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
