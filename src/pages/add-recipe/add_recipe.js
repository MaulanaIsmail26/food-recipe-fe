import React from "react";
import { Link } from "react-router-dom";
import "../../styles/add-recipe/add_recipe.css";
import Footer2 from "../../components/organisms/footer2";

function addRecipe() {
  return (
    <div id="add-recipe">
      <div className="container-fluid add-recipe p-0">
        {/* <!-- NAVBAR --> */}
        <nav
          id="navbar"
          className="container navbar navbar-expand-lg p-0 mt-4 mb-4"
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
                  className="nav-link active text-decoration-none"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link
                  to="/add-recipe"
                  className="nav-link active fw-bold"
                  aria-current="page"
                >
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile-my-recipe"
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

        {/* <!-- FORM ADD RECIPE --> */}
        <section id="form" className="container">
          {/* <!-- form image --> */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <div className="btn btn-rounded">
                  <label
                    className="form-label form-label m-1 form-image text-center border bg-body-tertiary"
                    for="customFile1"
                  >
                    Choose file
                  </label>
                  <input
                    type="file"
                    className="form-control d-none"
                    id="customFile1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- form title --> */}
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-center">
              <input
                type="text"
                className="form-control form-title ps-4 py-2 bg-body-tertiary"
                placeholder="Title"
              />
            </div>
          </div>

          {/* <!-- form ingredient --> */}
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="form-ingredient">
                <div className="mb-3">
                  <textarea
                    className="form-control border-2 form-comment bg-body-tertiary"
                    rows="3"
                    placeholder="ingredients"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- form video --> */}
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-center">
              <input
                type="text"
                className="form-control form-title ps-4 py-2 bg-body-tertiary"
                placeholder="Video"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Link
                to="/detail-recipe"
                className="text-decoration-none text-light"
              >
                <button
                  type="button"
                  className="btn btn-warning text-light post"
                >
                  Post
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- END OF FORM ADD RECIPE --> */}

        {/* <!-- FOOTER --> */}
        <Footer2 />
        {/* <!-- END OF FOOTER --> */}
      </div>
    </div>
  );
}

export default addRecipe;
