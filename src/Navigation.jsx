import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from './media/logo.png';

function Navigation() {
  const [user, error] = useAuthState(auth);
  if (user) {
    // working, fixed it
    document.getElementById("sign-in").innerHTML= "Signed In"
}
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-secondary bg-primary p-4">
        <div className="container">
          <NavLink className="navbar-brand text-light" to="/">
            <img className="logo mr-2" src={logo}/>
            Khedne Maak
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
                <NavLink className="nav-link text-light text-center" id = "sign-in" to="/signin">
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