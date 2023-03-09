import React from "react";
import { Link } from "react-router-dom";
import "../../styles/detail-recipe/detailrecipe.css";
import Footer2 from "../../components/organisms/footer2";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DetailRecipe() {
  const navigate = useNavigate()
  const { recipe } = useSelector((state) => state); //jika redux nya lebih dari satu, state.(nama redux)

  React.useEffect(() => {
    if (!recipe?.data) {
    navigate("/")
  }
})

  return (
    <div id="detail-recipe">
      <div className="container-fluid p-0">
        {/* <!-- NAVBAR --> */}
        <nav
          id="navbar"
          className="container navbar navbar-expand-lg p-0 mt-4 mb-4"
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
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link
                  to="/add-recipe"
                  className="nav-link active"
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

        {/* <!-- TITLE AND IMAGE --> */}
        <section id="title-image" className="container mb-5">
          <div className="row text-center">
            <div className="col-12">
              <div className="title mb-5">
                <h1>{recipe?.data?.title}</h1>
              </div>
              <div className="image-recipe">
                <img src={recipe?.data?.picture} alt="placeholder" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF TITLE AND IMAGE --> */}

        {/* <!-- INGREDIENTS --> */}
        <section id="ingredient" className="container mb-4">
          <div className="row">
            <div className="col-8 offset-sm-2 offset-1">
              <div className="sub-title mb-3">
                <h3>Ingredients</h3>
              </div>
              <div className="detail">
                <p
                  dangerouslySetInnerHTML={{
                    __html: recipe?.data?.ingredients,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF INGREDIENTS --> */}

        {/* <!-- VIDEO STEP --> */}
        <section id="video" className="container">
          <div className="row">
            <div className="col-3 offset-sm-2 offset-1">
              <div className="sub-judul mb-4">
                <h3>Video Step</h3>
              </div>
              <div className="button">
                <a
                  href={recipe?.data?.video}
                  className="text-decoration-none text-light"
                >
                  <button
                    type="button"
                    className="btn btn-warning mb-3 text-light"
                  >
                    step 1
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF VIDEO STEP --> */}

        {/* <!-- COMMENT --> */}
        <section id="comment" className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="form-comment">
                <div className="mb-3">
                  <textarea
                    className="form-control border-2 form-comment"
                    rows="3"
                    placeholder="Comment :"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="row button-comment text-center mb-4">
            <div className="col-12">
              <a href="#" className="text-decoration-none text-light">
                <button type="button" className="btn btn-warning text-light">
                  send
                </button>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2">
              <div className="sub-title mb-3">
                <h3>Comment</h3>
              </div>
              <div className="comment-user">
                <ul>
                  <li className="photo-profil me-2">
                    <img src="../asset/photo-profil.png" alt="" />
                  </li>
                  <li>
                    <h6>Ayudia</h6>
                  </li>
                </ul>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  suscipit laboriosam dolorum dolor similique saepe, cupiditate
                  totam odit, quos placeat iusto ab sit, excepturi ipsum
                  adipisci nobis nulla cum fugiat.
                </p>
                <ul>
                  <li className="photo-profil me-2">
                    <img src="../asset/photo-profil.png" alt="" />
                  </li>
                  <li>
                    <h6>Dwi Hidayanti</h6>
                  </li>
                </ul>
                <p className="mb-4">
                  fugit tempora non in nesciunt laboriosam necessitatibus!
                  Corporis rerum veniam ipsa temporibus provident perferendis
                  voluptatibus cupiditate eum fugit, atque iure unde rem error.
                </p>
                <ul>
                  <li className="photo-profil me-2">
                    <img src="../asset/photo-profil.png" alt="" />
                  </li>
                  <li>
                    <h6>Ukhti Nurahmah</h6>
                  </li>
                </ul>
                <p>
                  Lnesciunt quasi ipsa magnam. Mollitia tempore eveniet, amet
                  perspiciatis reiciendis molestias pariatur consequatur
                  similique porro optio ducimus incidunt quod aliquid deserunt
                  velit vel quidem. Quia, laboriosam! Exercitationem excepturi
                  optio earum deserunt.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF COMMENT --> */}

        {/* <!-- FOOTER --> */}
        <Footer2 />
        {/* <!-- END OF FOOTER --> */}
      </div>
    </div>
  );
}

export default DetailRecipe;
