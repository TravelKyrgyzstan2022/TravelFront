import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Typography } from "@mui/material";
import Icon_Delete from "./../../img/icon_delete.svg";
import tab from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

export default function BasicTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const [value1, setValue1] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const blogs = useSelector((state) => state.blog.data);
  console.log(blogs);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Блоги" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {blogs.map((item) => (
          <Card className={tab.card}>
            <CardActionArea>
              <div className={tab.card_blog1}>
                <CardMedia
                  component="img"
                  image={item.image_urls}
                  className={tab.card_img}
                />
                <Typography>
                  <h2 className={tab.card_title}>{item.title}</h2>
                  <div className={tab.card_user}>
                    <span className={tab.card_user__name}>
                      by {item.author.first_name} {item.author.last_name}
                    </span>
                    <div className={tab.moder}>
                      <button className={tab.app}>Approve</button>
                      <button className={tab.rej}>Rejected</button>
                    </div>
                  </div>
                </Typography>
              </div>
              <CardContent>
                <Typography className={tab.card_text}>
                  <p>{item.body}</p>
                </Typography>
                <CardActions className={tab.card_button}>
                  <Button size="small" color="primary">
                    <img
                      className={tab.card_icon__delete}
                      src={Icon_Delete}
                      alt=""
                    />
                  </Button>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </TabPanel>
    </Box>
  );
}
