import React from "react";
import { Box, Tooltip, Badge, IconButton, Menu } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TabsGroup from "./subcomponents/TabsGroup";
import notifications from "./fakeData";
import {
  menuStyles,
  iconButtonStyles,
  iconStyles,
  notificationsStyles,
} from "./styles";

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifications, setNotifications] = React.useState(["1"]);

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const data = [
    {
      tabName: "News",
      tabContent: {
        searchPlaceholder: "Search new notifications...",
        dataRangeLabel: "From last 30 days",
        notifications: notifications,
        fetchCb: () => alert("fechtCb"),
        archiveCb: () => alert("archiveCb"),
      },
    },
    {
      tabName: "Archived",
      tabContent: {
        searchPlaceholder: "Search archived notifications...",
        dataRangeLabel: "From last 30 days",
        notifications: notifications,
        fetchCb: () => alert("fechtCb"),
      },
    },
  ];

  return (
    <Box sx={notificationsStyles}>
      <Tooltip title="Notifications" placement="bottom-start">
        <IconButton onClick={handleOpenUserMenu} sx={iconButtonStyles}>
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon sx={iconStyles} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        sx={menuStyles}
        anchorEl={anchorEl}
        anchorOrigin={originReference}
        keepMounted
        transformOrigin={originReference}
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
        MenuListProps={{
          style: {
            padding: "0px",
            border: "1px solid black",
            borderRadius: "5px",
            width: "300px",
          },
        }}
      >
        <TabsGroup data={data} />
      </Menu>
    </Box>
  );
};

const originReference = {
  vertical: "top",
  horizontal: "right",
};

export default Notifications;
