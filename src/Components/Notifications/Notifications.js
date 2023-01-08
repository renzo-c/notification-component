import React from "react";
import { Box, Tooltip, Badge, IconButton, Menu } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TabsGroup from "./subcomponents/TabsGroup";

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
      searchPlaceholder: "Search new notifications",
      dataRangeLabel: "From last 30 days",
      tabPanel: {
        list: [],
      },
      fetchCb: () => alert("fechtCb"),
    },
    {
      tabName: "Archived",
      searchPlaceholder: "Search archived notifications",
      dataRangeLabel: "From last 30 days",
      tabPanel: {
        list: [],
      },
      archiveCb: () => alert("archiveCb"),
    },
  ];

  return (
    <Box sx={notificationsStyles}>
      <Tooltip title="Notifications" placement="bottom-start">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon sx={{ color: "white" }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
        MenuListProps={{ style: { padding: "0px" } }}
      >
        <TabsGroup data={data} />
      </Menu>
    </Box>
  );
};

const notificationsStyles = {
  padding: ".3em",
  mx: "5px",
};

export default Notifications;
