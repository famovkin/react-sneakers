import React, { useState } from "react";
import Input from "../components/UI/Input";
import logo from "../images/logo.png";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Login({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const login = (event) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    onSubmit(password, email, setEmail, setPassword);
  };

  return (
    <div className="login">
      <form onSubmit={login} className="login__form">
        <img className="logo logo_type_login" src={logo} alt="Кроссовки" />
        <h1 className="login__title">Вход</h1>
        <Input
          value={email}
          onChange={onChangeEmail}
          type="email"
          placeholder="Почта"
          required
        />
        <Input
          value={password}
          onChange={onChangePassword}
          type="password"
          placeholder="Пароль"
          required
        />
        <button className="button button_type_login">Войти</button>
        <p className="login__text">
          Нет аккаунта?{" "}
          <Link className="login__link" to="/sign-up">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
