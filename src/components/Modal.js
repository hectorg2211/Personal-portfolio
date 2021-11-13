import React from "react";

export default function Modal({ setModalState, showcase }) {
  let [imageUrl, description, technologies, liveSite] = ["", "", [], ""];

  if (showcase === "heythere") {
    imageUrl = "./images/HeyThere.jpg";
    description = (
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odit
        officiis saepe id similique at aliquid delectus quo repudiandae
        blanditiis! Voluptatum iusto magnam maiores earum nemo. Atque asperiores
        vel ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <br />
        <br />
        Sequi porro mollitia qui inventore suscipit corrupti perspiciatis
        ducimus dignissimos aliquam assumenda.
      </p>
    );
    technologies = [];
    liveSite = "https://heythere-messaging.netlify.app/";
  } else if (showcase === "react-movies") {
    imageUrl = "./images/React-movies.jpg";
    description = (
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odit
        officiis saepe id similique at aliquid delectus quo repudiandae
        blanditiis! Voluptatum iusto magnam maiores earum nemo. Atque asperiores
        vel ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <br />
        <br />
        Sequi porro mollitia qui inventore suscipit corrupti perspiciatis
        ducimus dignissimos aliquam assumenda.
      </p>
    );
    technologies = [];
    liveSite = "https://reactmovieexplorer.netlify.app/";
  } else if (showcase === "natours") {
    imageUrl = "./images/Natours.jpg";
    description = (
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odit
        officiis saepe id similique at aliquid delectus quo repudiandae
        blanditiis! Voluptatum iusto magnam maiores earum nemo. Atque asperiores
        vel ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <br />
        <br />
        Sequi porro mollitia qui inventore suscipit corrupti perspiciatis
        ducimus dignissimos aliquam assumenda.
      </p>
    );
    technologies = [];
    liveSite = "https://natours-hector-app.netlify.app/";
  } else if (showcase === "rider") {
    imageUrl = "./images/Rider.jpg";
    description = (
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odit
        officiis saepe id similique at aliquid delectus quo repudiandae
        blanditiis! Voluptatum iusto magnam maiores earum nemo. Atque asperiores
        vel ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <br />
        <br />
        Sequi porro mollitia qui inventore suscipit corrupti perspiciatis
        ducimus dignissimos aliquam assumenda.
      </p>
    );
    technologies = [];
    liveSite = "https://rider-app.netlify.app/";
  } else if (showcase === "travelfy") {
    imageUrl = "./images/Travelfy.jpg";
    description = (
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odit
        officiis saepe id similique at aliquid delectus quo repudiandae
        blanditiis! Voluptatum iusto magnam maiores earum nemo. Atque asperiores
        vel ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <br />
        <br />
        Sequi porro mollitia qui inventore suscipit corrupti perspiciatis
        ducimus dignissimos aliquam assumenda.
      </p>
    );
    technologies = [];
    liveSite = "https://travelfy-hector.netlify.app/";
  } else if (showcase === "nexter") {
    imageUrl = "./images/Nexter.jpg";
    description = (
      <p className="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam odit
        officiis saepe id similique at aliquid delectus quo repudiandae
        blanditiis! Voluptatum iusto magnam maiores earum nemo. Atque asperiores
        vel ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <br />
        <br />
        Sequi porro mollitia qui inventore suscipit corrupti perspiciatis
        ducimus dignissimos aliquam assumenda.
      </p>
    );
    technologies = [];
    liveSite = "https://nexter-hector-app.netlify.app/";
  }

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
          <img src={imageUrl} alt=""></img>
        </div>
        <div className="modal__information">
          <div className="modal__description">{description}</div>
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
                href={liveSite}
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
