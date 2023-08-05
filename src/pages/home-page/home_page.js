/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/landing_page.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import PopularForYou from "../../components/molecules/popularForYou";
import AllRecipe from "../../components/molecules/allRecipe";
import NewResipe from "../../components/organisms/newResipe";
import Loading from "../../components/molecules/loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// IMPORT BY MATERIAL UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../../store/recipe";

function Home() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = React.useState([]);
  const [recipePopular, setRecipePopular] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingPagination, setIsLoadingPagination] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [keyword, setKeyword] = React.useState("");
  const [recipeNotFound, setRecipeNotFound] = React.useState(false);
  const [msgErr, setMsgErr] = React.useState("");
  const [sortByDate, setSortByDate] = React.useState("descending");
  const [searchRecipe, setSearchRecipe] = React.useState(``);
  const [searchRecipeOn, setSearchRecipeOn] = React.useState(false);
  const [sortOn, setSortOn] = React.useState(true);

  const [popularForYou, setPopularForYou] = React.useState([]);

  console.log(popularForYou[0]);

  const dispatch = useDispatch();

  // GET ALL RECIPES WITH PAGINATION
  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title?page=1&limit=8`
      )
      .then(({ data }) => {
        // console.log(data?.data);
        let totalPage = Math.ceil(data?.total / 8);
        setRecipe(data?.data);
        setTotalPage(totalPage);
      })
      .catch(() => setRecipe([]))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title?page=1&limit=8`
      )
      .then(({ data }) => {
        // console.log(data?.data);
        let totalPage = Math.ceil(data?.total / 8);
        setRecipePopular(data?.data);
        setTotalPage(totalPage);
      })
      .catch(() => setRecipe([]))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // GET RECIPE BY UPLOAD DATE
  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}recipes/sort/date?sort=descending`
      )
      .then(({ data }) => {
        // console.log(data?.data);
        setPopularForYou(data?.data);
      })
      .catch(() => setRecipe([]))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // FEATURE PAGINATION
  const fetchPagination = (pageParam) => {
    setIsLoadingPagination(true);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title?page=${pageParam}&limit=8`
      )
      .then(({ data }) => {
        // console.log(data?.data);
        let totalPage = Math.ceil(data?.total / 8);
        setRecipePopular(data?.data);
        setTotalPage(totalPage);
        setCurrentPage(pageParam);
      })
      .catch(() => setRecipe([]))
      .finally(() => {
        setIsLoadingPagination(false);
      });
  };

  // FEATURE SEARCH RECIPES
  const fetchByKeyword = () => {
    if (keyword && keyword !== "") {
      axios
        .get(
          `${process.env.REACT_APP_URL_BACKEND}recipes/get?search=${keyword}`
        )
        .then(({ data }) => {
          // console.log(data);
          if (data?.data !== undefined) {
            setRecipePopular(data?.data);
            setRecipeNotFound(false);
            setSearchRecipeOn(true);
            setSortOn(false);
          } else {
            // console.log(data?.message)
            setMsgErr(data?.message);
            setRecipeNotFound(true);
            setSearchRecipeOn(true);
            setSortOn(false);
          }
          setTotalPage(0);
        })
        .catch(() => setRecipePopular([]))
        .finally(() => setIsLoading(false));
    } else {
      axios
        .get(
          `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title?page=1&limit=8`
        )
        .then(({ data }) => {
          let totalPage = Math.ceil(data?.total / 8);
          setRecipePopular(data?.data);
          setTotalPage(totalPage);
          setRecipeNotFound(false);
          setSearchRecipeOn(false);
          setSortOn(true);
        })
        .catch(() => setRecipePopular([]))
        .finally(() => setIsLoading(false));
    }
  };

  // FEATURE SORTING RECIPES BY NAME
  const fetchSortByName = (sort) => {
    if (sort === "") {
      axios
        .get(`${process.env.REACT_APP_URL_BACKEND}recipes/sort/title`)
        .then(({ data }) => {
          setRecipePopular(data?.data);
          setTotalPage(0);
        })
        .catch(() => setRecipePopular([]))
        .finally(() => setIsLoading(false));
    } else {
      axios
        .get(
          `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title?sort=${sort}`
        )
        .then(({ data }) => {
          setRecipePopular(data?.data);
          setTotalPage(0);
        })
        .catch(() => setRecipePopular([]))
        .finally(() => setIsLoading(false));
    }
  };

  // FEATURE SORTING RECIPES BY NAME
  const fetchSortByDate = (sort) => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}recipes/sort/date?sort=${sort}`)
      .then(({ data }) => {
        setRecipePopular(data?.data);
        setTotalPage(0);
      })
      .catch(() => setRecipePopular([]))
      .finally(() => setIsLoading(false));
  };

  // NAVBAR MATERIAL UI
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div id="home">
      <div className="container-fluid p-0 mainContainer homepage clearfix">
        {/* NAVBAR */}
        <Navbar />
        {/* END OF NAVBAR */}

        {/* HOME MAIN PAGE */}
        <div className="container-fluid mx-0 p-0 homeMainContainer">
          <div className="container">
            <div className="row me-0 pe-0 ms-0 ps-0" style={{ height: "100%" }}>
              <div
                className="col-12 me-0 pe-0 ms-0 ps-0 d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <div className="contentMainHome">
                  {/* ICON APP */}
                  <div className="iconApp d-flex justify-content-center">
                    <img
                      src="../../asset/iconApp.png"
                      alt="iconApp"
                      className="icon"
                    />
                  </div>
                  {/* SLOGAN */}
                  <div className="slogan d-flex justify-content-center">
                    <p>
                      Discover Recipe &<br /> Delicious Food
                    </p>
                  </div>
                  {/* SEARCH RECIPE */}
                  <div className="search d-flex justify-content-center">
                    <div className="group">
                      <svg
                        className="icon"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                      </svg>
                      <input
                        placeholder="Search Recipe"
                        type="search"
                        className="input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END OF HOME MAIN PAGE */}

        {/* SECTION POPULAR FOR YOU (RECIPES) */}
        <section className="container forYou">
          {/* TITLE SECTION */}
          <div className="row title">
            <div className="col-12 py-sm-5 d-flex justify-content-center">
              <div>
                <h1>Popular For You!</h1>
                <p>Popular recipes just for you. Read and learn more.</p>
              </div>
            </div>
          </div>

          {/* LOADING */}
          {isLoading ? <Loading /> : null}

          {/* IF RECIPE UNDEFINED */}
          {popularForYou.length === 0 && !isLoading ? (
            <h2 className="d-flex justify-content-center">Recipe not found</h2>
          ) : null}

          {/* RECIPES SECTION */}
          <div className="row recipes">
            <div className="col-12 colRecipes d-flex justify-content-evenly">
              {popularForYou.slice(0, 3).map((item, key) => {
                return (
                  <div className="col-3 me-1 mt-4" key={key}>
                    <PopularForYou
                      image={item?.picture}
                      name={item?.title}
                      url={item?.title}
                      slug={item?.slug}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* END OF SECTION POPULAR FOR YOU (RECIPES) */}

        {/* NEW RECIPE SECTION */}
        <section className="container-fluid newRecipes">
          <div className="container">
            {/* TITLE SECTION */}
            <div className="row title">
              <div className="col-12 d-flex justify-content-center">
                <div>
                  <h1>New Recipe</h1>
                  <p>One new recipe for you. Read and learn more.</p>
                </div>
              </div>
            </div>

            {/* LOADING */}
            {isLoading ? <Loading /> : null}

            {/* IF RECIPE UNDEFINED */}
            {recipe.length === 0 && !isLoading ? (
              <h2 className="d-flex justify-content-center">
                Recipe not found
              </h2>
            ) : null}

            {/* RECIPE SECTION */}
            {popularForYou.length > 0 && !isLoading ? (
              <>
                <div className="row recipe">
                  {/* IMAGE RECIPE */}
                  <div className="col-sm-6 col-12 leftSide">
                    <img
                      src={popularForYou[0]?.picture}
                      className="img-fluid recipeImg rounded-3"
                      alt="recipe_image"
                    />
                  </div>

                  {/* TITLE RECIPE */}
                  <div className="col-sm-6 col-12 rightSide d-flex align-items-center">
                    <div>
                      {/* TITLE RECIPE */}
                      <div className="titleRecipe">
                        <h2>{popularForYou[0]?.title}</h2>
                      </div>
                      <div className="subTitle">
                        <h4>(Quick & Easy)</h4>
                      </div>
                      <div className="line"></div>
                      {/* SLOGAN */}
                      <div className="slogan">
                        <p>
                          Are you looking for the latest cooking recipes? This
                          is for you. Let's learn and start cooking.
                        </p>
                      </div>
                      {/* BUTTON LEARN */}
                      <div className="btnLearn">
                        <button
                          type="button"
                          class="btn"
                          onClick={() => {
                            axios
                              .get(
                                `${process.env.REACT_APP_URL_BACKEND}recipes/get?search=${popularForYou[0]?.title}`
                              )
                              .then(({ data }) => {
                                dispatch(
                                  recipeReducer.setDetail({
                                    data: popularForYou[0],
                                    slug: popularForYou[0]?.title,
                                  })
                                );
                                navigate(
                                  `/detail-recipe/${popularForYou[0]?.title}`
                                );
                              });
                          }}
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </section>
        {/* END OF NEW RECIPE SECTION */}

        {/* ALL RECIPE SECTION */}
        <section className="container AllRecipes">
          {/* TITLE SECTION */}
          <div className="row title">
            <div className="col-12 d-flex justify-content-center">
              <div>
                <h1>All Recipes</h1>
                <p>
                  All recipes are here. Find simple, delicious and fast recipes.
                </p>
              </div>
            </div>
          </div>
          {/* SUB TITLE AND FEATURE SORTING */}
          <div className="row subTitle">
            <div className="col-12 d-flex justify-content-between">
              <div>
                <h3>Recipes Collection</h3>
              </div>
              {/* FEATURE SORTING RECIPES */}
              <div>
                {/* {sortOn === true ? ( */}
                <div className="dropdown">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      if (e.target.value === "") {
                        fetchSortByName(e.target.value);
                      } else if (e.target.value === "descending") {
                        fetchSortByName(e.target.value);
                      } else {
                        fetchSortByDate(sortByDate);
                      }
                    }}
                  >
                    <option selected disabled>
                      Sorting By...
                    </option>
                    <option value="">A - Z</option>
                    <option value="descending">Z - A</option>
                    <option value="descending_desc">Latest Recipe</option>
                  </select>
                </div>
                {/* ) : null} */}
              </div>
            </div>
          </div>

          {/* LOADING */}
          {isLoading ? <Loading /> : null}
          {/* LOADING */}
          {isLoadingPagination ? <Loading /> : null}
          {/* IF RECIPES UNDEFINED */}
          {recipeNotFound && !isLoading ? (
            <h2 className="d-flex justify-content-center mb-5">
              Recipe not found
            </h2>
          ) : null}

          {/* RECIPES LIST */}
          {!recipeNotFound && !isLoading ? (
            <>
              {!isLoadingPagination && (
                <div className="row allRecipes">
                  {!isLoading &&
                    recipePopular.map((item, key) => {
                      return (
                        <div className="col-sm-3 col-6" key={key}>
                          <AllRecipe
                            image={item?.picture}
                            name={item?.title}
                            url={item?.title}
                            slug={item?.slug}
                          />
                        </div>
                      );
                    })}
                </div>
              )}
            </>
          ) : null}
        </section>
        {/* END OF ALL RECIPE SECTION */}

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
      </div>
    </div>
  );
}

export default Home;
