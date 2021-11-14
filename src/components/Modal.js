import React from "react";

export default function Modal({ setModalState, showcase }) {
  let [imageUrl, description, technologies, liveSite, repo] = [
    "",
    "",
    [],
    "",
    "",
  ];

  const renderTech = () =>
    technologies.map((tech, i) => <li key={i}>{tech}</li>);

  if (showcase === "heythere") {
    imageUrl = "./images/HeyThere.jpg";
    description = (
      <p className="p-1">
        Fully functional messaging app with real-time functionality and google
        authentication. The app allows the user to sign in using their google
        account, this lets their messages display their name and their own image
        inside the application, also rooms can be accessed to chat with other
        users. Pusher was used for real-time message updates, this allowed
        messages to show on screen each time a new message was added. The axios
        library was implemented to make requests to the REST API that was built
        with express and mongoose, this allowed the creation of new messages as
        well as access to the room information.
        <br />
        <br />
        Material UI Icons where used to display aesthetic icons and the moment
        library allowed the application to display how long ago a message was
        sent or received. The API for this app was deployed in heroku and the
        app itself in netlify.
      </p>
    );
    technologies = [
      "React",
      "React router",
      "Pusher",
      "SASS",
      "Material UI",
      "Material UI Icons",
      "Axios",
      "Firebase",
      "Moment",
      "Node",
      "MongoDB",
      "Mongoose",
      "Express",
    ];
    liveSite = "https://heythere-messaging.netlify.app/";
    repo = "https://github.com/hectorg2211/Heythere-messaging-app";
  } else if (showcase === "react-movies") {
    imageUrl = "./images/React-movies.jpg";
    description = (
      <p className="p-1">
        Fully responsive movie information page built with the use of The Movie
        Database API, by using this API movie images, actors, budget, duration
        and other information was fetched corresponding to each movie. The app
        also comes with a search feature allowing you to look for any movie with
        real-time updates.
        <br />
        <br />A glass look was given to each individual movie information screen
        for a modern visualization. On specific movie pages all actors, budget,
        duration and other information corresponding to the specific movie is
        displayed. Other animations we're also added for a more fluid look.
      </p>
    );
    technologies = ["React", "React-router", "TMDB", "Styled components"];
    liveSite = "https://reactmovieexplorer.netlify.app/";
    repo = "https://github.com/hectorg2211/React-movies";
  } else if (showcase === "natours") {
    imageUrl = "./images/Natours.jpg";
    description = (
      <p className="p-1">
        Completely responsive fictional tours app with modern animations. The
        app shows fully animated components as well as card flips which give the
        website an amazing look, these elements are showed stacked when used on
        a smaller screen which avoids the flipping animation to cause
        accessibility issues on smaller devices. A modern form is also displayed
        at the bottom section which has a personalized look.
      </p>
    );
    technologies = [
      "SASS",
      "Parcel",
      "HTML",
      "7 - 1 Structure",
      "Advanced animations",
    ];
    liveSite = "https://natours-hector-app.netlify.app/";
    repo = "https://github.com/hectorg2211/Natours";
  } else if (showcase === "rider") {
    imageUrl = "./images/Rider.jpg";
    description = (
      <p className="p-1">
        Fictional transportation app with google authentication, route tracing
        and price calculation. The authentication allows you to access the app
        and displays your google image on the screen. To sign out just click
        your own image.
        <br />
        <br />
        The Rider app allows you to sign in with google, select a pickup
        location as well as the dropoff. Once this is done a screen with mapbox
        shows map markers, the route it will take and the price for the rides
        you can take. To make use of the previously mentioned functionality the
        ride button must be selected and then the pickup and dropoff inputs will
        be displayed.
      </p>
    );
    technologies = [
      "React",
      "Next JS",
      "Tailwind CSS",
      "Tailwind styled components",
      "Mapbox API",
      "Firebase",
      "Authentication",
    ];
    liveSite = "https://rider-app.netlify.app/";
    repo = "https://github.com/hectorg2211/Rider-app";
  } else if (showcase === "travelfy") {
    imageUrl = "./images/Travelfy.jpg";
    description = (
      <p className="p-1">
        Fully responsive fictional tours app with focus on CSS flexbox and grid.
        <br />
        <br />
        This app adapts to any screen size allowing the user to see every
        component as well as all the used animations within the app.
      </p>
    );
    technologies = ["React", "SASS", "Parcel", "HTML", "Flexbox", "Grid"];
    liveSite = "https://travelfy-hector.netlify.app/";
    repo = "https://github.com/hectorg2211/Travelfy";
  } else if (showcase === "nexter") {
    imageUrl = "./images/Nexter.jpg";
    description = (
      <p className="p-1">
        Fully responsive fictional Real State app with focus on CSS flexbox and
        grid.
        <br />
        <br />
        This website adapts to any screen size allowing the user to see every
        component respond and relocate according to the screen:
      </p>
    );
    technologies = ["SASS", "Parcel", "HTML", "Flexbox", "Grid"];
    liveSite = "https://nexter-hector-app.netlify.app/";
    repo = "https://github.com/hectorg2211/Nexter";
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
            <ul className="modal__tech-list">{renderTech()}</ul>
            <div className="modal__tech-live">
              <a
                href={liveSite}
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Live site</span>
              </a>
              <a
                href={repo}
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                <span>Repo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
