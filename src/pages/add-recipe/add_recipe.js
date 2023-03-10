/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/add-recipe/add_recipe.css";
import Footer2 from "../../components/organisms/footer2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddRecipe() {
  const navigate = useNavigate();
  const [uploadImg, setUploadImg] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [ingredients, setIngredients] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const [video, setVideo] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [uploadSuccess, setUploadSuccess] = React.useState(false);
  const [uploadError, setUploadError] = React.useState(false);
  const [errorMSg, setErrorMSg] = React.useState("");

  // check if already login
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/login");
    }
  });

  const sendData = () => {
    let bodyFormData = new FormData();
    setLoading(true);

    bodyFormData.append("title", title);
    bodyFormData.append("ingredients", ingredients);
    bodyFormData.append("picture", picture);
    bodyFormData.append("video", video);

    axios
      .post(`${process.env.REACT_APP_URL_BACKEND}recipes/add`, bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        setUploadSuccess(true);
        setUploadError(false);
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        if (error?.response?.data?.message?.title?.message) {
          setErrorMSg(
            error?.response?.data?.message?.title?.message ??
              "Something wrong in our server"
          );
        } else if (error?.response?.data?.message?.ingredients?.message) {
          setErrorMSg(
            error?.response?.data?.message?.ingredients?.message ??
              "Something wrong in our server"
          );
        } else if (error?.response?.data?.message?.picture?.message) {
          setErrorMSg(
            error?.response?.data?.message?.picture?.message ??
              "Something wrong in our server"
          );
        } else if (error?.response?.data?.message?.video?.message) {
          setErrorMSg(
            error?.response?.data?.message?.video?.message ??
              "Something wrong in our server"
          );
        } else if (error?.response?.data?.message) {
          setErrorMSg(
            error?.response?.data?.message ?? "Something wrong in our server"
          );
        } else {
          setErrorMSg("Something wrong in our server");
        }
        setUploadError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
                    className="form-label form-label m-1 form-image border bg-body-tertiary d-flex justify-content-center align-items-center"
                    for="customFile1"
                    style={{ backgroundImage: `url(${uploadImg})` }}
                  >
                    Choose file
                  </label>
                  <input
                    type="file"
                    className="form-control d-none"
                    id="customFile1"
                    accept="image/*"
                    onChange={(e) => {
                      setUploadImg(URL.createObjectURL(e.target.files[0]));
                      setPicture(e.target.files[0]);
                      // URL.createObjectURL(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              {uploadSuccess ? (
                <div
                  class="alert alert-success"
                  role="alert"
                  style={{
                    fontSize: "16px",
                    border: "0",
                    borderRadius: "8px",
                    padding: "13px 0 0 0",
                    width: "400px",
                  }}
                >
                  <p className="text-center">Recipe added successfully</p>
                </div>
              ) : null}

              {uploadError ? (
                <div
                  class="alert alert-danger"
                  role="alert"
                  style={{
                    fontSize: "16px",
                    border: "0",
                    borderRadius: "8px",
                    padding: "13px 0 0 0",
                    width: "400px",
                  }}
                >
                  <p className="text-center">{errorMSg}</p>
                </div>
              ) : null}
            </div>
          </div>

          {/* <!-- form title --> */}
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-center">
              <input
                type="text"
                className="form-control form-title ps-4 py-2 bg-body-tertiary"
                placeholder="Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
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
                    onChange={(e) => {
                      setIngredients(e.target.value);
                    }}
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
                onChange={(e) => {
                  setVideo(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="text-decoration-none text-light">
                <button
                  type="button"
                  className="btn btn-warning text-light post"
                  onClick={() => {
                    sendData();
                  }}
                  disabled={loading}
                >
                  {loading ? "Upload.." : "Post"}
                </button>
              </div>
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

export default AddRecipe;
