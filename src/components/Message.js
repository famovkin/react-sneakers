import React from "react";
import left_arrow from "../images/left-arrow.svg";
import Button from "./UI/Button";
import { useHistory } from "react-router-dom";

function Message({
  img,
  title,
  subtitle,
  alt,
  onButtonClick,
  removeButton = false,
}) {
  const history = useHistory();

  return (
    <div className="message">
      <img className="message__image" src={img} alt={alt} />
      <h3 className="message__title">{title}</h3>
      <p className="message__subtitle">{subtitle}</p>
      {!removeButton && (
        <Button onClick={onButtonClick || history.goBack} className="button">
          <img className="button__left-arrow" src={left_arrow} alt="Стрелка" />
          Вернуться назад
        </Button>
      )}
    </div>
  );
}

export default Message;
