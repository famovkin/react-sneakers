import React from "react";
import CardList from "../components/CardList";
import CardSearch from "../components/CardSearch";

function Home({
  searchQuery,
  setSearchQuery,
  searchedCards,
  onAddToCart,
  onAddToFavorites,
  favoriteItems,
  isLoading,
}) {
  const emptyArray = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
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
            favoriteItems={favoriteItems}
            isLoading={isLoading}
          />
        )}
      </section>
    </div>
  );
}

export default Home;
