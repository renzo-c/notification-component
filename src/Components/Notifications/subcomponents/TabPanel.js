import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
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
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    alert("change");
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
          <Tab
            sx={{ width: "50%" }}
            label={
              <Typography
                sx={{
                  display: "inline",
                  textTransform: "none",
                  color: "#4a4a4a",
                }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <b>News</b>
              </Typography>
            }
            {...a11yProps(0)}
            style={{ fontSize: "12px", padding: "6px 8px" }}
          />
          <Tab
            sx={{ width: "50%" }}
            label={
              <Typography
                sx={{
                  display: "inline",
                  textTransform: "none",
                  color: "#4a4a4a",
                }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <b>Archived</b>
              </Typography>
            }
            {...a11yProps(1)}
            style={{ fontSize: "12px", padding: "6px 8px" }}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        tabPanel1
      </TabPanel>
      <TabPanel value={value} index={1}>
        TabPanel2
      </TabPanel>
    </Box>
  );
};

export default BasicTabs;
