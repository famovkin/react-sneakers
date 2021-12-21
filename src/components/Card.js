import React from "react";
import plus from "../images/button-plus.svg";
import heart from "../images/heart-default.svg";

function Card({ title, price, img }) {
  return (
    <li className="card">
      <img className="card__favorite" src={heart} alt="Серое сердце"></img>
      <img className="card__image" src={img} alt={title}></img>
      <p className="card__title">{title}</p>
      <div className="card__buy">
        <div className="card__price">
          <p className="card__price-title">Цена:</p>
          <p className="card__price-value">{price} руб.</p>
        </div>
        <button className="card__add-button">
          <img className="card__add-button-image" src={plus}></img>
        </button>
      </div>
    </li>
  );
}

export default Card;
