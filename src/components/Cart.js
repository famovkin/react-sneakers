import React from "react";
import remove_button from "../images/remove-button-colored.svg";

function Cart({ onClose, cartSneakers, onRemove }) {
  console.log(cartSneakers);

  const removeSneaker = (sneaker) => {
    console.log(sneaker);
    onRemove(sneaker);
  };

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
          {cartSneakers.map((sneaker) => (
            <li key={sneaker.id} className="cart-item">
              <img
                className="cart-item__image"
                src={sneaker.imgUrl}
                alt={sneaker.title}
              ></img>
              <div className="cart-item__text">
                <p className="cart-item__title">{sneaker.title}</p>
                <p className="cart-item__price">{sneaker.price} руб.</p>
              </div>
              <img
                onClick={() => removeSneaker(sneaker)}
                className="cart-item__remove-button"
                src={remove_button}
                alt="Крестик"
              ></img>
            </li>
          ))}
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
