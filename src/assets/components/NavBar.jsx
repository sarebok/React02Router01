import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/contacto">
        <p>Contacto</p>
      </Link>
    </div>
  );
};

export default NavBar;
