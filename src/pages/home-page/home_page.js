import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/landing_page.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import RecipeCard from "../../components/molecules/RecipeCard";

const recipe = [
  {
    name: "Chiken Kare",
    image: "../../asset/food-img6.jpg",
  },
  {
    name: "Bomb Chicken",
    image: "../../asset/food-img7.jpg",
  },
  {
    name: "Banana Smothie Pop",
    image: "../../asset/food-img8.jpg",
  },
  {
    name: "Coffe Lava Cake",
    image: "../../asset/food-img9.jpg",
  },
  {
    name: "Sugar Salmon",
    image: "../../asset/food-img10.jpg",
  },
  {
    name: "Indian Salad",
    image: "../../asset/food-img5.jpg",
  },
];

function Home() {
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
          <div className="row align-items-md-center justify-content-center">
            <div className="col-3 me-1">
              <Link to="/detail-recipe" className="nav-link">
                <div
                  className="card rounded-3 shadow"
                  style={{ width: "18vw" }}
                >
                  <img
                    src="../asset/food-img3.png"
                    className="card-img-top"
                    alt="placeholder"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Pizza Lamoa</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-3 me-1">
              <Link to="detail-recipe" className="nav-link">
                <div
                  className="card rounded-3 shadow"
                  style={{ width: "18vw" }}
                >
                  <img
                    src="../asset/food-img4.jpg"
                    className="card-img-top"
                    alt="placeholder"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Beef Burger</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-3">
              <Link to="detail-recipe" className="nav-link">
                <div
                  className="card rounded-3 shadow"
                  style={{ width: "18vw" }}
                >
                  <img
                    src="../asset/food-img9.jpg"
                    className="card-img-top"
                    alt="placeholder"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Cake Italia</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-2 slogan">
              <h2 className="pb-2 border-bottom border-5 border-dark">
                popular recipes just for you, read and learn more
              </h2>
            </div>
          </div>
        </section>
        {/* <!-- END OF POPULAR FOR YOU --> */}

        {/* <!-- NEW RECIPE --> */}
        <section id="new-recipe" className="container">
          <h3 className="p-3 border-start border-dark border-5 mb-4">
            New Recipe
          </h3>
          <div className="row align-items-md-center">
            <div className="col-6">
              <img
                src="../asset/food-img4.jpg"
                alt="placeholder"
                className="rounded-4 shadow"
              />
            </div>
            <div className="col-5">
              <h2 className="title-recipe">
                Healthy Bone Broth Ramen (Quick & Easy)
              </h2>
              <img
                src="../asset/Line.jpg"
                alt="placeholder"
                className="mt-3 mb-4 line"
                style={{ width: "60px" }}
              />
              <p className="mb-4 slogan">
                Quick + Easy Chicken Bone Broth Ramen Healthy chicken ramen in a
                hurry? That’s right!
              </p>
              <Link to="/detail-recipe" className="text-decoration-none">
                <button
                  type="button"
                  className="btn btn-dark d-grid gap-2 col-md-3 btn-learn"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- END OF NEW RECIPE --> */}

        {/* <!-- POPULAR RECIPE --> */}
        <section id="popular-recipe" className="container">
          <h3 className="p-3 border-start border-dark border-5 mb-4">
            Popular Recipe
          </h3>
          <div className="row">
            {recipe.map((item) => {
              return (
                <div className="col-4">
                  <RecipeCard
                    image={item?.image}
                    name={item?.name}
                    url={item?.name?.toLocaleLowerCase().split(" ").join("-")}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* <!-- END OF POPULAR RECIPE --> */}

        {/* <!-- FOOTER --> */}
        <Footer />
        {/* <!-- END OF FOOTER --> */}
      </div>
    </div>
  );
}

export default Home;
