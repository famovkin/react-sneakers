import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { useCheckout } from "../hooks/useCheckout";
import cart from "../images/cart.svg";
import exit from "../images/exit.svg";
import favorite from "../images/favorite.svg";
import logo from "../images/logo.png";
import profile from "../images/profile.svg";

function Header({ onOpenCart, email }) {
  const { setIsAuth } = useContext(AppContext);
  const { itemsPrice } = useCheckout();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <header className="header">
      <div className="header__content">
        <NavLink exact to="/">
          <div className="header__logo">
            <img className="logo" src={logo} alt="Кроссовки" />
            <div className="header__logo-text">
              <h1 className="header__title">React Sneakers</h1>
              <p className="header__subtitle">Магазин лучших кроссовок</p>
            </div>
          </div>
        </NavLink>
        <ul className="header__account">
          <li onClick={onOpenCart} className="header__cart">
            <img className="header__cart-image" src={cart} alt="Корзина" />
            <span className="header__price">{itemsPrice} руб.</span>
          </li>
          <NavLink to="/orders" activeClassName="header__link_active">
            <li>
              <img className="header__icon" src={profile} alt="Человек" />
            </li>
          </NavLink>
          <NavLink to="/favorites" activeClassName="header__link_active">
            <li>
              <img className="header__icon" src={favorite} alt="Сердце" />
            </li>
          </NavLink>
          <li>
            <img
              onClick={logout}
              className="header__icon"
              src={exit}
              alt="Выход"
            />
          </li>
        </ul>
      </div>
      <p className="header__email">{email}</p>
    </header>
  );
}

export default Header;
