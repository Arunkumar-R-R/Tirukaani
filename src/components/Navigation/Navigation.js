import React from "react";
import { NavLink } from "react-router-dom";
import AddButton from "../AddButton/AddButton";
import "./Navigation.css";

export default function Navigation() {
  let activeStyle = {
    borderBottom: "2px solid var(--primary-color)",
  };
  return (
    <>
      <header className="navigation-container">
        <h6 className="logo">Thirukaani</h6>
        <div className="navigation-item">
          <NavLink activeStyle={activeStyle} to="/home" className="nav_item">
            <span className="nav_item_title">Home</span>
          </NavLink>
          <NavLink activeStyle={activeStyle} to="/account" className="nav_item">
            <span className="nav_item_title">Account</span>
          </NavLink>
          <AddButton className="ms-2"></AddButton>
        </div>
      </header>
    </>
  );
}
