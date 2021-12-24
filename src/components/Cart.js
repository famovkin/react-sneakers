import React from "react";
import empty_box from "../images/empty-box.jpg";
import remove_button from "../images/remove-button-colored.svg";
import CartMessage from "./CartMessage";

function Cart({ cartItems, onClose, onRemoveItem }) {
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
        {cartItems.length ? (
          <>
            <ul className="cart__items">
              {cartItems.map((sneaker) => (
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
                    onClick={() => onRemoveItem(sneaker)}
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
            <button className="button">Оформить заказ</button>
          </>
        ) : (
          <CartMessage
            img={empty_box}
            title="Корзина пустая"
            subtitle="Добавьте хотя бы один товар, чтобы оформить заказ"
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
