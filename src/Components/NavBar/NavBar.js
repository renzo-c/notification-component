import React from "react";
import { Box } from "@mui/material";
import logoDark from "../../assets/images/logo-dark.png";
import Link from "../Link";
import Notifications from "../Notifications/Notifications";
import { boxStyles, menuStyles, linkStyles, noLinkStyles } from "./styles";

const NavBar = () => {
  return (
    <Box sx={boxStyles}>
      <Logo />
      <Menu>
        <Link label="Home" />
        <Link label="Services" />
        {/* <Link label="About Us" /> */}
        <Notifications />
      </Menu>
    </Box>
  );
};

const Logo = () => {
  return (
    <div style={{ height: "40px" }}>
      <img src={logoDark} height="100%" width="100%" />
    </div>
  );
};

const Menu = ({ children }) => {
  const links = [];
  const noLinks = [];

  React.Children.forEach(children, (child, index) => {
    if (child.type.name === "Link") {
      links.push(React.cloneElement(child, { ...child.props, key: index }));
    }
    if (child.type.name !== "Link") {
      noLinks.push(React.cloneElement(child, { ...child.props, key: index }));
    }
  });
  return (
    <Box sx={menuStyles}>
      <Box sx={linkStyles}>{links}</Box>
      <Box sx={noLinkStyles}>{noLinks}</Box>
    </Box>
  );
};

export default NavBar;
