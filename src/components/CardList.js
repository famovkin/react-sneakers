import React from "react";
import Card from "./Card";

function CardList({
  cards,
  onAddToCart,
  onAddToFavorites,
  favoriteItems,
  isLoading,
}) {
  return (
    <ul className="cards-grid">
      {cards.map((card, index) => (
        <Card
          key={isLoading ? index : card.id}
          card={card}
          onAddToCart={onAddToCart}
          onAddToFavorites={onAddToFavorites}
          isOnFavorites={favoriteItems.some(
            (item) => item.customId === card.customId
          )}
          isLoading={isLoading}
        />
      ))}
    </ul>
  );
}

export default CardList;
