import React from "react";
import { Link } from "react-router-dom";
import "../../styles/profile/profile.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/molecules/loading";
import axios from "axios";

// IMPORT BY MATERIAL UI
import LogoutIcon from "@mui/icons-material/Logout";

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
      <div className="container-fluid mainContainer p-0">
        {/* NAVBAR */}
        <Navbar />
        {/* END OF NAVBAR */}

        <section className="container content">
          {/* PROFILE SECTION */}
          <div className="row profileSection">
            <div className="col-12">
              {/* PROFILE PICTURE */}
              <div className="profilePicture">
                <img
                  src={profile?.photo}
                  class="mx-auto d-block"
                  alt="profile_picture"
                ></img>
              </div>
              {/* USERNAME */}
              <div className="username d-flex justify-content-center">
                <h4>{profile?.name}</h4>
              </div>
              {/* BUTTON LOGOUT */}
              <div className="btnLogout d-flex justify-content-center">
                <button
                  type="button"
                  class="btn"
                  onClick={() => {
                    // localStorage.clear();
                    localStorage.removeItem("token");
                    localStorage.removeItem("profile");
                    localStorage.removeItem("isLogin");

                    navigate(`/`);
                  }}
                >
                  <LogoutIcon className="iconLogout" /> Logout
                </button>
              </div>
            </div>
          </div>
          {/* END OF PROFILE SECTION */}

          {/* POPULAR FOR YOU */}
          <div className="row forYou">
            <div className="col-12">
              {/* TITLE SECTION */}
              <div className="row title">
                <div className="col-12 ps-sm-4">
                  <div>
                    <h1>Popular For You!</h1>
                  </div>
                </div>
              </div>

              {/* RECIPES SECTION */}
              <div className="row recipes">
                <div className="col-12 d-flex justify-content-evenly">
                  <div className="cardRecipe position-relative">
                    <img
                      src="../../asset/food-img4.jpg"
                      alt="iconApp"
                      className="imgRecipe"
                    />
                    <p className="position-absolute">
                      Maulana Ismail Maulana Ismail
                    </p>
                  </div>
                  <div className="cardRecipe position-relative">
                    <img
                      src="../../asset/food-img-13.jpg"
                      alt="iconApp"
                      className="imgRecipe"
                    />
                    <p className="position-absolute">
                      Maulana Ismail Maulana Ismail
                    </p>
                  </div>
                  <div className="cardRecipe position-relative">
                    <img
                      src="../../asset/food-img6.jpg"
                      alt="iconApp"
                      className="imgRecipe"
                    />
                    <p className="position-absolute">
                      Maulana Ismail Maulana Ismail
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END OF POPULAR FOR YOU */}
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
      </div>
    </div>
  );
}

export default ProfileMyrecipe;
