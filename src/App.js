import "./App.css";
import logo from "./images/logo.png";
import cart from "./images/cart.svg";
import favorite from "./images/favorite.svg";
import profile from "./images/profile.svg";

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
                <img className="header__cart-image" src={cart} alt="Корзина"></img>
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
      </div>
    </div>
  );
}

export default App;
