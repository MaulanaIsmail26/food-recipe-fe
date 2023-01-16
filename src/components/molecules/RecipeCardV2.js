import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/landing_page.css";

export default function RecipeCardV2(props) {
  const { image, name, url } = props;
  return (
    <div>
      <Link to={`/detail-recipe/${url}`} className="nav-link">
        <div className="card rounded-3 shadow" style={{ width: "18vw" }}>
          <img
            src={image || "../../asset/food-img6.jpg"}
            className="card-img-top"
            alt="placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
