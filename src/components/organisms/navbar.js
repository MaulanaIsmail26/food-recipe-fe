/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/landing_page.css";

export default function Navbar() {
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [isLogin, setIsLogin] = React.useState(localStorage.getItem("isLogin"));
  const [profile, setProfile] = React.useState(checkProfile);

  return (
    <div>
      <div id="navbar" className="container position-relative z-3">
        <nav className="container navbar navbar-expand-lg position-fixed pt-2 ps-2 pe-2 pb-2 rounded-bottom shadow">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-lg-5 me-0">
                <Link
                  to="/"
                  class="nav-link active fw-bold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-lg-5">
                <Link
                  to="add-recipe"
                  className="nav-link active"
                  aria-current="page"
                >
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="profile-my-recipe"
                  className="nav-link active"
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          {isLogin ? (
            <div>
              <Link to="profile-my-recipe">
                <img
                  className="rounded-circle"
                  // src={profile?.photo}
                  style={{
                    marginRight: "10px",
                    height: "50px",
                    width: "50px",
                    backgroundImage: `url(${profile?.photo})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
              </Link>
            </div>
          ) : (
            <form className="d-flex search" role="search">
              <Link to="/login">
                <button type="button" className="btn btn-outline-light me-2">
                  Log in
                </button>
              </Link>
              <Link to="/register">
                <button type="button" className="btn btn-light">
                  Sign Up
                </button>
              </Link>
            </form>
          )}
        </nav>
      </div>
    </div>
  );
}
