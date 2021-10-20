import React from "react";
import Hexcode from "../assets/hexcode.jpg";

export default function MyExperience() {
  return (
    <section className="my-experience">
      <h2 className="h2 h2--1">My experience</h2>
      <div className="experience-showcase">
        <div className="experience-info">
          <h3 className="h3 h3--1">Samsung Innovation Engineer Intern</h3>
          <ul>
            <li>
              <p className="p">
                Worked closely with software development and testing team
                members to design and develop robust solutions to meet
                established requirements for functionality, scalability and
                performance.
              </p>
            </li>
            <li>
              <p className="p">
                Designed intuitive graphical user interfaces using knowledge of
                serial communications and database design to improve user
                experience.
              </p>
            </li>
          </ul>
        </div>
        <img
          src="https://i.pinimg.com/originals/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.png"
          alt="samsung"
        />
        <img src={Hexcode} alt="samsung" className="hexcode" />

        <div className="experience-info">
          <h3 className="h3 h3--1">Hexcode - Teacher</h3>
          <ul>
            <li>
              <p className="p">
                Evaluated and revised lesson plans and course content to
                facilitate and moderate classroom discussions and
                student-centered learning.
              </p>
            </li>
          </ul>
        </div>
        <div className="experience-info">
          <h3 className="h3 h3--1">
            Graphic Packaging International - Maintenance
          </h3>
          <ul>
            <li>
              <p className="p">
                Followed all work orders and specifications to determine which
                machines and equipment required replacement, repair or
                maintenance.
              </p>
            </li>
          </ul>
        </div>
        <img
          src="https://www.absolute.co.com/wp-content/uploads/2017/06/graphic-packaging-retina.png"
          alt="GPI"
        />
      </div>
    </section>
  );
}
