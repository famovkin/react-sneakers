import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import CardSearch from "../components/CardSearch";
import Header from "../components/Header";
import Message from "../components/Message";
import { createEmptyArray, getRandomNumber } from "../utils/pages";

function Home({
  searchQuery,
  setSearchQuery,
  searchedCards,
  onAddToCart,
  onAddToFavorites,
  onOpenCart,
  isLoading,
  children,
  cardsCount,
}) {
  const [numberForEmoji, setNumberForEmoji] = useState(1);
  console.log(numberForEmoji);

  useEffect(() => {
    setNumberForEmoji(getRandomNumber(1, 10));
  }, [searchQuery]);
  const emptyArray = createEmptyArray(cardsCount);

  return (
    <div className="page__wrapper">
      <Header onOpenCart={onOpenCart} />
      <section className="store">
        <div className="store__header">
          <h2 className="store__title">
            {searchQuery ? `Поиск по: ${searchQuery}` : "Все кроссовки"}
          </h2>
          <CardSearch search={searchQuery} setSearch={setSearchQuery} />
          {children}
        </div>
        {searchedCards.length === 0 && searchQuery ? (
          <Message
            img={
              process.env.PUBLIC_URL +
              `/images/emoji/emoji-${numberForEmoji}.png`
            }
            title="Нет результатов"
            subtitle="Попробуйте найти что-нибудь другое"
            removeButton="true"
            alt="Смайлик"
          />
        ) : (
          <CardList
            cards={isLoading ? emptyArray : searchedCards}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            isLoading={isLoading}
          />
        )}
      </section>
    </div>
  );
}

export default Home;
