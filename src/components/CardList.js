import React from "react";
import Card from "./Card";

function CardList({ cards, onPlus, onFavorite }) {
  return (
    <ul className="cards-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          price={card.price}
          imgUrl={card.imgUrl}
          onPlus={onPlus}
          onFavorite={onFavorite}
        />
      ))}
    </ul>
  );
}

export default CardList;
