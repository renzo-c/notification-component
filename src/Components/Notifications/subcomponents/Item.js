import React from "react";
import {
  Box,
  Typography,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import { textClamp } from "../../../utils/helperFunctions";
import ArchiveIcon from "@mui/icons-material/Archive";
import {
  useNotification,
  onChangeStatus,
} from "../../../hooks/useNotification";
import { status } from "../../../utils/constants";

const Item = ({ notification }) => {
  const isArchived = notification.status === "archived";
  const [state, dispatch] = useNotification();
  const { notifications, originalList } = state;

  const handlePageRedirection = () => {
    onChangeStatus(
      dispatch,
      notification.id,
      notifications,
      originalList,
      status.READ
    );
    window.open("www.google.com", "_blank").focus();
  };

  const handleArchive = (e) => {
    e.stopPropagation();
    onChangeStatus(
      dispatch,
      notification.id,
      notifications,
      originalList,
      status.ARCHIVED
    );
  };

  const getTextStyle = () => {
    return {
      color: notification.status === "new" ? "#333" : "rgba(0,0,0,0.15)",
    };
  };

  const time = new Date(notification.updatedOn || notification.createdOn)
    .toString()
    .substring(0, 21);
  return (
    <>
      <ListItemButton alignItems="flex-start" onClick={handlePageRedirection}>
        <ListItemText
          primary={
            <>
              <Typography style={getTextStyle()}>
                <b>{textClamp(notification.title, 29)}</b>
              </Typography>
              <Typography variant="caption" color="GrayText">
                {time}
              </Typography>
            </>
          }
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
              style={getTextStyle()}
            >
              {textClamp(notification.content, 55)}
            </Typography>
          }
        />
        {!isArchived ? (
          <ListItemAvatar>
            <Tooltip title="Archive">
              <IconButton aria-label="archive" onClick={handleArchive}>
                <ArchiveIcon />
              </IconButton>
            </Tooltip>
          </ListItemAvatar>
        ) : null}
      </ListItemButton>
      <Divider
        variant="inset"
        component="li"
        sx={{ margin: "auto", width: "95%" }}
      />
    </>
  );
};

export default Item;
