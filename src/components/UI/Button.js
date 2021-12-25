import React from "react";

function Button({ onClick, isLoading, children }) {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`button ${isLoading && "button_disabled"}`}
    >
      {children}
    </button>
  );
}

export default Button;
