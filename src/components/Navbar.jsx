import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-4 place-content-evenly pb-3">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/pastes">Paste</NavLink>
    </div>
  );
};

export default Navbar;

// create
// update
// view
// listing down all the pastes
