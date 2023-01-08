import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { a11yProps } from "./helperFunctions";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const TabLabel = ({ label }) => {
  return (
    <Typography
      sx={tabNameStyle}
      component="span"
      variant="body2"
      color="text.primary"
    >
      <b>{label}</b>
    </Typography>
  );
};

const TabsGroup = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tab container"
          sx={{ width: "100%" }}
          TabIndicatorProps={{ style: { backgroundColor: "#333" } }}
        >
          {data.map((tab, key) => (
            <Tab
              key={key}
              sx={tabStyle}
              label={<TabLabel label={tab.tabName} />}
              {...a11yProps(key)}
            />
          ))}
        </Tabs>
      </Box>
      {data.map((tab, key) => (
        <TabPanel key={key} value={value} index={key}>
          {tab.tabName}
        </TabPanel>
      ))}
    </Box>
  );
};

const tabStyle = {
  width: "50%",
  fontSize: "12px",
  padding: "6px 8px",
};

const tabNameStyle = {
  display: "inline",
  textTransform: "none",
  color: "#4a4a4a",
};

export default TabsGroup;
