import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.svg";
import favorite from "../images/favorite.svg";
import logo from "../images/logo.png";
import exit from "../images/exit.svg";
import profile from "../images/profile.svg";
import { AuthContext } from "../contexts/AuthContext";
import { useCheckout } from "./hooks/useCheckout";

function Header({ onOpenCart }) {
  const { setIsAuth } = useContext(AuthContext);
  const { itemsPrice } = useCheckout();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

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
            <img className="header__cart-image" src={cart} alt="Корзина" />
            <span className="header__price">{itemsPrice} руб.</span>
          </li>
          <Link to="/orders">
            <li>
              <img className="header__icon" src={profile} atl="Человек"></img>
            </li>
          </Link>
          <Link to="/favorites">
            <li>
              <img className="header__icon" src={favorite} alt="Сердце" />
            </li>
          </Link>
          <li>
            <img
              onClick={logout}
              className="header__icon"
              src={exit}
              alt="Выход"
            ></img>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
