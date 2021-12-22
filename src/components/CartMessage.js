import React from "react";

function CartMessage({ img, title, subtitle, onClose }) {
  return (
    <div className="cart__message">
      <img className="cart__message-image" src={img} alt="Пустая коробка"></img>
      <h3 className="cart__message-title">{title}</h3>
      <p className="cart__message-subtitle">{subtitle}</p>
      <button onClick={onClose} className="button">
        Вернуться назад
      </button>
    </div>
  );
}

export default CartMessage;
