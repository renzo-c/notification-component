import React from "react";
import { Button } from "@mui/material";
import "./link.css";

const Link = ({ children, label = "Link" }) => {
  if (children) {
    return children;
  }
  return (
    <Button className="input-border inputLabel" variant="outlined">
      {label}
    </Button>
  );
};

export default Link;
