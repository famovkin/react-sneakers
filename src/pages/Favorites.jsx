import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Message from "../components/Message";
import { ItemsContext } from "../contexts/ItemsContext";
import { getRandomNumber } from "../utils/pages";

function Favorites({ onAddToCart, onAddToFavorites, onOpenCart }) {
  const state = useContext(ItemsContext);
  const [numberForEmoji, setNumberForEmoji] = useState(1);

  useEffect(() => {
    setNumberForEmoji(getRandomNumber(1, 10));
  }, []);

  return (
    <div className="page__wrapper">
      <Header onOpenCart={onOpenCart} />
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
            <Message
              img={
                process.env.PUBLIC_URL +
                `/images/emoji/emoji-${numberForEmoji}.png`
              }
              title="Закладок нет :("
              subtitle="Вы ничего не добавляли в закладки"
              alt="Смайлик"
            />
          )}
        </ul>
      </section>
    </div>
  );
}

export default Favorites;
