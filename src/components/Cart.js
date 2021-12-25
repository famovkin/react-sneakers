import React, { useState, useContext } from "react";
import empty_box from "../images/empty-box.jpg";
import complete_order from "../images/complete-order.jpg";
import remove_button from "../images/remove-button-colored.svg";
import Message from "./Message";
import { SetItemsContext } from "../contexts/SetItemsContext";
import { api } from "../utils/Api";
import { useCheckout } from "./hooks/useCheckout";

function Cart({ cartItems, cartCloseHandler, onRemoveItem }) {
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const setState = useContext(SetItemsContext);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const { itemsPrice, shippingPrice, totalPrice } = useCheckout();

  const completeOrder = async () => {
    setIsLoading(true);
    api
      .addOrder(cartItems)
      .then((response) => {
        setOrderId(response.id);
        setState.setCartItems((prev) => [...prev, response]);
        setState.setCartItems([]);
        setIsOrderCompleted(true);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log(1));

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await api.removeItem(item.id, "cart");
      await delay(700);
    }
  };

  return (
    <div className="cart">
      <div className="cart__sidebar">
        <div className="cart__header">
          <h2 className="cart__title">Корзина</h2>
          <img
            onClick={cartCloseHandler}
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
                <p className="order-info__title">Товары:</p>
                <div className="order-info__dots"></div>
                <p className="order-info__value">{itemsPrice} руб.</p>
              </li>
              <li className="order-info__content">
                <p className="order-info__title">Доставка 5%:</p>
                <div className="order-info__dots"></div>
                <p className="order-info__value">{shippingPrice} руб.</p>
              </li>
              <li className="order-info__content">
                <b className="order-info__title">Итого:</b>
                <div className="order-info__dots"></div>
                <p className="order-info__value">{totalPrice} руб.</p>
              </li>
            </ul>
            <button
              disabled={isLoading}
              onClick={completeOrder}
              className={`button ${isLoading && "button_disabled"}`}
            >
              Оформить заказ
            </button>
          </>
        ) : (
          <Message
            img={isOrderCompleted ? complete_order : empty_box}
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            subtitle={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы один товар, чтобы оформить заказ"
            }
            onButtonClick={cartCloseHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
