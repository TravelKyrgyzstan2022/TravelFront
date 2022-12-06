import React from "react";
import detail from "./index.module.css";
import Header from "../../img/header_sulaiman.png";
import Button from "../../components/Button";
import Like from "../../img/like.svg";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import Rating from "@mui/material/Rating";
import AVA from "../../img/ava.svg";
import Card from "../../components/Cards";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSights } from "../../api/place";

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
  const sights = useSelector((state) => state.sights.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSights());
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

  return (
    <>
      <div className={detail.container}>
        <img className={detail.header} src={Header} alt="" />
        <h2 className={detail.title}>Sulaiman Too</h2>
        <div className={detail.tags}>
          <button className={detail.tag}>#mountains</button>
          <button className={detail.tag2}>#ancientsights</button>
        </div>
        <div className={detail.buttons}>
          <Button />
          <button className={detail.like_btn}>
            <img className={detail.like_btn__img} src={Like} alt="" />
            Add to Favourite
          </button>
        </div>

        <div className={detail.buttons_category}>
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
              <BottomNavigationAction label="Reviews" {...a11yProps(2)} />
              <BottomNavigationAction label="Location" {...a11yProps(3)} />
              <BottomNavigationAction label="Photos" {...a11yProps(4)} />
              <BottomNavigationAction
                label="How to get there ?"
                {...a11yProps(4)}
              />
            </BottomNavigation>
          </Box>

          <BottomPanel className={detail.panel} value={value} index={0}>
            <div className={detail.text}>
              <p>
                Sulaiman-Too Mountain legend retells the story of the UNESCO
                World Heritage List site. Young and handsome was Sulaiman. And
                he was endowed with the gift of providence. For this, he was
                known as a prophet, and his name became sacred. In everything,
                it was as if Suleiman was sedate. But he had one passion that he
                could not suppress in himself – a passion for good horses and a
                fast jump. In the stable, there were 500 of the best horses.Once
                the leap so captivated him that he did not even pray and missed
                the prayer. Suleiman was afraid of God’s wrath and, in order to
                earn forgiveness for his sin and appease the Most High, he
                ordered to cut all the horses.God liked such a sacrifice, and he
                decided to award Suleiman. He gave him a huge throne, which
                could be raised only by 500 genies (fantastic creatures,
                spirits). The genies raised the throne and, on the order of
                Suleiman, lowered it just in the place where the first man,
                Adam, with his omach (wooden plow) once drew the border for
                arable land on the site of the current city of Osh.The genies
                raised the throne and, on the order of Suleiman, lowered it to
                the top of the mountain. Sitting on a throne at the top of the
                mountain, Suleiman admired the green plain that lay at the foot
                of the mountain and enjoyed the amazingly clean, fragrant air.
                But this was not enough for Suleiman. He wanted the river to
                flow at the foot of the mountain, where he sat on the throne,
                and that it beat against stones, rumble, and foam.Beyond the
                mountains was a large lake. And he ordered Suleiman to his gins
                to turn the mountain and let the water run.Gene earned. Lumps of
                chippings they split and scattered across the plain. Finally, a
                gorge formed, and the water, noisily striking the scattered
                stones, flowed along the green plain past the mountain on which
                Suleiman sitting on his throne.That is why that mountain is
                called Takhti-Suleiman – the throne of Suleiman, and the foamy
                river was called Ak-Buura. Visit the Sacred Mountain to hear in
                person the Sulaiman-Too Mountain legend. Most of our tours go
                through the favored Osh town join them.
              </p>
              <button className={detail.read_more}>Read more</button>
            </div>
            <div className={detail.you_make__like}>
              <Card />
            </div>
          </BottomPanel>

          <BottomPanel value={value} index={1}>
            <div className={detail.reviews_container}>
              <div className={detail.reviews_header}>
                <img src={AVA} alt="" />
                <h4 className={detail.name_user}>George Michael</h4>
                <div className={detail.data_rating}>
                  <Rating
                    className={detail.rating}
                    name="customized-10"
                    max={5}
                  />
                  <div className={detail.data}>9/05/22</div>
                </div>
              </div>
              <div className={detail.reviews_txt}>
                That was such a nice place. The most beautiful place I’ve ever
                seen. My advice to everyone not to forget to take warm coat.
              </div>

              <div className={detail.reviews_header}>
                <img src={AVA} alt="" />
                <h4 className={detail.name_user}>Harry Styles</h4>
                <div className={detail.data_rating}>
                  <Rating
                    className={detail.rating}
                    name="customized-10"
                    max={5}
                  />
                  <div className={detail.data}>9/05/22</div>
                </div>
              </div>
              <div className={detail.reviews_txt}>
                Holdin’ me back. Gravity’s holdin’ me back. I wnat you to hold
                out the palm of your hand. Why don’t we leave it all that ?
                Nothin’ to say. When everything gets in the way.
                <br />
                Seems you cannot be replaced. And I’m the one who will stay, oh.
                In this world, it’s just us. You know it’s not the same as it
                was. In this world, it’s just us.
              </div>

              <div className={detail.reviews_header}>
                <img src={AVA} alt="" />
                <h4 className={detail.name_user}>George Kusunoki Miller</h4>
                <div className={detail.data_rating}>
                  <Rating
                    className={detail.rating}
                    name="customized-10"
                    max={5}
                  />
                  <div className={detail.data}>9/05/22</div>
                </div>
              </div>
              <div className={detail.reviews_txt}>
                Yeah, all my friends no fun. My friends, they’re gone. They all
                left one by one. And now that summer’s done. They don’t need no
                more fun. Yeah, I drive there on my own. I’m rich, but my a/c
                broke. Don’t check no mail no phone.
              </div>
            </div>

            <div className={detail.you_make__like}>
              <Card />
            </div>
          </BottomPanel>

          {/* LOCATION */}

          <BottomPanel className={detail.panel} value={value} index={2}>
            <Card />
          </BottomPanel>

          {/* PHOTOS */}
          <BottomPanel className={detail.panel} value={value} index={3}>
            <Card />
          </BottomPanel>

          {/* HOW TO GET THERE */}

          <BottomPanel className={detail.panel} value={value} index={4}>
            <div className={detail.cont_howtoget_there}>
              <div>
                <h5 className={detail.cont_title}>
                  Our Partners That Provide Tours There:
                </h5>
              </div>
              <div className={detail.links}>
                <a className={detail.link} href="/kettik.kg">
                  @kettik.kg
                </a>
                <a className={detail.link} href="/kg.country">
                  @kg.country
                </a>
                <a className={detail.link} href="/sunrise.trip">
                  @sunrise.trip
                </a>
              </div>
              <h6 className={detail.cont_subtitle}>FAQ</h6>
              <div className={detail.questions}>
                <Autocomplete
                  id="asynchronous-demo"
                  className={detail.question}
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
                  className={detail.question}
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
                  className={detail.question}
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
            <div className={detail.you_make__like}>
              <Card />
            </div>
          </BottomPanel>
        </div>
      </div>
    </>
  );
};

const topTitle = [{ title: "Yes" }, { title: "No" }];

export default Detail;
