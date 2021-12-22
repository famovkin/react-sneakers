import React, { useState } from "react";
import plus from "../images/button-plus.svg";
import plusAdded from "../images/button-added.svg";
import heartDefault from "../images/heart-default.svg";
import heartLiked from "../images/heart-liked.svg";
import { api } from "../utils/Api";

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const plusHandler = () => {
    if (!isAdded) {
      api
        .addItem(props, "cart")
        .then((response) => {
          props.onPlus(response);
          setIsAdded(true);
        })
        .catch((error) => console.log(error));
    }
  };

  const favoriteHandler = () => {
    if (!isFavorite) {
      api
        .addItem(props, "favorites")
        .then((response) => {
          props.onFavorite(response);
          setIsFavorite(!isFavorite);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <li className="card">
      <img
        onClick={favoriteHandler}
        className="card__favorite"
        src={isFavorite ? heartLiked : heartDefault}
        alt="Серое сердце"
      ></img>
      <img className="card__image" src={props.imgUrl} alt={props.title}></img>
      <p className="card__title">{props.title}</p>
      <div className="card__buy">
        <div className="card__price">
          <p className="card__price-title">Цена:</p>
          <p className="card__price-value">{props.price} руб.</p>
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
