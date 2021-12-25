import React from "react";
import searchImg from "../images/search.svg";
import remove_button from "../images/remove-button.svg";

function CardSearch({ search, setSearch }) {
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
      <img
        onClick={() => setSearch("")}
        className="cart-item__remove-button cart-item__remove-button_type_input"
        src={remove_button}
        alt="Крестик"
      ></img>
    </div>
  );
}

export default CardSearch;
