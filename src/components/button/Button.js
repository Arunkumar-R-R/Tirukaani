import React, { Children } from "react";
import "./Button.css";
export default function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`button ${props.type} ${props.className} ${props.borderRadius}`}
    >
      {
        props.children
      }
    </button>
  );
}
