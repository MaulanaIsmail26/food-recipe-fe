/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
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
import LoginIcon from "@mui/icons-material/Login";

export default function Navbar() {
  const navigate = useNavigate();
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [isLogin, setIsLogin] = React.useState(localStorage.getItem("isLogin"));
  const [profile, setProfile] = React.useState(checkProfile);

  // LOGOUT
  // const logOut = () => {
  //   // localStorage.clear();
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("profile");
  //   localStorage.removeItem("isLogin");

  //   navigate("/");
  // }

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
    <div>
      <AppBar
        position="fixed"
        id="navbar"
        sx={{
          pl: { xs: 0, md: 5 },
          pr: { xs: 0, md: 5 },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* ICON IN DESKTOP */}
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img
                src="../../asset/logo.png"
                alt="iconApp"
                className="iconApp"
              />
            </Box>

            {/* NAME APP IN DESKTOP */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              className="nameApp"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "#F7EFE2",
                textDecoration: "none",
              }}
            >
              FoodRec
            </Typography>

            {/* MOBILE VIEW */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#1E1F26" }}
                >
                  <MenuItem>
                    <Typography textAlign="center" className="navOption">
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  to="/add-recipe"
                  style={{ textDecoration: "none", color: "#1E1F26" }}
                >
                  <MenuItem>
                    <Typography textAlign="center" className="navOption">
                      Add Recipe
                    </Typography>
                  </MenuItem>
                </Link>
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "#1E1F26" }}
                >
                  <MenuItem>
                    <Typography textAlign="center" className="navOption">
                      Profile
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>

            {/* ICON IN MOBILE */}
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img
                src="../../asset/logo.png"
                alt="iconApp"
                className="iconApp"
              />
            </Box>

            {/* NAME APP IN MOBILE */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              className="nameApp"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#F7EFE2",
                textDecoration: "none",
              }}
            >
              FoodRec
            </Typography>

            {/* DESKTOP NAVBAR OPTION */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/" style={{ textDecoration: "none", padding: "0" }}>
                <Button
                  sx={{
                    my: 1,
                    mr: 5,
                    ml: 3,
                    color: "#F7EFE2",
                    display: "block",
                  }}
                  className="btnHome"
                >
                  Home
                </Button>
              </Link>
              <Link
                to="/add-recipe"
                style={{ textDecoration: "none", padding: "0" }}
              >
                <Button
                  sx={{
                    my: 1,
                    mr: 5,
                    ml: 3,
                    color: "#F7EFE2",
                    display: "block",
                  }}
                  className="btnAddRecipe"
                >
                  Add Recipe
                </Button>
              </Link>
              <Link
                to="/profile"
                style={{ textDecoration: "none", padding: "0" }}
              >
                <Button
                  sx={{
                    my: 1,
                    mr: 5,
                    ml: 3,
                    color: "#F7EFE2",
                    display: "block",
                  }}
                  className="btnProfile"
                >
                  Profile
                </Button>
              </Link>
            </Box>

            {/* NAVBAR PROFILE OPTION */}
            <Box sx={{ flexGrow: 0 }}>
              {isLogin ? (
                <>
                  <Tooltip title="Profile Setting">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={profile?.photo} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    className="menuProfile"
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "#1E1F26" }}
                    >
                      <MenuItem>
                        <Typography textAlign="center">Profile</Typography>
                      </MenuItem>
                    </Link>
                    {/* <MenuItem
                      onClick={() => {
                        logOut();
                      }}
                    >
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem> */}
                  </Menu>
                </>
              ) : (
                <>
                  <div className="d-flex btnAuth">
                    <Link to="/login">
                      <button
                        type="button"
                        className="btn btnLogin btn-outline-light me-2"
                      >
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button
                        type="button"
                        className="btn btnRegister btn-light"
                      >
                        Sign Up
                      </button>
                    </Link>
                    <Link to="/login">
                      <button
                        type="button"
                        className="btn btnLoginMobile btn-outline-light me-2"
                      >
                        <LoginIcon className="iconLogin" />
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
