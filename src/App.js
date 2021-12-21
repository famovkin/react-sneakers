import "./App.css";
import card1 from "./images/card-1.jpg";
import card2 from "./images/card-2.jpg";
import card3 from "./images/card-3.jpg";
import card4 from "./images/card-4.jpg";
import card5 from "./images/card-5.jpg";
import card6 from "./images/card-6.jpg";
import card7 from "./images/card-7.jpg";
import card8 from "./images/card-8.jpg";
import card9 from "./images/card-9.jpg";
import CardList from "./components/CardList";
import React, { useState, useMemo } from "react";
import CardSearch from "./components/CardSearch";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const sneakers = [
    {
      id: 1,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      img: card1,
    },
    {
      id: 2,
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      img: card2,
    },
    {
      id: 3,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      img: card3,
    },
    {
      id: 4,
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      img: card4,
    },
    {
      id: 5,
      title: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
      img: card5,
    },
    {
      id: 6,
      title: "Мужские Кроссовки Nike Kyrie 7",
      price: 11299,
      img: card6,
    },
    {
      id: 7,
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
      img: card7,
    },
    {
      id: 8,
      title: "Мужские Кроссовки Nike LeBron XVIII",
      price: 16499,
      img: card8,
    },
    {
      id: 9,
      title: "Мужские Кроссовки Nike Lebron XVIII Low",
      price: 13999,
      img: card9,
    },
  ];

  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

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

  return (
    <div className="page">
      {cartOpen && <Cart onClose={cartCloseHandler}/>}
      <div className="page__wrapper">
        <Header onClickCart={cartOpenHandler} />
        <section className="store">
          <div className="store__header">
            <h2 className="store__title">Все кроссовки</h2>
            <CardSearch search={search} setSearch={setSearch} />
          </div>
          <CardList cards={searchedCards} />
        </section>
      </div>
    </div>
  );
}

export default App;
