import React from "react";
import Hexcode from "../assets/hexcode.jpg";

export default function MyExperience() {
  return (
    <section className="my-experience">
      <h2 className="h2 h2--1">My experience</h2>
      <div className="experience-showcase">
        <div className="experience-info">
          <h3 className="h3 h3--1">Samsung Innovation Engineer</h3>
          <ul>
            <li>
              <p className="p">
                The electrical comsumption of four manufacturing plants was
                reduced, this through the development of a digital system that
                allows the control and monitor of a ionization system, this also
                reduced the amount of low quality products that were produced.
              </p>
            </li>
            <li>
              <p className="p">
                Software was designed and programmed to control industrial
                systems through serial communication.
              </p>
            </li>
            <li>
              <p className="p">
                An internal web page was implemented which allowed to know the
                status, location and stock of ionized systems within the plant.
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
                A lesson plan for a course was evaluated and developed, this to
                facilitate and moderate a virtual classroom allowing the
                students to know the Python programming language.
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
                Assisted in the maintenance of industrial equipment. (Die
                cutters, presses, laminators and industrial printing systems)
              </p>
            </li>
            <li>
              <p className="p">
                Directly handled preventive and predictive maintenance planning.
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
