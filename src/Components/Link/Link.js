import React from "react";
import { Box, Link as MuiLink } from "@mui/material";
import { containerStyles, linkStyles } from "./styles";

const Link = ({ label = "Link" }) => {
  return (
    <Box sx={containerStyles}>
      <MuiLink href="#" underline="always" sx={linkStyles}>
        {label}
      </MuiLink>
    </Box>
  );
};

export default Link;
