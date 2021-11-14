import React, { useState } from "react";
import Modal from "./Modal";

export default function MyWork() {
  const [modalState, setModalState] = useState(false);
  const [selectedWork, setSelectedWork] = useState("");

  const onWorkClickHandler = () => {
    setModalState(true);
  };

  return (
    <section className="my-work" id="mywork">
      <div className="top-half"></div>
      <div className="bottom-half"></div>
      <div className="work-information">
        <h2 className="h2 h2--2">Some projects</h2>
        <div className="work-information__gallery">
          <div
            className="work-information__image-container"
            onClick={() => {
              setSelectedWork("heythere");
              onWorkClickHandler();
            }}
          >
            <img src="./images/HeyThere.jpg" alt="img1" className="img" />
            <img src="./images/Heythere.png" alt="" className="image-logo" />
          </div>

          <div
            className="work-information__image-container"
            onClick={() => {
              setSelectedWork("react-movies");
              onWorkClickHandler();
            }}
          >
            <img src="./images/React-movies.jpg" alt="img1" className="img" />
            <img
              src="./images/react-movies.png"
              alt=""
              className="image-logo"
            />
          </div>

          <div
            className="work-information__image-container"
            onClick={() => {
              setSelectedWork("natours");
              onWorkClickHandler();
            }}
          >
            <img src="./images/Natours.jpg" alt="img1" className="img" />
            <img src="./images/natours.png" alt="" className="image-logo" />
          </div>

          <div
            className="work-information__image-container"
            onClick={() => {
              setSelectedWork("rider");
              onWorkClickHandler();
            }}
          >
            <img src="./images/Rider.jpg" alt="img1" className="img" />
            <img src="./images/Rider.png" alt="" className="image-logo" />
          </div>

          <div
            className="work-information__image-container"
            onClick={() => {
              setSelectedWork("travelfy");
              onWorkClickHandler();
            }}
          >
            <img src="./images/Travelfy.jpg" alt="img1" className="img" />
            <img src="./images/Travelfy.png" alt="" className="image-logo" />
          </div>

          <div
            className="work-information__image-container"
            onClick={() => {
              setSelectedWork("nexter");
              onWorkClickHandler();
            }}
          >
            <img src="./images/Nexter.jpg" alt="img1" className="img" />
            <img src="./images/Nexter.png" alt="" className="image-logo" />
          </div>
        </div>
        {modalState && (
          <Modal setModalState={setModalState} showcase={selectedWork} />
        )}
      </div>
    </section>
  );
}
