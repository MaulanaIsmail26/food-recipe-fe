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

// const recipe = [
//   {
//     name: "Chiken Kare",
//     image: "../../asset/food-img6.jpg",
//   },
//   {
//     name: "Bomb Chicken",
//     image: "../../asset/food-img7.jpg",
//   },
//   {
//     name: "Banana Smothie Pop",
//     image: "../../asset/food-img8.jpg",
//   },
//   {
//     name: "Coffe Lava Cake",
//     image: "../../asset/food-img9.jpg",
//   },
//   {
//     name: "Sugar Salmon",
//     image: "../../asset/food-img10.jpg",
//   },
//   {
//     name: "Indian Salad",
//     image: "../../asset/food-img5.jpg",
//   },
// ];

function Home() {
  let [recipe, setRecipe] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}recipes/sort/title` // ?page=1&limit=3
      )
      .then(({ data }) => {
        console.log(data?.data);
        setRecipe(data?.data);
      })
      .catch(() => setRecipe([]))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

          {isLoading ? <Loading /> : null}

          {recipe.length === 0 && !isLoading ? (
            <h2 className="d-flex justify-content-center">Recipe not found</h2>
          ) : null}

          <div className="row align-items-md-center justify-content-center">
            {recipe.slice(0, 3).map((item) => {
              return (
                <div className="col-3 me-1 mt-4">
                  <RecipeCardV2
                    image={item?.picture}
                    name={item?.title}
                    url={item?.slug}
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
            {recipe.slice(0, 1).map((item) => {
              return (
                <div>
                  <NewResipe
                    image={item?.picture}
                    name={item?.title}
                    url={item?.slug}
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

          {recipe.length === 0 && !isLoading ? (
            <h2 className="d-flex justify-content-center">Recipe not found</h2>
          ) : null}

          <div className="row">
            {recipe.map((item) => {
              return (
                <div className="col-4">
                  <RecipeCardV1
                    image={item?.picture}
                    name={item?.title}
                    url={item?.slug}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* <!-- END OF POPULAR RECIPE --> */}

        {/* PAGINATION */}
        {/* <div className="container pagination justify-content-center">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
        {/* END OF PAGINATION */}

        {/* <!-- FOOTER --> */}
        <Footer />
        {/* <!-- END OF FOOTER --> */}
      </div>
    </div>
  );
}

export default Home;
