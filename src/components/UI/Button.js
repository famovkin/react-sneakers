import React from "react";

function Button({ onClick, isLoading, children, modClass }) {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`button ${isLoading && "button_disabled"} ${modClass}`}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

export default Button;
