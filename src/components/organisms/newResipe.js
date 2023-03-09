import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/landing_page.css";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../../store/recipe";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewResipe(props) {
  const { image, name, url, slug } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div id="home">
      <div className="row align-items-md-center">
        <div className="col-6">
          <img
            src={image || "../asset/food-img4.jpg"}
            alt="placeholder"
            className="rounded-4 shadow image-recipe"
          />
        </div>
        <div className="col-5">
          <h2 className="title-recipe">
            {name} <br /> (Quick & Easy)
          </h2>
          <img
            src="../asset/Line.jpg"
            alt="placeholder"
            className="mt-3 mb-4 line"
            style={{ width: "60px" }}
          />
          <p className="mb-4 slogan">
            Are you looking for the latest cooking recipes? This is for you.
            Let's learn and start cooking
          </p>
          <div
            className="text-decoration-none"
            onClick={() => {
              axios
                .get(
                  `${process.env.REACT_APP_URL_BACKEND}recipes/get?search=${url}`
                )
                .then(({ data }) => {
                  dispatch(
                    recipeReducer.setDetail({
                      data: data?.data?.[0],
                      slug: slug,
                    })
                  );
                  navigate(`/detail-recipe/${slug}`);
                });
            }}
          >
            <button
              type="button"
              className="btn btn-dark d-grid gap-2 col-md-3 btn-learn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
