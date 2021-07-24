import React from "react";

import { NavLink } from "react-router-dom";
import "./header.css";

const Header = ({restartState}) => {
  return (
    <nav className="navbar navbar-light bg-light header">
      <div className="container-fluid">
        <NavLink 
        onClick={() => restartState()}
          to="/"
          style={{
            fontWeight: "bold",
            color: "black",
            fontFamily: ["Audiowide", "sans-serif"],
            textDecoration: "none",
            fontSize: "2em"
          }}
        >
          EW
        </NavLink>

        <NavLink
        onClick={() => restartState()}
          to="/"
          style={{
            fontWeight: "bold",
            color: "black",
            fontFamily: ["Audiowide", "sans-serif"],
            textDecoration: "none",
            fontSize: "1em"
          }}
        >
          Search
        </NavLink>

        <NavLink
          to="/favorites"
          style={{
            fontWeight: "bold",
            color: "black",
            fontFamily: ["Audiowide", "sans-serif"],
            textDecoration: "none",
            fontSize: "1em"
          }}
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
