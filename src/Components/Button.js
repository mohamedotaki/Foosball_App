import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Button = (props) => {
  return (
    <button
      className={props.className}
      type={props.type || "button"}
      onClick={props.onClick}
      hidden={props.hidden ? "hidden" : ""}
    >
      {props.icon}
      {props.buttonName}
    </button>
  );
};

export default Button;
