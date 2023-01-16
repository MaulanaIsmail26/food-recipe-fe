import React from "react";
import { Link } from "react-router-dom";
import "../../styles/profile/profile.css";
import Footer from "../../components/organisms/footer";

function ProfileLiked() {
  return (
    <div id="profile-page">
      <div className="container-fluid p-0">
        {/* <!-- NAVBAR --> */}
        <nav
          id="navbar"
          className="container navbar navbar-expand-lg p-0 mt-4 mb-4 fw-bold"
        >
          <button
            className="navbar-toggler navbar-sm-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse list"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <Link
                  to="/"
                  className="nav-link fw-normal active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link
                  to="/add-recipe"
                  className="nav-link fw-normal active"
                  aria-current="page"
                >
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile-liked"
                  className="nav-link active"
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- END OF NAVBAR --> */}

        {/* <!-- PHOTO PROFILE & NAME --> */}
        <section id="profile" className="container">
          <div className="row text-center photo">
            <div className="col-12">
              <img
                src="../asset/photo-profile2.jpg"
                alt="placeholder"
                className="photo"
              />
            </div>
          </div>
          <div className="row text-center mt-4">
            <div className="col-12">
              <h6>Garneta Sharina</h6>
            </div>
          </div>
        </section>
        {/* <!-- END OF PHOTO PROFILE & NAME --> */}

        {/* <!-- MY RECIPES --> */}
        <nav id="navabr" className="navbar navbar-expand-lg container fw-bold">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <Link
                  to="/profile-my-recipe"
                  className="nav-link"
                  aria-current="page"
                >
                  My Recipe
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/profile-saved" className="nav-link">
                  Saved Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile-liked" className="nav-link active">
                  Liked Recipe
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- END OF MY RECIPES --> */}

        {/* <!-- RECIPE --> */}
        <section id="recipe" className="container mt-3">
          <div className="row">
            <div className="col-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src="../asset/food-img12.jpg"
                  className="card-img-top"
                  alt="placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Bomb Chicken</h5>
                  <Link to="/detail-recipe" className="btn btn-primary">
                    read recipe
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src="../asset/food-img-13.jpg"
                  className="card-img-top"
                  alt="placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Bananas Pancake</h5>
                  <Link to="/detail-recipe" className="btn btn-primary">
                    read recipe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF RECIPE --> */}

        {/* <!-- FOOTER --> */}
        <Footer />
        {/* <!-- END OF FOOTER --> */}
      </div>
    </div>
  );
}

export default ProfileLiked;
