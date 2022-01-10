import React from "react";
import Button from "./UI/Button";
import success from "../images/success.png";
import failure from "../images/failure.png";

function InfoTip({ isOpen, message, isSuccess, closeInfoTip }) {
  return (
    <div
      onClick={closeInfoTip}
      className={`popup ${isOpen ? "popup_opened" : ""}`}
    >
      <div onClick={(event) => event.stopPropagation()} className="info-tip">
        <div
          className={`info-tip__color-part info-tip__color-part_type_${
            isSuccess ? "success" : "failure"
          }`}
        >
          <img
            className="info-tip__image"
            src={isSuccess ? success : failure}
          />
          <p className="info-tip__title">{isSuccess ? "Успешно" : "Ошибка"}</p>
        </div>
        <div className="info-tip__content">
          <p className="info-tip__text">{message}</p>
          <Button
            modClass={!isSuccess && "button_type_error"}
            onClick={closeInfoTip}
          >
            {isSuccess ? "Продолжить" : "Попробовать еще раз"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InfoTip;
