import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import plusAdded from "../images/button-added.svg";
import plusDefault from "../images/button-plus.svg";
import heartDefault from "../images/heart-default.svg";
import heartLiked from "../images/heart-liked.svg";
import { ItemsContext } from "../contexts/ItemsContext";

function Card({
  card,
  onAddToCart,
  onAddToFavorites,
  isOnFavoritesPage = false,
  isLoading,
}) {
  const cartHandler = () => {
    onAddToCart(card);
  };

  const favoriteHandler = () => {
    onAddToFavorites(card);
  };

  const state = useContext(ItemsContext);

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
          {onAddToFavorites && (
            <button className="card-button card-button_type_favorite">
              <img
                onClick={favoriteHandler}
                className="card-button__image"
                src={
                  (isOnFavoritesPage && heartLiked) ||
                  state.favoriteItems.some(
                    (item) => item.customId === card.customId
                  )
                    ? heartLiked
                    : heartDefault
                }
                alt="Серое сердце"
              />
            </button>
          )}
          <img
            className="card__image"
            src={process.env.PUBLIC_URL + card.imgUrl}
            alt={card.title}
          />
          <p className="card__title">{card.title}</p>
          <div className="card__buy">
            <div className="card__price">
              <p className="card__price-title">Цена:</p>
              <p className="card__price-value">{card.price} руб.</p>
            </div>
            <button className="card-button">
              {onAddToCart && (
                <img
                  onClick={cartHandler}
                  className="card-button__image"
                  src={
                    state.cartItems.some(
                      (item) => item.customId === card.customId
                    )
                      ? plusAdded
                      : plusDefault
                  }
                />
              )}
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Card;
