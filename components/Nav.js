import React from "react";
import { Link } from "react-router-dom";
import "../style/Nav.css";

const Nav = () => {
  return (
    <div className="navBar">
      <ul className="navList">
        <li>
          <Link className="linkTag" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="linkTag" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
