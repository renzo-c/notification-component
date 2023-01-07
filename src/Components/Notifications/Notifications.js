import React from "react";
import { Box, Tooltip, Badge, IconButton, Menu } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TabPanel from "./subcomponents/TabPanel";

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifications, setNotifications] = React.useState(["1"]);

  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    console.log("close");
    setAnchorEl(null);
  };

  return (
    <Box sx={notificationsStyles}>
      <Tooltip title="Notifications">
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
        <TabPanel />
      </Menu>
    </Box>
  );
};

const notificationsStyles = {
  padding: ".3em",
  mx: "5px",
};

export default Notifications;
