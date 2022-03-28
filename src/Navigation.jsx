import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-secondary bg-primary">
        <div className="container">
          <NavLink className="navbar-brand text-light" to="/">
            Website Name
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/rides">
                  Rides
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/map">
                  Map
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" id = "sign-in" to="/signin">
                  Sign-In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/profile">
                <i class="material-icons" >person</i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;