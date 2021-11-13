import React, { useState } from "react";
import Modal from "./Modal";

export default function MyWork() {
  const [modalState, setModalState] = useState(false);

  const onWorkClickHandler = () => {
    setModalState(true);
  };

  return (
    <section className="my-work" id="mywork">
      <div className="top-half"></div>
      <div className="bottom-half"></div>
      <div className="work-information">
        <h2 className="h2 h2--2">Some of my work</h2>
        <div className="work-information__gallery">
          <img
            src="./images/HeyThere.jpg"
            alt="img1"
            onClick={onWorkClickHandler}
            className="img"
          />
          <img
            src="./images/React-movies.jpg"
            alt="img2"
            onClick={onWorkClickHandler}
            className="img"
          />
          <img
            src="./images/Natours.jpg"
            alt="img3"
            onClick={onWorkClickHandler}
            className="img"
          />
          <img
            src="./images/Rider.jpg"
            alt="img4"
            onClick={onWorkClickHandler}
            className="img"
          />
          <img
            src="./images/Travelfy.jpg"
            alt="img5"
            onClick={onWorkClickHandler}
            className="img"
          />
          <img
            src="./images/Nexter.jpg"
            alt="img6"
            onClick={onWorkClickHandler}
            className="img"
          />
        </div>
        {modalState && <Modal setModalState={setModalState} />}
      </div>
    </section>
  );
}
