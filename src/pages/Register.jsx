import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/UI/Input";
import logo from "../images/logo.png";

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Регистрация");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <img className="logo logo_type_login" src={logo} alt="Кроссовки" />
        <h1 className="login__title">Регистрация</h1>
        <Input type="email" placeholder="Почта" required />
        <Input type="password" placeholder="Пароль" required />
        <Input type="password" placeholder="Подтвердите пароль" required />
        <button className="button button_type_login">Создать аккаунт</button>
        <p className="login__text">
          Уже зарегистрированы?{" "}
          <Link className="login__link" to="/sign-in">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
