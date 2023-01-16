import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/landing_page.css";

export default function newResipe(props) {
  const { image, name, url } = props;
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
          <Link to={`/detail-recipe/${url}`} className="text-decoration-none">
            <button
              type="button"
              className="btn btn-dark d-grid gap-2 col-md-3 btn-learn"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
