import { List, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import Item from "./Item";

const TabContent = ({
  searchPlaceholder,
  dataRangeLabel,
  notifications,
  searchCb,
  archiveCb,
  fetchCb,
}) => {
  return (
    <div>
      <Typography as="div" variant="caption" align="center" color="GrayText">
        {dataRangeLabel}
      </Typography>
      <SearchBar searchPlaceholder={searchPlaceholder} cb={searchCb} />
      <List sx={listStyles}>
        {notifications.length ? (
          notifications.map((notification) => (
            <Item key={notification.id} notification={notification} />
          ))
        ) : (
          <div style={emptyListStyles}>No results >=(</div>
        )}
      </List>
    </div>
  );
};

const listStyles = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
  paddingTop: "0px",
  maxHeight: "500px",
  scrollbarWidth: 0,
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  overflow: "auto",
};

const emptyListStyles = {
  textAlign: "center",
  marginTop: "15px",
  color: "gray",
};

export default TabContent;
