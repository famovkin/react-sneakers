import "./App.css";
import logo from "./images/logo.png";
import cart from "./images/cart.svg";
import favorite from "./images/favorite.svg";
import profile from "./images/profile.svg";
import card1 from "./images/card-1.jpg";
import card2 from "./images/card-2.jpg";
import card3 from "./images/card-3.jpg";
import card4 from "./images/card-4.jpg";
import plus from "./images/button-plus.svg";
import search from "./images/search.svg";
import heart from "./images/heart-default.svg";
import remove_button from "./images/remove-button.svg";

function App() {
  return (
    <div className="page">
      <div className="cart">
        <div className="cart__sidebar">
          <h2 className="cart__title">Корзина</h2>
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
      <div className="page__wrapper">
        <header className="header">
          <div className="header__content">
            <div className="header__logo">
              <img className="logo" src={logo} alt="Кроссовки"></img>
              <div className="header__logo-text">
                <h1 className="header__title">React Sneakers</h1>
                <p className="header__subtitle">Магазин лучших кроссовок</p>
              </div>
            </div>
            <ul className="header__account">
              <li className="header__cart">
                <img
                  className="header__cart-image"
                  src={cart}
                  alt="Корзина"
                ></img>
                <span className="header__price">1205 руб.</span>
              </li>
              <li>
                <img
                  className="header__favorite"
                  src={favorite}
                  alt="Сердце"
                ></img>
              </li>
              <li>
                <img
                  className="header__profile"
                  src={profile}
                  atl="Человек"
                ></img>
              </li>
            </ul>
          </div>
        </header>
        <section className="store">
          <div className="store__header">
            <h2 className="store__title">Все кроссовки</h2>
            <div className="store__search">
              <img
                className="store__search-image"
                src={search}
                alt="Лупа"
              ></img>
              <input
                className="store__input"
                type="text"
                placeholder="Поиск..."
              ></input>
            </div>
          </div>

          <ul className="cards-grid">
            <li className="card">
              <img
                className="card__favorite"
                src={heart}
                alt="Серое сердце"
              ></img>
              <img className="card__image" src={card1}></img>
              <p className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__buy">
                <div className="card__price">
                  <p className="card__price-title">Цена:</p>
                  <p className="card__price-value">12 999 руб.</p>
                </div>
                <button className="card__add-button">
                  <img className="card__add-button-image" src={plus}></img>
                </button>
              </div>
            </li>
            <li className="card">
              <img className="card__image" src={card2}></img>
              <p className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__buy">
                <div className="card__price">
                  <p className="card__price-title">Цена:</p>
                  <p className="card__price-value">12 999 руб.</p>
                </div>
                <button className="card__add-button">
                  <img className="card__add-button-image" src={plus}></img>
                </button>
              </div>
            </li>
            <li className="card">
              <img className="card__image" src={card3}></img>
              <p className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__buy">
                <div className="card__price">
                  <p className="card__price-title">Цена:</p>
                  <p className="card__price-value">12 999 руб.</p>
                </div>
                <button className="card__add-button">
                  <img className="card__add-button-image" src={plus}></img>
                </button>
              </div>
            </li>
            <li className="card">
              <img className="card__image" src={card4}></img>
              <p className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__buy">
                <div className="card__price">
                  <p className="card__price-title">Цена:</p>
                  <p className="card__price-value">12 999 руб.</p>
                </div>
                <button className="card__add-button">
                  <img className="card__add-button-image" src={plus}></img>
                </button>
              </div>
            </li>
            <li className="card">
              <img className="card__image" src={card1}></img>
              <p className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__buy">
                <div className="card__price">
                  <p className="card__price-title">Цена:</p>
                  <p className="card__price-value">12 999 руб.</p>
                </div>
                <button className="card__add-button">
                  <img className="card__add-button-image" src={plus}></img>
                </button>
              </div>
            </li>
            <li className="card">
              <img className="card__image" src={card2}></img>
              <p className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__buy">
                <div className="card__price">
                  <p className="card__price-title">Цена:</p>
                  <p className="card__price-value">12 999 руб.</p>
                </div>
                <button className="card__add-button">
                  <img className="card__add-button-image" src={plus}></img>
                </button>
              </div>
            </li>
            <li className="card">
              <img className="card__image" src={card3}></img>
              <p className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__buy">
                <div className="card__price">
                  <p className="card__price-title">Цена:</p>
                  <p className="card__price-value">12 999 руб.</p>
                </div>
                <button className="card__add-button">
                  <img className="card__add-button-image" src={plus}></img>
                </button>
              </div>
            </li>
            <li className="card">
              <img className="card__image" src={card4}></img>
              <p className="card__title">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__buy">
                <div className="card__price">
                  <p className="card__price-title">Цена:</p>
                  <p className="card__price-value">12 999 руб.</p>
                </div>
                <button className="card__add-button">
                  <img className="card__add-button-image" src={plus}></img>
                </button>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
