import "./App.css";
import CardList from "./components/CardList";
import React, { useState, useMemo, useEffect } from "react";
import CardSearch from "./components/CardSearch";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://61c25977de977000179b5481.mockapi.io/items")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject("Что-то пошло не так :(");
      })
      .then((response) => {
        setSneakers(response);
        // console.log(response);
      });
  }, []);

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
        <Cart onClose={cartCloseHandler} cartSneakers={cartSneakers} />
      )}
      <div className="page__wrapper">
        <Header onClickCart={cartOpenHandler} />
        <section className="store">
          <div className="store__header">
            <h2 className="store__title">Все кроссовки</h2>
            <CardSearch search={search} setSearch={setSearch} />
          </div>
          <CardList cards={searchedCards} onPlus={onPlusClick} />
        </section>
      </div>
    </div>
  );
}

export default App;
