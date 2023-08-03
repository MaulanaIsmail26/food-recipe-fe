/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/detail-recipe/detailrecipe.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// IMPORT BY MATERIAL UI
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function DetailRecipe() {
  const navigate = useNavigate();
  const { recipe } = useSelector((state) => state); //jika redux nya lebih dari satu, state.(nama redux)

  // React.useEffect(() => {
  //   if (!recipe?.data) {
  //     navigate("/");
  //   }
  // });

  return (
    <div id="detail-recipe">
      <div className="container-fluid mainContainer p-0">
        {/* NAVBAR */}
        <Navbar />
        {/* END OF NAVBAR */}

        <section className="container content">
          {/* RECIPE TITLE */}
          <div className="row recipeTitle">
            <div className="col-12 d-flex justify-content-center">
              <div>
                <h1>Loream Sandwich</h1>
              </div>
            </div>
          </div>
          {/* END OF RECIPE TITLE */}

          {/* RECIPE IMAGE */}
          <div className="row recipeImage">
            <div className="col-12">
              <div>
                <img
                  src="../../asset/food-img9.jpg"
                  class="rounded mx-auto d-block shadow"
                  alt="recipe_image"
                ></img>
              </div>
            </div>
          </div>
          {/* END OF RECIPE IMAGE */}

          {/* RECIPE INGREDIENT */}
          <div className="row recipeIngredient">
            <div className="col-12 px-sm-5 px-4">
              {/* TITLE */}
              <div className="IngredientTitle">
                <h4>Ingredients</h4>
              </div>
              {/* INGREDIENTS */}
              <div className="Ingredient">
                - 2 eggs <br />- 2 tbsp mayonnaise <br />- 3 slices bread <br />
                - a little butter <br />- ⅓ carton of cress <br />- 2-3 slices
                of tomato or a lettuce leaf and a slice of ham or cheese <br />-
                crisps , to serve
              </div>
            </div>
          </div>
          {/* END OF RECIPE INGREDIENT */}

          {/* RECIPE INGREDIENT */}
          <div className="row recipeVideo">
            <div className="col-12 px-sm-5 px-4">
              {/* TITLE */}
              <div className="VideoTitle">
                <h4>Video Step</h4>
              </div>
              {/* VIDEO */}
              <div className="Video">
                <a href={recipe?.data?.video} target="_blank">
                  <button>
                    {" "}
                    <PlayArrowIcon />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* END OF RECIPE INGREDIENT */}
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

export default DetailRecipe;
