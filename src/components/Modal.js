import React from "react";

export default function Modal({ setModalState }) {
  const closeModal = (e) => {
    if (
      e.target.className !== "overlay" &&
      e.target.className !== "modal__close-btn"
    )
      return;
    console.log(e.target.className);
    setModalState(false);
  };

  return (
    <div className="overlay" onClick={(e) => closeModal(e)}>
      <div className="modal">
        <div className="modal__close-btn" onClick={closeModal}>
          &#10005;
        </div>
        <div className="modal__image">
          <img src="./images/Natours.jpg" alt=""></img>
        </div>
        <div className="modal__information">
          <div className="modal__description">
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              odit officiis saepe id similique at aliquid delectus quo
              repudiandae blanditiis! Voluptatum iusto magnam maiores earum
              nemo. Atque asperiores vel ipsum? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. <br />
              <br />
              Sequi porro mollitia qui inventore suscipit corrupti perspiciatis
              ducimus dignissimos aliquam assumenda.
            </p>
          </div>
          <div className="modal__technologies">
            <div className="modal__tech-title p">Used technology</div>
            <ul className="modal__tech-list">
              <li>SASS</li>
              <li>HTML</li>
              <li>7 - 1 Architecture</li>
              <li>Advanced animations</li>
              <li>Parcel</li>
            </ul>
            <div className="modal__tech-live">
              <a
                href="https://natours-hector-app.netlify.app/"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Live site</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
