import React from "react";

function Message({ img, title, subtitle, onButtonClick }) {
  return (
    <div className="message">
      <img className="message__image" src={img} alt="Пустая коробка"></img>
      <h3 className="message__title">{title}</h3>
      <p className="message__subtitle">{subtitle}</p>
      <button onClick={onButtonClick} className="button">
        Вернуться назад
      </button>
    </div>
  );
}

export default Message;
