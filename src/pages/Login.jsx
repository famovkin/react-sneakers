import React, { useContext } from "react";
import Input from "../components/UI/Input";
import logo from "../images/logo.png";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div className="login">
      <form onSubmit={login} className="login__form">
        <img className="logo logo_type_login" src={logo} alt="Кроссовки" />
        <h1 className="login__title">Вход</h1>
        <Input type="email" placeholder="Почта" required />
        <Input type="password" placeholder="Пароль" required />
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
