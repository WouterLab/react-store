import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="header">
      <p>
        <Link to="/">React Store</Link>
      </p>
      <div className="header__buttons">
        <button className="header__btn">
          <NavLink tabIndex="-1" to="/">
            Home
          </NavLink>
        </button>
        <button className="header__btn">
          <NavLink tabIndex="-1" to="/about">
            About Us
          </NavLink>
        </button>
        <button className="header__btn">
          <NavLink tabIndex="-1" to="/products">
            Products
          </NavLink>
        </button>
        <Link tabIndex="-1" to="/cart">
          <button className="header__btn cart_btn">
            Cart (<b>{props.count}</b>)
          </button>
        </Link>
      </div>
      <div
        onClick={() => setMenuActive((prev) => (prev = !prev))}
        className={
          menuActive
            ? "header__hamburger header__hamburger_active"
            : "header__hamburger"
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={menuActive ? "nav-menu nav-menu_active" : "nav-menu"}>
        <div className="header__buttons_hamburger">
          <button className="header__btn">
            <NavLink tabIndex="-1" to="/">
              Home
            </NavLink>
          </button>
          <button className="header__btn">
            <NavLink tabIndex="-1" to="/about">
              About Us
            </NavLink>
          </button>
          <button className="header__btn">
            <NavLink tabIndex="-1" to="/products">
              Products
            </NavLink>
          </button>
          <Link tabIndex="-1" to="/cart">
            <button className="header__btn cart_btn">
              Cart (<b>{props.count}</b>)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
