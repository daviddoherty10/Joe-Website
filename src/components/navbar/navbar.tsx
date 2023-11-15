"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Link from "next/link";
import pb from "../../lib/pocketbase";
import useLogout from "@/hooks/useLogout";

function Navbar() {
  const [active, setActive] = useState(false);
  const logout = useLogout();

  const handleLink = () => {
    setActive(false);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(pb.authStore.isValid); // Check login status on component mount
  }, []);

  return (
    <header>
      <h3>LOGO</h3>
      <nav className={active ? "responsive_nav" : ""}>
        <Link onClick={handleLink} href="/">
          Home
        </Link>
        <Link onClick={handleLink} href="./references">
          Meet Joe
        </Link>
        <Link onClick={handleLink} href="./store">
          Store
        </Link>
        <Link onClick={handleLink} href="./forum">
          Forum
        </Link>
        {loggedIn ? (
          <button
            onClick={() => {
              logout(); // Invoke the logout function
              setLoggedIn(false); // Update loggedIn state
            }}
          >
            Sign Out
          </button>
        ) : (
          <Link onClick={handleLink} href="./login">
            Login
          </Link>
        )}
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
          setLoggedIn(pb.authStore.isValid); // Incorrect usage: will store the function reference
        }}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
