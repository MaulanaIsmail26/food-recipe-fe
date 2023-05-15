import React from "react";
import { Link } from "react-router-dom";
import "../../styles/profile/profile.css";
import Footer from "../../components/organisms/footer";
import { useNavigate } from "react-router-dom";
import RecipeCardV2 from "../../components/molecules/RecipeCardV2";
import Loading from "../../components/molecules/loading";
import axios from "axios";

function ProfileMyrecipe() {
  const navigate = useNavigate();
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [profile, setProfile] = React.useState(checkProfile);
  const [isLoading, setIsLoading] = React.useState(true);
  const [recipe, setRecipe] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);

  // check if already login
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/login");
    }
  });

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

  return (
    <div id="profile-page">
      <div className="container-fluid p-0">
        {/* <!-- NAVBAR --> */}
        <nav
          id="navbar"
          className="container navbar navbar-expand-lg p-0 mt-4 mb-4 fw-bold"
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
                  className="nav-link fw-normal active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link
                  to="/add-recipe"
                  className="nav-link fw-normal active"
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

        {/* <!-- PHOTO PROFILE & NAME --> */}
        <section id="profile" className="container mt-1">
          <div className="row text-center photo">
            <div className="col-12">
              <img
                src={profile?.photo}
                alt="placeholder"
                className="photo"
              />
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col-12">
              <h6>{profile?.name}</h6>
              <Link to="/logout">
                <button type="button" class="btn btn-secondary btn-sm">
                  Log Out
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- END OF PHOTO PROFILE & NAME --> */}

        {/* <!-- RECIPE --> */}
        <section id="recipe" className="container mt-3">
          <h3
            className="pb-3 border-bottom border-dark border-5 mb-4"
            style={{ width: "275px", fontSize: "35px" }}
          >
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
          </div>

          {/* <div className="row">
            <div className="col-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src="../asset/food-img12.jpg"
                  className="card-img-top"
                  alt="placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Bomb Chicken</h5>
                  <Link to="/detail-recipe" className="btn btn-primary">
                    read recipe
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src="../asset/food-img-13.jpg"
                  className="card-img-top"
                  alt="placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Bananas Pancake</h5>
                  <Link to="/detail-recipe" className="btn btn-primary">
                    read recipe
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </section>
        {/* <!-- END OF RECIPE --> */}

        {/* <!-- FOOTER --> */}
        <Footer />
        {/* <!-- END OF FOOTER --> */}
      </div>
    </div>
  );
}

export default ProfileMyrecipe;
