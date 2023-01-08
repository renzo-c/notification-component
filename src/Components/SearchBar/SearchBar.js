import React from "react";
import { Paper, OutlinedInput } from "@mui/material";

const SearchBar = ({ cb, searchPlaceholder }) => {
  const onSearch = (e) => {
    e.preventDefault();
    const term = e.target.value;
    cb && cb();
  };
  return (
    <Paper elevation={0} sx={paperStyles}>
      <OutlinedInput
        autoFocus
        fullWidth
        sx={inputStyles}
        placeholder={searchPlaceholder}
        inputProps={inputProps}
        onChange={onSearch}
      />
    </Paper>
  );
};

const inputProps = {
  style: {
    margin: "0px",
    padding: "8px 8px",
  },
};

const paperStyles = {
  m: "2px 0px",
  p: "2px 0px 0px",
  display: "flex",
  alignItems: "center",
};

const inputStyles = { mx: 0, flex: 1 };

export default SearchBar;
