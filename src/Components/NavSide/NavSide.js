import React from "react";
import { NavLink } from "react-router-dom";

export default function NavSide() {
  return (
    <ul>
      {/* <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/news"> Breaking News</NavLink>
      </li>
      <li>
        <NavLink to="/notes">Notes</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li> */}
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
    </ul>
  );
}
