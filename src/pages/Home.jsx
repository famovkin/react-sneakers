import React from "react";
import CardList from "../components/CardList";
import CardSearch from "../components/CardSearch";
import Header from "../components/Header";
import Message from "../components/Message";
import emoji from "../images/emoji/emoji-3.png";

function Home({
  searchQuery,
  setSearchQuery,
  searchedCards,
  onAddToCart,
  onAddToFavorites,
  onOpenCart,
  isLoading,
  children,
}) {
  const emptyArray = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div className="page__wrapper">
      <Header onOpenCart={onOpenCart} />
      <section className="store">
        <div className="store__header">
          <h2 className="store__title">
            {searchQuery ? `Поиск по запросу: ${searchQuery}` : "Все кроссовки"}
          </h2>
          <CardSearch search={searchQuery} setSearch={setSearchQuery} />
        </div>
        {searchedCards.length === 0 && searchQuery ? (
          <Message
            img={emoji}
            title="Нет результатов"
            subtitle="Попробуйте найти что-нибудь другое"
            removeButton="true"
          />
        ) : (
          <CardList
            cards={isLoading ? emptyArray : searchedCards}
            onAddToCart={onAddToCart}
            onAddToFavorites={onAddToFavorites}
            isLoading={isLoading}
          />
        )}
        {children}
      </section>
    </div>
  );
}

export default Home;
