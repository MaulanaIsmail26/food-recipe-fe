/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/landing_page.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import RecipeCardV1 from "../../components/molecules/RecipeCardV1";
import RecipeCardV2 from "../../components/molecules/RecipeCardV2";
import NewResipe from "../../components/organisms/newResipe";
import Loading from "../../components/molecules/loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [keyword, setKeyword] = React.useState("");
  const [recipeNotFound, setRecipeNotFound] = React.useState(false);
  const [msgErr, setMsgErr] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title?page=1&limit=6`
      )
      .then(({ data }) => {
        // console.log(data?.data);
        let totalPage = Math.ceil(data?.total / 6);
        setRecipe(data?.data);
        setTotalPage(totalPage);
      })
      .catch(() => setRecipe([]))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const fetchPagination = (pageParam) => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title?page=${pageParam}&limit=6`
      )
      .then(({ data }) => {
        // console.log(data?.data);
        let totalPage = Math.ceil(data?.total / 6);
        setRecipe(data?.data);
        setTotalPage(totalPage);
        setCurrentPage(pageParam);
      })
      .catch(() => setRecipe([]))
      .finally(() => {
        setIsLoading(false);
      });
  };

  // FEATURE SEARCH MOVIE
  const fetchByKeyword = () => {
    if (keyword && keyword !== "") {
      axios
        .get(
          `${process.env.REACT_APP_URL_BACKEND}recipes/get?search=${keyword}`
        )
        .then(({ data }) => {
          // console.log(data);
          if (data?.data !== undefined) {
            setRecipe(data?.data);
            setRecipeNotFound(false);
          } else {
            // console.log(data?.message)
            setMsgErr(data?.message);
            setRecipeNotFound(true);
          }
          setTotalPage(0);
        })
        .catch(() => setRecipe([]))
        .finally(() => setIsLoading(false));
    } else {
      axios
        .get(
          `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title?page=1&limit=6`
        )
        .then(({ data }) => {
          let totalPage = Math.ceil(data?.total / 6);
          setRecipe(data?.data);
          setTotalPage(totalPage);
          setRecipeNotFound(false);
        })
        .catch(() => setRecipe([]))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div id="home">
      <div className="container-fluid homepage clearfix">
        {/* <!-- NAVBAR --> */}
        <Navbar />
        {/* <!-- END OF NAVBAR --> */}

        {/* <!-- HOME PAGE --> */}
        <section id="home-page" className="container mb-5">
          <div className="row">
            <div className="col-md-5 side-left">
              <h1>Discover Recipe & Delicious Food</h1>
              <input
                type="email"
                className="form-control seacrh p-2 ps-4 border-0 text-secondary"
                placeholder="search recipe..."
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    fetchByKeyword();
                    navigate("/#popular-recipe");
                  }
                }}
              />
            </div>
          </div>
        </section>
        {/* <!-- END OF HOME PAGE --> */}

        {/* <!-- POPULAR FOR YOU --> */}
        <section id="popular-for-you" className="container">
          <h3 className="p-3 border-start border-dark border-5 mb-4">
            Popular For You !
          </h3>

          {isLoading ? <Loading /> : null}

          {recipe.length === 0 && !isLoading ? (
            <h2 className="d-flex justify-content-center">Recipe not found</h2>
          ) : null}

          <div className="row align-items-md-center">
            {recipe.slice(0, 3).map((item, key) => {
              return (
                <div className="col-3 me-1 mt-4" key={key}>
                  <RecipeCardV2
                    image={item?.picture}
                    name={item?.title}
                    url={item?.title}
                    slug={item?.slug}
                  />
                </div>
              );
            })}

            {!isLoading && recipe.length >= 1 ? (
              <div className="col-md-2 slogan">
                <h2 className="pb-2 border-bottom border-5 border-dark">
                  popular recipes just for you, read and learn more
                </h2>
              </div>
            ) : null}
          </div>
        </section>
        {/* <!-- END OF POPULAR FOR YOU --> */}

        {/* <!-- NEW RECIPE --> */}
        <section id="new-recipe" className="container">
          <h3 className="p-3 border-start border-dark border-5 mb-4">
            New Recipe
          </h3>

          {isLoading ? <Loading /> : null}

          {recipe.length === 0 && !isLoading ? (
            <h2 className="d-flex justify-content-center">Recipe not found</h2>
          ) : null}

          <div className="row align-items-md-center">
            {recipe.slice(0, 1).map((item, key) => {
              return (
                <div key={key}>
                  <NewResipe
                    image={item?.picture}
                    name={item?.title}
                    url={item?.title}
                    slug={item?.slug}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* <!-- END OF NEW RECIPE --> */}

        {/* <!-- POPULAR RECIPE --> */}
        <section id="popular-recipe" className="container">
          <h3 className="p-3 border-start border-dark border-5 mb-4">
            Popular Recipe
          </h3>

          {isLoading ? <Loading /> : null}

          {recipeNotFound && !isLoading ? (
            <h2 className="d-flex justify-content-center mb-5">
              Recipe not found
            </h2>
          ) : null}

          {!recipeNotFound && !isLoading ? (
            <div className="row">
              {!isLoading &&
                recipe.map((item, key) => {
                  return (
                    <div className="col-4" key={key}>
                      <RecipeCardV1
                        image={item?.picture}
                        name={item?.title}
                        url={item?.title}
                        slug={item?.slug}
                      />
                    </div>
                  );
                })}
            </div>
          ) : null}
        </section>
        {/* <!-- END OF POPULAR RECIPE --> */}

        {/* PAGINATION */}
        {!isLoading && !recipeNotFound ? (
          <section className="container pagination justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {[...new Array(totalPage)].map((item, key) => {
                  let position = ++key;
                  return (
                    <li className="page-item" key={key}>
                      <a
                        className={`page-link ${
                          currentPage === position
                            ? "active bg-dark border border-0 me-2 rounded-2"
                            : "border border-0 me-2 rounded-2 text-black"
                        }`}
                        onClick={() => {
                          fetchPagination(position);
                        }}
                      >
                        {position}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </section>
        ) : null}

        {/* END OF PAGINATION */}

        {/* <!-- FOOTER --> */}
        <Footer />
        {/* <!-- END OF FOOTER --> */}
      </div>
    </div>
  );
}

export default Home;
