import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/landing_page.css";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../../store/recipe";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RecipeCardV2(props) {
  const { image, name, url, slug } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="cardAllRecipe position-relative"
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
        <img src={image} alt="img_recipe" className="imgRecipe" />
        <p className="position-absolute">{name}</p>
      </div>
      {/* <div
        className="nav-link"
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
        <div className="card rounded-3 shadow" style={{ width: "18vw", cursor: "pointer" }}>
          <img
            src={image || "../../asset/food-img6.jpg"}
            className="card-img-top"
            alt="placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
      </div> */}
    </div>
  );
}
