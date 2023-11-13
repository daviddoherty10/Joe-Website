"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header>
      <h3>LOGO</h3>
      <nav className={active === true ? "responsive_nav" : ""}>
        <a href="/">Home</a>
        <a href="./references">Meet Joe</a>
        <a href="./store">Store</a>
        <a href="./forum">Forum</a>
        <a href="./login">Login</a>
        <button
          className="nav-btn nav-close-btn"
          onClick={() => {
            setActive(false);
          }}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={() => {
          setActive(true);
        }}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
