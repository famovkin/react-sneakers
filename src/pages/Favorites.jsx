import React, { useContext } from "react";
import Card from "../components/Card";
import { ItemsContext } from "../contexts/ItemsContext";

function Favorites({ onAddToCart, onAddToFavorites }) {
  const state = useContext(ItemsContext);

  return (
    <section className="store">
      <div className="store__header">
        <h2 className="store__title">Мои закладки</h2>
      </div>
      <ul className="cards-grid">
        {state.favoriteItems.length ? (
          state.favoriteItems.map((card) => (
            <Card
              key={card.id}
              card={card}
              onAddToCart={onAddToCart}
              onAddToFavorites={onAddToFavorites}
              isOnFavoritesPage={true}
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
