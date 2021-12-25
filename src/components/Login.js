import React from "react";
import Input from "./UI/input/Input";
import logo from "../images/logo.png";

function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <img className="logo logo_type_login" src={logo} alt="Кроссовки"></img>
        <h1 className="login__title">Авторизация</h1>
        <Input type="text" placeholder="Логин" />
        <Input type="password" placeholder="Пароль" />
        <button className="button button_type_login">Войти</button>
      </form>
    </div>
  );
}

export default Login;
