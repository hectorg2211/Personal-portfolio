import React from "react";

export default function Modal() {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal__img"></div>
        <div className="modal__information">
          <div className="modal__description"></div>
          <div className="modal__technologies"></div>
        </div>
      </div>
    </div>
  );
}
