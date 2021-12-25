import React, { useContext } from "react";
import Input from "../components/UI/input/Input";
import logo from "../images/logo.png";
import { AuthContext } from "../contexts/AuthContext";

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
