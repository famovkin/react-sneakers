import React from "react";
import close_button from "../images/remove-button-colored.svg";

function PopupWithImage(props) {
  return (
    <div className={`popup ${props.isImagePopupOpened && "popup_opened"}`}>
      <div className="popup__container">
        <img
          className="popup__image"
          src={process.env.PUBLIC_URL + props.selectedCard.imgUrl}
          alt={props.selectedCard.title}
        />
        <p className="popup__title">{props.selectedCard.title}</p>
        <button
          onClick={props.closeImagePopup}
          className="close-button close-button_type_popup"
        >
          <img
            className="close-button__image"
            src={close_button}
            alt="Крестик"
          />
        </button>
      </div>
    </div>
  );
}

export default PopupWithImage;
