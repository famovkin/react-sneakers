import React from "react";
import remove_button from "../images/remove-button.svg";
import card2 from "../images/card-2.jpg"; // хардкод
import card4 from "../images/card-4.jpg"; // хардкод

function Cart({ onClose }) {
  return (
    <div className="cart">
      <div className="cart__sidebar">
        <div className="cart__header">
          <h2 className="cart__title">Корзина</h2>
          <img
            onClick={onClose}
            className="cart-item__remove-button"
            src={remove_button}
            alt="Крестик"
          ></img>
        </div>
        <ul className="cart__items">
          <li className="cart-item">
            <img className="cart-item__image" src={card2} alt="#"></img>
            <div className="cart-item__text">
              <p className="cart-item__title">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <p className="cart-item__price">12 999 руб.</p>
            </div>
            <img
              className="cart-item__remove-button"
              src={remove_button}
              alt="Крестик"
            ></img>
          </li>
          <li className="cart-item">
            <img className="cart-item__image" src={card4} alt="#"></img>
            <div className="cart-item__text">
              <p className="cart-item__title">
                Мужские Кроссовки Nike Air Max 270
              </p>
              <p className="cart-item__price">8 499 руб.</p>
            </div>
            <img
              className="cart-item__remove-button"
              src={remove_button}
              alt="Крестик"
            ></img>
          </li>
        </ul>
        <ul className="order-info">
          <li className="order-info__content">
            <p className="order-info__title">Итого:</p>
            <div className="order-info__dots"></div>
            <p className="order-info__value">21 498 руб.</p>
          </li>
          <li className="order-info__content">
            <p className="order-info__title">Налог 5%:</p>
            <div className="order-info__dots"></div>
            <p className="order-info__value">1074 руб.</p>
          </li>
        </ul>
        <button className="cart__submit-button">Оформить заказ</button>
      </div>
    </div>
  );
}

export default Cart;
