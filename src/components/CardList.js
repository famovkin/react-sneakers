import React from "react";
import Card from "./Card";

function CardList({ cards, onAddToCart, onAddToFavorites, favoriteItems }) {
  return (
    <ul className="cards-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
          isOnFavorites={favoriteItems.some(
            (item) => item.customId === card.customId
          )}
        />
      ))}
    </ul>
  );
}

export default CardList;
