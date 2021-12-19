import "./App.css";
import logo from "./images/logo.png";
import cart from "./images/cart.svg";
import favorite from "./images/favorite.svg";
import profile from "./images/profile.svg";
import card1 from "./images/card-1.jpg";
import card2 from "./images/card-2.jpg";
import card3 from "./images/card-3.jpg";
import card4 from "./images/card-4.jpg";
import plus from "./images/plus.svg";

function App() {
  return (
    <div className="page">
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
          <h2 className="store__title">Все кроссовки</h2>
          <ul className="cards-grid">
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
