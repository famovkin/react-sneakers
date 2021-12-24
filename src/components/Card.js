import React, { useState } from "react";
import plusAdded from "../images/button-added.svg";
import plus from "../images/button-plus.svg";
import heartDefault from "../images/heart-default.svg";
import heartLiked from "../images/heart-liked.svg";
import { api } from "../utils/Api";
import ContentLoader from "react-content-loader";

function Card({
  card,
  onAddToCart,
  onAddToFavorites,
  isOnFavoritesPage = false,
  isOnFavorites,
  isLoading,
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
      {isLoading ? (
        <ContentLoader
          speed={1}
          width={200}
          height={300}
          viewBox="0 0 210 300"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="5" rx="10" ry="10" width="146" height="145" />
          <rect x="0" y="168" rx="3" ry="3" width="146" height="15" />
          <rect x="0" y="187" rx="3" ry="3" width="90" height="15" />
          <rect x="0" y="226" rx="8" ry="8" width="80" height="25" />
          <rect x="114" y="220" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
        </>
      )}
    </li>
  );
}

export default Card;
