import React from "react";
import InputWithError from "../components/UI/InputWithError";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import useFormAndValidation from "../hooks/useFormAndValidation";

function Login({ onSubmit, isLoading }) {
  const { handleChange, values, errors, isFormValid, resetForm } =
    useFormAndValidation();

  const login = (event) => {
    event.preventDefault();
    if (!values["password"] || !values["email"]) {
      return;
    }
    onSubmit(values["password"], values["email"], resetForm);
  };

  return (
    <div className="login">
      <form onSubmit={login} className="login__form" noValidate>
        <img className="logo logo_type_login" src={logo} alt="Кроссовки" />
        <h1 className="login__title">Вход</h1>
        <InputWithError
          value={values["email"] || ""}
          onChange={handleChange}
          type="email"
          placeholder="Почта"
          name="email"
          isInvalid={errors["email"] ? true : false}
          errorText={errors["email"]}
          required
        />
        <InputWithError
          value={values["password"] || ""}
          onChange={handleChange}
          type="password"
          placeholder="Пароль"
          name="password"
          minLength="8"
          maxLength="40"
          isInvalid={errors["password"] ? true : false}
          errorText={errors["password"]}
          required
        />
        <button
          className={`button button_type_login ${
            isFormValid ? "" : "button_type_disabled"
          }`}
          disabled={!isFormValid}
        >
          {isLoading ? "Загрузка..." : "Войти"}
        </button>
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
