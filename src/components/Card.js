import React, { useState } from "react";
import plus from "../images/button-plus.svg";
import plusAdded from "../images/button-added.svg";
import heartDefault from "../images/heart-default.svg";
import heartLiked from "../images/heart-liked.svg";

function Card({ title, price, img }) {
  const [isAdded, setIsAdded] = useState(false);

  const plusHandler = () => {
    setIsAdded((prevState) => !prevState);
  };

  return (
    <li className="card">
      <img className="card__favorite" src={heartDefault} alt="Серое сердце"></img>
      <img className="card__image" src={img} alt={title}></img>
      <p className="card__title">{title}</p>
      <div className="card__buy">
        <div className="card__price">
          <p className="card__price-title">Цена:</p>
          <p className="card__price-value">{price} руб.</p>
        </div>
        <button className="card__add-button">
          <img
            onClick={plusHandler}
            className="card__add-button-image"
            src={isAdded ? plusAdded : plus}
          ></img>
        </button>
      </div>
    </li>
  );
}

export default Card;
