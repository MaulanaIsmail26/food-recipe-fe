import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home-page/home_page";
import Login from "./pages/account/login";
import CodeReset from "./pages/account/code_reset_password";
import ForgotPassword from "./pages/account/forgot_password";
import ResetPassword from "./pages/account/reset_password";
import Register from "./pages/account/register";
import AddRecipe from "./pages/add-recipe/add_recipe";
import DetailRecipe from "./pages/detail-recipe/detail_recipe";
import ProfileLiked from "./pages/profile/profile_liked_recipe";
import ProfileMyrecipe from "./pages/profile/profile_my_recipe";
import ProfileSaved from "./pages/profile/profile_saved_recipe";
import Maintenance from "./pages/Maintenance/maintenance";

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
      path: "detail-recipe",
      element: <DetailRecipe />,
    },
    {
      path: "profile-liked",
      element: <ProfileLiked />,
    },
    {
      path: "profile-my-recipe",
      element: <ProfileMyrecipe />,
    },
    {
      path: "profile-saved",
      element: <ProfileSaved />,
    },
  ]);

  if (process.env.REACT_APP_IS_MAINTENANCE === "true") {
    return <Maintenance />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;
