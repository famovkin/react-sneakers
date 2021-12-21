import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  return (
    <ul className="cards-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          price={card.price}
          img={card.img}
        />
      ))}
    </ul>
  );
}

export default CardList;
