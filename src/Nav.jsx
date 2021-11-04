import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/">
        <h2>Logo</h2>
      </Link>
      <nav>
        <ul>
          <NavLink
            to="/home"
            activeStyle={{ color: "green", textDecoration: "underline" }}
          >
            <li>Home</li>
          </NavLink>

          <NavLink to="/about" activeStyle={{ color: "blue" }}>
            <li>About</li>
          </NavLink>

          <NavLink to="/products" activeClassName="red">
            <li>Products</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
