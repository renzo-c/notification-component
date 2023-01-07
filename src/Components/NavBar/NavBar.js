import React from "react";
import { Box } from "@mui/material";
import logoDark from "../../assets/images/logo-dark.png";
import Link from "../Link";
import Notifications from "../Notifications/Notifications";

const NavBar = () => {
  return (
    <Box sx={boxStyles}>
      <Logo />
      <Menu>
        <Link label="Link 1" />
        <Link>
          <Notifications />
        </Link>
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
  const links = React.Children.map(children, (child, index) => {
    if (child.type.name === "Link") {
      return React.cloneElement(child, { ...child.props, key: index });
    }
  });
  return <Box sx={menuStyles}>{links}</Box>;
};

const boxStyles = {
  backgroundColor: "black",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: ".3em",
  px: ".9em",
};

const menuStyles = {
  display: "flex",
  justifyContent: "space-around",
};

export default NavBar;
