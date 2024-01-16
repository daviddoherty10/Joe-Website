"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import Link from "next/link";
import pb from "../../../lib/pocketbase";
import useLogout from "../../../hooks/authenticationHooks/useLogout/useLogout";

function Navbar() {
  const [active, setActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const logout = useLogout();
  const user = pb.authStore.model;
  const [ num, setNum] = useState(0);

  const handleLink = () => {
    setNum(num + 1);
    setActive(false);
  };

  useEffect(() => {
    setLoggedIn(pb.authStore.isValid || false);
  }, [num]);



  return (
    <header>
      <h3>LOGO</h3>
      <nav className={active ? "responsive_nav" : ""}>
        <Link onClick={handleLink} href="/">
          Home
        </Link>
        <Link onClick={handleLink} href="/references">
          Meet Joe
        </Link>
        <Link onClick={handleLink} href="/store">
          Store
        </Link>
        <Link onClick={handleLink} href="/forum">
          Forum
        </Link>
        {loggedIn === true ? (
          <div className="dropdown">
            <button className="dropbtn">{user?.username}</button>
            <div className="dropdown-content">
              <Link href="./account">Account</Link>
              <Link
                onClick={() => {
                  logout(); // Invoke the logout function
                  setLoggedIn(false); // Update loggedIn state
                  setActive(false);
                }}
                href="./login"
              >
                Sign Out
              </Link>
            </div>
          </div>
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
        }}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
