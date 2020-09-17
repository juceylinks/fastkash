import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.scss";

function NavBar() {
  return (
    <React.Fragment>
      <div className="navigation">
        <div className="nav-items">
          <div className="logo">
            <Link to="/">
              {" "}
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>

          <div className="options">
            <NavLink exact to="/" activeClassName="nav-active">
              HOME
            </NavLink>
            <NavLink to="/about" activeClassName="nav-active">
              ABOUT
            </NavLink>
            <NavLink to="/product" activeClassName="nav-active">
              PRODUCTS
            </NavLink>
            <NavLink to="/faq" activeClassName="nav-active">
              FAQ
            </NavLink>
          </div>

          <div className="nav-button">
            <Link to="/">
              <div className="button">Login here</div>
            </Link>{" "}
          </div>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <ul className="options2">
          <NavLink exact to="/" activeClassName="nav-active">
            HOME
          </NavLink>
          <NavLink to="/about" activeClassName="nav-active">
            ABOUT
          </NavLink>
          <NavLink to="/product" activeClassName="nav-active">
            PRODUCTS
          </NavLink>
          <NavLink to="/faq" activeClassName="nav-active">
            FAQ
          </NavLink>
        </ul>
      </div>
    </React.Fragment>
  );
}
export default NavBar;
