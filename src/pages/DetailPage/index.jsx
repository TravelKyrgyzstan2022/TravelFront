import React from "react";
import "./index.css";
import Header from "../../img/header_sulaiman.png";
import Button from "../../components/Button";
import Like from "../../img/like.svg";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import Rating from "@mui/material/Rating";
import AVA from "../../img/ava.svg";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlace, getPlaceById } from "../../api/place";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import Location from "../../img/location.svg";
import MapYandex from "../../components/Map";
import { useParams } from "react-router-dom";
import blur from "../../img/blur.png";
import TopDestinations from "../HomePage/TopDestinations";
import Footer from "../../components/Footer/Footer";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function BottomPanel(props) {
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

BottomPanel.propTypes = {
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

const Detail = () => {
  const { id } = useParams();

  const { placeById } = useSelector((state) => state.place);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaceById(id));
  }, []);

  const [value, setValue] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [options2, setOptions2] = React.useState([]);
  const loading = open && options.length === 0;
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topTitle]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const place = useSelector((state) => state.place.data);

  useEffect(() => {
    dispatch(getPlace());
  }, []);

  return (
    <>
      <div className="container">
        <img className="header" src={placeById.image_urls} alt="" />
        <img className="blur" src={blur} alt="" />
        <h2 className="container_title">{placeById.name}</h2>
        <div className="tags">
          <button className="tag">#mountains</button>
        </div>
        <div className="buttons">
          <Button />
          <button className="like_btn">
            <img className="like_btn__img" src={Like} alt="" />
            Add to Favourite
          </button>
        </div>

        <div className="buttons_category">
          <Box sx={{ width: 700 }}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                label="Description"
                {...a11yProps(0)}
                sx={{
                  color: "black",
                  fontSize: "1.4rem",
                }}
              />
              <BottomNavigationAction
                label="Reviews"
                sx={{
                  color: "black",
                  fontSize: "1.4rem",
                }}
                {...a11yProps(2)}
              />
              <BottomNavigationAction
                sx={{
                  color: "black",
                  fontSize: "1.4rem",
                }}
                label="Location"
                {...a11yProps(3)}
              />
              <BottomNavigationAction
                sx={{
                  color: "black",
                  fontSize: "1.4rem",
                }}
                label="Photos"
                {...a11yProps(4)}
              />
              <BottomNavigationAction
                sx={{
                  color: "black",
                  fontSize: "1.4rem",
                }}
                label="Navigate"
                {...a11yProps(4)}
              />
            </BottomNavigation>
          </Box>

          <BottomPanel className="panel" value={value} index={0}>
            <div className="text">
              <p className="text_description">{placeById.description}</p>
            </div>
            <div className="you_make__like">
              <h4 className="you_make_like__title">You May Also Like</h4>
              <TopDestinations place={place} />
            </div>
          </BottomPanel>

          <BottomPanel value={value} index={1}>
            <div className="reviews_container">
              <div className="comment">
                <CommentSection
                  currentUser={{
                    // currentUserId: "01a",
                    currentUserImg:
                      "https://ui-avatars.com/api/name=Riya&background=random",
                    currentUserProfile:
                      "https://www.linkedin.com/in/riya-negi-8879631a9/",
                    currentUserFullName: "Riya Negi",
                  }}
                  // logIn={{
                  //   loginLink: "http://localhost:3001/",
                  //   signupLink: "http://localhost:3001/"
                  // }}
                  // commentData={data}
                />
              </div>
              <div className="reviews_header">
                <img src={AVA} alt="" />
                <h4 className="name_user">George Michael</h4>
                <div className="data_rating">
                  <Rating className="rating" name="customized-10" max={5} />
                  <div className="data">9/05/22</div>
                </div>
              </div>
              <div className="reviews_txt">
                That was such a nice place. The most beautiful place I’ve ever
                seen. My advice to everyone not to forget to take warm coat.
              </div>

              <div className="reviews_header">
                <img src={AVA} alt="" />
                <h4 className="name_user">Harry Styles</h4>
                <div className="data_rating">
                  <Rating className="rating" name="customized-10" max={5} />
                  <div className="data">9/05/22</div>
                </div>
              </div>
              <div className="reviews_txt">
                Holdin’ me back. Gravity’s holdin’ me back. I wnat you to hold
                out the palm of your hand. Why don’t we leave it all that ?
                Nothin’ to say. When everything gets in the way.
                <br />
                Seems you cannot be replaced. And I’m the one who will stay, oh.
                In this world, it’s just us. You know it’s not the same as it
                was. In this world, it’s just us.
              </div>

              <div className="reviews_header">
                <img src={AVA} alt="" />
                <h4 className="name_user">George Kusunoki Miller</h4>
                <div className="data_rating">
                  <Rating className="rating" name="customized-10" max={5} />
                  <div className="data">9/05/22</div>
                </div>
              </div>
              <div className="reviews_txt">
                Yeah, all my friends no fun. My friends, they’re gone. They all
                left one by one. And now that summer’s done. They don’t need no
                more fun. Yeah, I drive there on my own. I’m rich, but my a/c
                broke. Don’t check no mail no phone.
              </div>
            </div>

            <div className="top_des">
              <div className="you_make__like">
                <h4 className="you_make_like__title">You May Also Like</h4>
                <TopDestinations place={place} />
              </div>
            </div>
          </BottomPanel>

          {/* LOCATION */}
          <BottomPanel className="panel" value={value} index={2}>
            <div className="map">
              <div className="locatioon">
                <img src={Location} alt="" /> <p>{placeById.region}</p>
              </div>
              <div className="yandex_map">
                <MapYandex
                  latitude={placeById.latitude}
                  longitude={placeById.longitude}
                />
              </div>
            </div>
            <h4 className="you_make_like__title">You May Also Like</h4>
            <TopDestinations place={place} />
          </BottomPanel>

          {/* PHOTOS */}
          <BottomPanel className="panel" value={value} index={3}>
            <h4 className="you_make_like__title">You May Also Like</h4>
            <TopDestinations place={place} />
          </BottomPanel>

          {/* HOW TO GET THERE */}

          <BottomPanel className="panel" value={value} index={4}>
            <div className="cont_howtoget_there">
              <div>
                <h5 className="cont_title">
                  Our Partners That Provide Tours There:
                </h5>
              </div>
              <div className="links">
                <a className="link" href="/kettik.kg">
                  @kettik.kg
                </a>
                <a className="link" href="/kg.country">
                  @kg.country
                </a>
                <a className="link" href="/sunrise.trip">
                  @sunrise.trip
                </a>
              </div>
              <h6 className="cont_subtitle">FAQ</h6>
              <div className="questions">
                <Autocomplete
                  id="asynchronous-demo"
                  className="question"
                  open={open}
                  onOpen={() => {
                    setOpen(true);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                  isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                  }
                  getOptionLabel={(option) => option.title}
                  options={options}
                  loading={loading}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Do I need a visa ?"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <React.Fragment>
                            {loading ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        ),
                      }}
                    />
                  )}
                />

                <Autocomplete
                  id="asynchronous-demo"
                  className="question"
                  open={open}
                  onOpen={() => {
                    setOpen(true);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                  isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                  }
                  getOptionLabel={(option) => option.title}
                  options={options}
                  loading={loading}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Luggage and bags"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <React.Fragment>
                            {loading ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        ),
                      }}
                    />
                  )}
                />

                <Autocomplete
                  id="asynchronous-demo"
                  className="question"
                  open={open}
                  onOpen={() => {
                    setOpen(true);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                  isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                  }
                  getOptionLabel={(option) => option.title}
                  options={options}
                  // loading={loading}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Am I fit enough ?"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <React.Fragment>
                            {loading ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        ),
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="you_make__like">
              <h4 className="you_make_like__title">You May Also Like</h4>
              <TopDestinations place={place} />
            </div>
          </BottomPanel>
        </div>
      </div>
      <Footer />
    </>
  );
};

const topTitle = [{ title: "Yes" }, { title: "No" }];

export default Detail;
