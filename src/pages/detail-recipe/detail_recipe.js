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
                <h1>{recipe?.data?.title}</h1>
              </div>
            </div>
          </div>
          {/* END OF RECIPE TITLE */}

          {/* RECIPE IMAGE */}
          <div className="row recipeImage">
            <div className="col-12">
              <div>
                <img
                  src={recipe?.data?.picture}
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
              <div>
                <p
                  className="Ingredient"
                  dangerouslySetInnerHTML={{
                    __html: recipe?.data?.ingredients,
                  }}
                ></p>
              </div>
            </div>
          </div>
          {/* END OF RECIPE INGREDIENT */}

          {/* RECIPE VIDEO */}
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
                    <PlayArrowIcon className="iconPlay" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* END OF RECIPE VIDEO */}
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
