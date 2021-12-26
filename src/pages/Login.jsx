import React, { useContext } from "react";
import Input from "../components/UI/Input";
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
        <img className="logo logo_type_login" src={logo} alt="Кроссовки" />
        <h1 className="login__title">Авторизация</h1>
        <Input type="text" placeholder="Логин" required/>
        <Input type="password" placeholder="Пароль" required/>
        <button className="button button_type_login">Войти</button>
      </form>
    </div>
  );
}

export default Login;
