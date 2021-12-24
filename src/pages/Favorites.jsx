import React from "react";
import Card from "../components/Card";

function Favorites({
  favoriteItems,
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
              onPlus={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              isOnFavoritesPage={isOnFavoritesPage}
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
