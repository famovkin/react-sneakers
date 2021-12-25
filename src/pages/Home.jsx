import React from "react";
import CardList from "../components/CardList";
import CardSearch from "../components/CardSearch";
import Header from "../components/Header";

function Home({
  searchQuery,
  setSearchQuery,
  searchedCards,
  onAddToCart,
  onAddToFavorites,
  onOpenCart,
  isLoading,
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
          <h3 className="store__search-result">Нет результатов</h3>
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
