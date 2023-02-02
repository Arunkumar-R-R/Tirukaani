import React from "react";
import "./button.css";
export default function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`button ${props.buttontype}`}
    >
      {props.isLoading ? "Loading... " : props.text}
    </button>
  );
}
