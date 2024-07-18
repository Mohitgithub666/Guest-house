import React, { useState } from "react";
import "./Header.css";

import { Link, NavLink } from "react-router-dom";

import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Navdata } from "../Data/Data";
import Logo from "../../assets/logo.webp";

export const Header = () => {
  const [IsShowing, SetShowing] = useState(false);
  return (
    <>
      <header className="head-nav">
        <div className="container header-con">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="kingsukh" />
            </Link>
          </div>
          <nav>
            <div
              className="menu-icon"
              onClick={() => SetShowing((prev) => !prev)}
            >
              {IsShowing ? <IoClose /> : <TiThMenu />}
            </div>
            <ul className={`navlink ${IsShowing ? "Show_nav" : "Hide_nav"}`}>
              {Navdata.map(({ name, path, id }) => {
                return (
                  <li key={id}>
                    <NavLink
                      to={path}
                      onClick={() => SetShowing((prev) => !prev)}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}

              <li>
                <button className="nav-btn">
                  <NavLink
                    to="/contact"
                    onClick={() => SetShowing((prev) => !prev)}
                  >
                    Contact
                  </NavLink>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
