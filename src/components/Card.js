import React, { useState } from "react";
import plusAdded from "../images/button-added.svg";
import plus from "../images/button-plus.svg";
import heartDefault from "../images/heart-default.svg";
import heartLiked from "../images/heart-liked.svg";
import { api } from "../utils/Api";

function Card({
  card,
  onAddToCart,
  onAddToFavorites,
  isOnFavoritesPage = false,
  isOnFavorites,
}) {
  const [isAdded, setIsAdded] = useState(card.isOnCart);
  const plusHandler = () => {
    if (!isAdded) {
      api
        .addItem(card, "cart")
        .then((response) => {
          onAddToCart(response);
          setIsAdded(true);
        })
        .catch((error) => console.log(error));
    }
  };

  const favoriteHandler = () => {
    onAddToFavorites(card);
  };

  return (
    <li className="card">
      <img
        onClick={favoriteHandler}
        className="card__favorite"
        src={
          (isOnFavoritesPage && heartLiked) || isOnFavorites
            ? heartLiked
            : heartDefault
        }
        alt="Серое сердце"
      ></img>
      <img className="card__image" src={card.imgUrl} alt={card.title}></img>
      <p className="card__title">{card.title}</p>
      <div className="card__buy">
        <div className="card__price">
          <p className="card__price-title">Цена:</p>
          <p className="card__price-value">{card.price} руб.</p>
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
