import React from "react";
import Card from "../components/Card";

function Favorites({
  favoriteItems,
  cartItems,
  onAddToCart,
  onAddToFavorites,
  isOnFavoritesPage,
}) {
  return (
    <section className="store">
      <div className="store__header">
        <h2 className="store__title">Мои закладки</h2>
      </div>
      <ul className="cards-grid">
        {favoriteItems.length ? (
          favoriteItems.map((card) => (
            <Card
              key={card.id}
              card={card}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              isOnFavoritesPage={isOnFavoritesPage}
              isOnCart={cartItems.some(
                (item) => item.customId === card.customId
              )}
            />
          ))
        ) : (
          <h3 className="store__search-result">Пока закладок нет</h3>
        )}
      </ul>
    </section>
  );
}

export default Favorites;
