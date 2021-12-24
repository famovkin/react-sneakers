import React from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.svg";
import favorite from "../images/favorite.svg";
import logo from "../images/logo.png";
import profile from "../images/profile.svg";

function Header({ onOpenCart }) {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <div className="header__logo">
            <img className="logo" src={logo} alt="Кроссовки"></img>
            <div className="header__logo-text">
              <h1 className="header__title">React Sneakers</h1>
              <p className="header__subtitle">Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className="header__account">
          <li onClick={onOpenCart} className="header__cart">
            <img className="header__cart-image" src={cart} alt="Корзина"></img>
            <span className="header__price">1205 руб.</span>
          </li>
          <Link to="/favorites">
            <li>
              <img
                className="header__favorite"
                src={favorite}
                alt="Сердце"
              ></img>
            </li>
          </Link>
          <li>
            <img className="header__profile" src={profile} atl="Человек"></img>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
