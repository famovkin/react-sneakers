import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InputWithError from "../components/UI/InputWithError";
import logo from "../images/logo.png";
import useFormAndValidation from "../hooks/useFormAndValidation";

function Register({ isLoading, onSubmit }) {
  const {
    handleChange,
    values,
    errors,
    setErrors,
    isFormValid,
    setIsFormValid,
    resetForm,
  } = useFormAndValidation();

  useEffect(() => {
    if (values["password"] !== values["confirmPass"]) {
      setErrors({
        ...errors,
        ["confirmPass"]: "Пароли не совпадают",
      });
      setIsFormValid(false);
    } else {
      setErrors({});
    }
  }, [isFormValid, values["confirmPass"]]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values["password"], values["email"], resetForm);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form" noValidate>
        <img className="logo logo_type_login" src={logo} alt="Кроссовки" />
        <h1 className="login__title">Регистрация</h1>
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
        <InputWithError
          value={values["confirmPass"] || ""}
          onChange={handleChange}
          type="password"
          placeholder="Подтвердите пароль"
          name="confirmPass"
          minLength="8"
          maxLength="40"
          isInvalid={errors["confirmPass"] ? true : false}
          errorText={errors["confirmPass"]}
          required
        />
        <button
          className={`button button_type_login ${
            isFormValid ? "" : "button_type_disabled"
          }`}
          disabled={!isFormValid}
        >
          {isLoading ? "Загрузка..." : "Создать аккаунт"}
        </button>
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
