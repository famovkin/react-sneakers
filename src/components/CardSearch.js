import React from "react";
import searchImg from "../images/search.svg";

function CardSeacrh({ search, setSearch }) {
  return (
    <div className="store__search">
      <img className="store__search-image" src={searchImg} alt="Лупа"></img>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="store__input"
        type="text"
        placeholder="Поиск..."
      ></input>
    </div>
  );
}

export default CardSeacrh;
