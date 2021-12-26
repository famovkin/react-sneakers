import React, { useContext, useState } from "react";
import { SetItemsContext } from "../contexts/SetItemsContext";
import { useCheckout } from "../hooks/useCheckout";
import complete_order from "../images/complete-order.jpg";
import empty_box from "../images/empty-box.jpg";
import remove_button from "../images/remove-button-colored.svg";
import right_arrow from "../images/right-arrow.svg";
import { api } from "../utils/Api";
import Message from "./Message";
import Button from "./UI/Button";

function Cart({ cartItems, cartCloseHandler, onRemoveItem, isCartOpened }) {
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
      .finally(() => setIsLoading(false));

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await api.removeItem(item.id, "cart");
      await delay(700);
    }
  };

  const closeCart = () => {
    cartCloseHandler();
    setIsOrderCompleted(false);
  };

  return (
    <div
      onClick={closeCart}
      className={`cart ${isCartOpened && "cart_visible"}`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`cart__sidebar ${isCartOpened && "cart__sidebar_visible"}`}
      >
        <div className="cart__header">
          <h2 className="cart__title">Корзина</h2>
          <img
            onClick={closeCart}
            className="close-button"
            src={remove_button}
            alt="Крестик"
          />
        </div>
        {cartItems.length ? (
          <>
            <ul className="cart__items">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img
                    className="cart-item__image"
                    src={process.env.PUBLIC_URL + item.imgUrl}
                    alt={item.title}
                  />
                  <div className="cart-item__text">
                    <p className="cart-item__title">{item.title}</p>
                    <p className="cart-item__price">{item.price} руб.</p>
                  </div>
                  <img
                    onClick={() => onRemoveItem(item)}
                    className="close-button"
                    src={remove_button}
                    alt="Крестик"
                  />
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
            <Button isLoading={isLoading} onClick={completeOrder}>
              Оформить заказ
              <img
                className="button__right-arrow"
                src={right_arrow}
                alt="Стрелка"
              />
            </Button>
          </>
        ) : (
          <Message
            img={isOrderCompleted ? complete_order : empty_box}
            title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
            subtitle={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            alt={isOrderCompleted ? "Документ с галочкой" : "Пустая корзина"}
            onButtonClick={closeCart}
          />
        )}
      </div>
    </div>
  );
}

export default Cart;
