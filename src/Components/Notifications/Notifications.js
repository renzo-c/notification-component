import React from "react";
import { Box, Tooltip, Badge, IconButton, Menu } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TabsGroup from "./subcomponents/TabsGroup";
// import notifications from "./fakeData";
import {
  useNotification,
  onFilterNotifications,
} from "../../hooks/useNotification";
import {
  menuStyles,
  iconButtonStyles,
  iconStyles,
  notificationsStyles,
} from "./styles";

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, dispatch] = useNotification();
  const { notifications, originalList } = state;
// console.log(notifications)
  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const onSearch = (term) => {
    console.log({term})
    onFilterNotifications(dispatch, originalList, term);
  };

  const data = [
    {
      tabName: "News",
      tabContent: {
        searchPlaceholder: "Search new notifications...",
        dataRangeLabel: "From last 30 days",
        // TO_DO: optimize to pass only news or archived
        notifications,
        fetchCb: () => alert("fechtCb"),
        archiveCb: () => alert("archiveCb"),
        searchCb: (term) => onSearch(term),
      },
    },
    {
      tabName: "Archived",
      tabContent: {
        searchPlaceholder: "Search archived notifications...",
        dataRangeLabel: "From last 30 days",
        notifications,
        fetchCb: () => alert("fechtCb"),
        searchCb: (term) => onSearch(term),
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
        PaperProps={{
          style: {
            overflow: "hidden"
          }
        }}
        MenuListProps={{
          style: {
            padding: "0px",
            border: "1px solid black",
            borderRadius: "5px",
            width: "360px",
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
