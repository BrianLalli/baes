import React, { useState } from "react";
import Style from "../Navbar/Navbar.module.scss";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Logout from "../Logout/index";
import Auth from "../../utils/auth";
import Login from "../Login";
{
  Auth.loggedIn() ? <Logout /> : <p>not logged in</p>;
}
const handleLogout = () => {
  Auth.logout();
  window.location.assign("/")
};
const links = [
  {
    name: "Baes",
    type: "Logo",
    // src: "../Logo/LogoElephant3.png",
    to: "/",
    active: "home",
  },
  // {
  //   name: "Get Started",
  //   to: "/",
  //   active: "getStarted",
  // },
  // {
  //   name: "Login",
  //   to: "/login",
  //   active: "login",
  // },
  {
    name: "Admin",
    to: "/admin",
    active: "admin",
  },
  {
    name: "Connections",
    to: "/connections",
    active: "connections",
  },
  {
    name: "Profile",
    to: "/profile",
    active: "profile",
  },
  // {
  //   name: "Logout",
  //   to: "/logout",
  //   active: "logout",
  // },
];
export default function Navbar({ handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );
  return (
    <Box component={"nav"} width={"100%"}>
      {/* <Box
       component={"img"}
       display={"flex"}
       justifyContent={"center"}
       className={link.active === active && !link.type && Style.active}
       >
        <Link
              to={link.to}
              onClick={() => {
                setActive(link.active);
              }}
              {!link.type && (
                <a style={{ paddingBottom: "0.5rem" }}>{link.image}</a>
              )}
              {link.type && <h1>{link.name}</h1>}
        </Link>
      </Box> */}
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            className={link.active === active && !link.type && Style.active}
            //  sx={{borderImageSource: info.gradient}}
          >
            <Link
              to={link.to}
              onClick={() => {
                setActive(link.active);
              }}
            >
              {!link.type && (
                <p style={{ paddingBottom: "0.5rem" }}>{link.name}</p>
              )}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        {!Auth.loggedIn() ? (
          <Box
            // key={index}
            component={"li"}
            // className={link.active === active && !link.type && Style.active}
            //  sx={{borderImageSource: info.gradient}}
          >
            <Link
              to={"/login"}
              // onClick={() => {
              //   setActive(Login);
              // }}
            >
              <h1>Login</h1>
            </Link>
          </Box>
        ):(
          <div>
            <button className="custom-save-btn btn-margin" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </Box>
    </Box>
  );
}