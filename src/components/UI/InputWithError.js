import React from "react";

function InputWithError({ isInvalid, errorText, ...props }) {
  return (
    <>
      <input
        {...props}
        className={`input ${isInvalid ? "input_type_error" : ""}`}
      />
      <span className="input__error">{errorText}</span>
    </>
  );
}

export default InputWithError;
