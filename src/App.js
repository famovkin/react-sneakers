import "./App.css";
import CardList from "./components/CardList";
import React, { useState, useMemo, useEffect } from "react";
import CardSearch from "./components/CardSearch";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { api } from "./utils/Api";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    api
      .getInitialItems("items")
      .then((response) => {
        setSneakers(response);
      })
      .catch((error) => console.log(error));
    api
      .getInitialItems("cart")
      .then((response) => {
        setCartSneakers(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const cartRemoveHandler = (deletedSneaker) => {
    api
      .removeItemFromCart(deletedSneaker.id)
      .then(() => {
        setCartSneakers((state) =>
          state.filter((sneaker) => sneaker.id !== deletedSneaker.id)
        );
      })
      .catch((error) => console.log(error));
  };

  const searchedCards = useMemo(() => {
    return sneakers.filter((card) =>
      card.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sneakers]);

  const cartOpenHandler = () => {
    setCartOpen(true);
  };

  const cartCloseHandler = () => {
    setCartOpen(false);
  };

  const onPlusClick = (cardData) => {
    setCartSneakers((prev) => [...prev, cardData]);
  };

  return (
    <div className="page">
      {cartOpen && (
        <Cart
          setCartSneakers={setCartSneakers}
          onClose={cartCloseHandler}
          cartSneakers={cartSneakers}
          onRemove={cartRemoveHandler}
        />
      )}
      <div className="page__wrapper">
        <Header onClickCart={cartOpenHandler} />
        <section className="store">
          <div className="store__header">
            <h2 className="store__title">
              {search ? `Поиск по запросу: ${search}` : "Все кроссовки"}
            </h2>
            <CardSearch search={search} setSearch={setSearch} />
          </div>
          {searchedCards.length ? (
            <CardList cards={searchedCards} onPlus={onPlusClick} />
          ) : (
            <h3 className="store__search-result">Нет результатов</h3>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
