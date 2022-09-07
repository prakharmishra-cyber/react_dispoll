import { Navigate } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DishCard from './DishCard';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Dashboard({
  isloggedin,
  setIsloggedin,
  user,
  setUser,
}) {
  const [value, setValue] = React.useState(0);
  const [dishes, setDishes] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
      )
      .then((res) => {
        console.log(res.data);
        setDishes(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!isloggedin) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Dishes" {...a11yProps(0)} />
          <Tab label="Poll Results" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{display:'flex', flexWrap:'wrap'}}>
          {dishes &&
            dishes.map((dish) => {
              return <DishCard key={dish.id} dish={dish}/>;
            })}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Poll Results
      </TabPanel>
    </Box>
  );
}
