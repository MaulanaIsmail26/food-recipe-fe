import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home-page/home_page";
import Login from "./pages/account/login";
import CodeReset from "./pages/account/code_reset_password";
import ForgotPassword from "./pages/account/forgot_password";
import ResetPassword from "./pages/account/reset_password";
import Register from "./pages/account/register";
import AddRecipe from "./pages/add-recipe/add_recipe";
import DetailRecipe from "./pages/detail-recipe/detail_recipe";
import Profile from "./pages/profile/profile";
import Maintenance from "./pages/Maintenance/maintenance";
import Logout from "./pages/account/logout";
import React from "react";

// import redux
import store from "./store/index";
import { Provider } from "react-redux";

// functional component
function App() {
  const maintenance = ["/login"];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "code-reset-password",
      element: <CodeReset />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "add-recipe",
      element: <AddRecipe />,
    },
    {
      path: "detail-recipe/:id",
      element: <DetailRecipe />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "logout",
      element: <Logout />,
    },
  ]);

  if (process.env.REACT_APP_IS_MAINTENANCE === "true") {
    return <Maintenance />;
  } else {
    return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  }
}

export default App;
