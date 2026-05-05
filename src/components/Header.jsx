import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router";
function Header() {
  return (
    <nav className="flex justify-between px-8 py-2 items-center shadow-lg bg-amber-50 static top-0 z-50">
      <div className="logo">
        <img src={Logo} className="h-auto" alt="Logo" />
      </div>
      <ul className="flex justify-between gap-8 items-center font-bold">
        <Link to="" className="active:text-emerald-800">Yoga</Link>
        <Link>Diet</Link>
        <Link>About US</Link>
        <Link className="rounded-4xl bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Contact Us
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
