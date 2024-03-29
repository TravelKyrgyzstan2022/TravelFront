import React, { useState } from "react";
import "./index.css";
import Button from "../../components/Button";
import Like from "../../img/like.svg";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import AVA from "../../img/ava.svg";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlace, getPlaceById } from "../../api/place";
import Location from "../../img/location.svg";
import MapYandex from "../../components/Map";
import { NavLink, useParams } from "react-router-dom";
import blur from "../../img/blur.png";
import TopDestinations from "../HomePage/TopDestinations";
import { getComment, postComment } from "../../api/comment";
import { useFormik } from "formik";
import send from "../../img/com_send.svg";
import Footer from "../../components/Footer/Footer";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";

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

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3);
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
  const comment = useSelector((state) => state.comment.data);
  console.log("999", comment);

  useEffect(() => {
    dispatch(postComment());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getPlace());
  }, []);

  useEffect(() => {
    dispatch(getComment(id));
  }, []);

  const formik = useFormik({
    initialValues: {
      body: "",
    },
    onSubmit: (values) => {
      dispatch(postComment({ body: values, id }));
    },
  });

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

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
              <NavLink to={`/details/${place.id}`}>
                <TopDestinations place={place} />
              </NavLink>
            </div>
          </BottomPanel>

          <BottomPanel value={value} index={1}>
            <div className="reviews_container">
              <div className="comment">
                <form onSubmit={formik.handleSubmit}>
                  <div className="container_input">
                    <input
                      name="body"
                      className="input_comment"
                      type="text"
                      placeholder="Add comment..."
                      value={formik.values.body}
                      onChange={formik.handleChange}
                    />
                    <button type="submit" className="com_send">
                      <img className="img_send" src={send} alt="" />
                    </button>
                  </div>
                </form>
              </div>
              <div>
                {comment.map((comment) => (
                  <div className="box_comments">
                    <div className="reviews_header">
                      <img
                        className="header_ava"
                        src={comment.user.image_url}
                        alt=""
                      />
                      <h4 className="name_user">{comment.user.first_name}</h4>
                      <h4 className="name_user">{comment.user.last_name}</h4>
                      <div className="data">{comment.creation_date}</div>
                    </div>
                    <div className="reviews_txt">
                      <div className="reviews_txt">{comment.body}</div>
                      <div className="reviews_like">
                        <StyledRating
                          name="customized-color"
                          getLabelText={(value) =>
                            `${value} Heart${value !== 1 ? "s" : ""}`
                          }
                          precision={1}
                          max={1}
                          icon={<FavoriteIcon fontSize="inherit" />}
                          emptyIcon={
                            <FavoriteBorderIcon
                              fontSize="inherit"
                              // onChange={comment.like.count}
                            />
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="top_des">
              <div className="you_make__like">
                <h4 className="you_make_like__title">You May Also Like</h4>
                <NavLink to={`/details/${place.id}`}>
                  <TopDestinations place={place} />
                </NavLink>
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
            <NavLink to={`/details/${place.id}`}>
              <TopDestinations place={place} />
            </NavLink>
          </BottomPanel>

          {/* PHOTOS */}
          <BottomPanel className="panel" value={value} index={3}>
            <div className="box_images">
              {placeById?.image_urls?.map((image) => (
                <img className="few_images" src={image} alt="" />
              ))}
            </div>
            <h4 className="you_make_like__title">You May Also Like</h4>
            <NavLink to={`/details/${place.id}`}>
              <TopDestinations place={place} />
            </NavLink>
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
                  open={open === 1}
                  onOpen={() => {
                    setOpen(1);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                  isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                  }
                  getOptionLabel={(option) => option.title}
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Do I need special equipment to visit this place?"
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
                  open={open === 2}
                  onOpen={() => {
                    setOpen(2);
                  }}
                  onClose={() => {
                    setOpen(false);
                  }}
                  isOptionEqualToValue={(option, value) =>
                    option.title === value.title
                  }
                  getOptionLabel={(option) => option.title}
                  options={options}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Is there any shops or food kiosks to buy food?"
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
                  open={open === 3}
                  onOpen={() => {
                    setOpen(3);
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
                      label="Is there any shops or food kiosks to buy food ?"
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

              <NavLink to={`/details/${place.id}`}>
                <TopDestinations place={place} />
              </NavLink>
            </div>
          </BottomPanel>
        </div>
      </div>
      <Footer />
    </>
  );
};

const topTitle = [
  {
    title:
      "No, you do not need any special equipment. But you can take with you hiking sticks for walking.",
  },
];

export default Detail;
