import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <div className="header--top-line"></div>
    <header>
      <Link to="/">
        <h1>minimalist blog</h1>
      </Link>
      <p>personal blog/weblog concept</p>
    </header>
  </>
);

export default Header;
