/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/add-recipe/add_recipe.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
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
      <div className="container-fluid addRecipe p-0">
        {/* NAVBAR */}
        <Navbar />
        {/* END OF NAVBAR */}

        <section className="container form">
          {/* TITLE PAGE */}
          <div className="row titlePage">
            <div className="col-12 d-flex justify-content-center">
              <div>
                <h1>Add Your Recipe</h1>
              </div>
            </div>
          </div>
          {/* END OF TITLE PAGE */}

          {/* ADD IMAGE FORM */}
          <section className="row addImage">
            <div className="col-12 d-flex justify-content-center">
              <label className="custum-file-upload" for="file">
                {uploadImg === null ? (
                  <>
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill=""
                        viewBox="0 0 24 24"
                      >
                        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                        <g
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          id="SVGRepo_tracerCarrier"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fill=""
                            d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                    <div className="text">
                      <span>Click to upload a image of your recipe</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="imageRecipe"
                      style={{ backgroundImage: `url(${uploadImg})` }}
                    ></div>
                  </>
                )}
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    setUploadImg(URL.createObjectURL(e.target.files[0]));
                    setPicture(e.target.files[0]);
                    // URL.createObjectURL(e.target.files[0]);
                  }}
                />
              </label>
            </div>
          </section>
          {/* END OF ADD IMAGE FORM */}

          {/* ADD RECIPE TITLE */}
          <section className="row addRecipeTitle">
            <div className="col-12 d-flex justify-content-center">
              <input
                type="text"
                className="form-control form-title bg-body-tertiary"
                placeholder="Recipe Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </section>
          {/* END OF ADD RECIPE TITLE */}

          {/* ADD INGREDIENT */}
          <section className="row addIngredients">
            <div className="col-12 d-flex justify-content-center">
              <textarea
                type="text"
                className="form-control"
                placeholder="Ingredients"
                onChange={(e) => {
                  setIngredients(e.target.value);
                }}
              />
            </div>
          </section>
          {/* END OF ADD INGREDIENT */}

          {/* ADD A RECIPE VIDEO STEP LINK */}
          <section className="row addLinkVideo">
            <div className="col-12 d-flex justify-content-center">
              <input
                type="text"
                className="form-control"
                placeholder="Step video link (Example: https://www.youtube.com/....)"
                onChange={(e) => {
                  setVideo(e.target.value);
                }}
              />
            </div>
          </section>
          {/* END OF ADD A RECIPE VIDEO STEP LINK */}

          {/* BUTTON UPLOAD RECIPE */}
          <section className="row btnUpload">
            <div className="col-12 d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => {
                  sendData();
                }}
                disabled={loading}
              >
                {loading ? "Upload.." : "Post"}
              </button>
            </div>
          </section>
          {/* END OF BUTTON UPLOAD RECIPE */}
        </section>

        {/* FOOTER */}
        <Footer />
        {/* END OF FOOTER */}

        {/* STYLE FOR SCROLL BAR BROWSER */}
        <style>
          {`
            ::-webkit-scrollbar {
              width: 0em;
              height: 0.5em;
            }
            ::-webkit-scrollbar-thumb {
              background-color: rgba(0, 0, 0, 0.2);
            }
          `}
        </style>
        {/* STYLE FOR SCROLL BAR BROWSER */}
      </div>
    </div>
  );
}

export default AddRecipe;
