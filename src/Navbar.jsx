import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={"./photos/logo.png"} alt="Logo" className="nav-logo" />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/events">Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;
