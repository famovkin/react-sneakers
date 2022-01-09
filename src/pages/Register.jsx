import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/UI/Input";
import logo from "../images/logo.png";

function Register({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);
  const onChangeConfirmPass = (event) => setConfirmPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      onSubmit(password, email);
    } else {
      console.log("Пароли НЕ совпадают");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <img className="logo logo_type_login" src={logo} alt="Кроссовки" />
        <h1 className="login__title">Регистрация</h1>
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
        <Input
          value={confirmPassword}
          onChange={onChangeConfirmPass}
          type="password"
          placeholder="Подтвердите пароль"
          required
        />
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
