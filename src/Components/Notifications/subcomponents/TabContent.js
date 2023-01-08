import { List, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../../SearchBar/SearchBar";

const TabContent = ({
  searchPlaceholder,
  dataRangeLabel,
  notifications,
  archiveCb,
  fetchCb,
}) => {
  return (
    <div>
      <Typography as="div" variant="caption" align="center" color="GrayText">
        {dataRangeLabel}
      </Typography>
      <SearchBar searchPlaceholder={searchPlaceholder} />
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
};

const emptyListStyles = {
  textAlign: "center",
  marginTop: "15px",
  color: "gray",
};

export default TabContent;
