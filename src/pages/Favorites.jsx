import React, { useContext } from "react";
import Card from "../components/Card";
import { ItemsContext } from "../contexts/ItemsContext";
import Header from "../components/Header";
import Message from "../components/Message";
import emoji from "../images/emoji/emoji-1.png";

function Favorites({ onAddToCart, onAddToFavorites, onOpenCart }) {
  const state = useContext(ItemsContext);

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
              img={emoji}
              title="Закладок нет :("
              subtitle="Вы ничего не добавляли в закладки"
            />
          )}
        </ul>
      </section>
    </div>
  );
}

export default Favorites;
