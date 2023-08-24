import React from "react";

const Button = ({
  title,
  isDisabled,
  type,
  containerStyle,
  icon,
  handleClick,
}) => {
  return (
    <button
      disabled={isDisabled ?? false}
      type={type || "button"}
      className={`customButton ${containerStyle}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {icon && <div className="relative w-6 h-6">{icon}</div>}
    </button>
  );
};

export default Button;
