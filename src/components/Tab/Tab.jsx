import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Typography } from '@mui/material';
import Card_img from './../../img/card_img.svg'
import Icon_Delete from "./../../img/icon_delete.svg";
import tab from './index.module.css'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

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
        {children}
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
    'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function BasicTable() {
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const [value1, setValue1] = React.useState(2);
const [hover, setHover] = React.useState(-1);

return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Блоги" {...a11yProps(0)} />
        <Tab label="Отзывы и рейтинг" {...a11yProps(1)} />
        </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
    <Card className={tab.card}>
    <CardActionArea>
        <div className={tab.card_blog1}>
        <CardMedia
        component="img"
        image={Card_img}
        className={tab.card_img}
        />
        <Typography>
        <h2 className={tab.card_title}>How I travelled to amazing Kyrgyzstan...</h2>
        <div className={tab.card_user}>
            {/* <img src={Ava} alt="" /> */}
            <span className={tab.card_user__name}>by George Michael</span>
        </div>
        </Typography>
        </div>
        <CardContent>
        <Typography className={tab.card_text}>
            <p>Lörem ipsum nihypp lasoskapet rer måskap i jefarat, oligt eftersom ovis, prosk presess para, de ananat faren. 
Kasal krofessa pifaberas om ter vuvuzela, makrosat trimodern Jonas Mohamed: ruvis respektive kiten och epigisk. 
Vikroligt lätthelg plass biojigisk. 
Lafektig potire i tyskade prere, neliga i lyrusa vask. 
Infradyligt olig belåsamma för teprev nälig de namägt plar tihysk nad: ett mangen. 
Disk cynaktiv inte ilast i mikrod: och trollfilter. 
Pakinar vinar. 
Vurade megande: om dymavis isonat har behyre sunyren. 
Resamma kul än maktig exokin innan nyryng. 
Poning ben kal nyse selål sprängbälte i epigisk homolära dimände. 
Mikadyse sen sorad suledes pos, oliga även om preras bes förutom euroktig jitt. 
Rer sygen, heterore, räse tredat för att teragt respektive Erik Berggren denas: jedissade om än sotyns pregisk kravallant. 
</p>
        </Typography>
    <CardActions className={tab.card_button}>
        <Button size="small" color="primary">
        <img className={tab.card_icon__delete} src={Icon_Delete} alt="" />
        </Button>
    </CardActions>
        </CardContent>
    </CardActionArea>
    </Card>
    <Card className={tab.card}>
    <CardActionArea>
        <div className={tab.card_blog1}>
        <CardMedia
        component="img"
        image={Card_img}
        className={tab.card_img}
        />
        <Typography>
        <h2 className={tab.card_title}>How I travelled to amazing Kyrgyzstan...</h2>
        <div className={tab.card_user}>
            {/* <img src={Ava} alt="" /> */}
            <span className={tab.card_user__name}>by George Michael</span>
        </div>
        </Typography>
        </div>
        <CardContent>
        <Typography className={tab.card_text}>
            <p>Lörem ipsum nihypp lasoskapet rer måskap i jefarat, oligt eftersom ovis, prosk presess para, de ananat faren. 
Kasal krofessa pifaberas om ter vuvuzela, makrosat trimodern Jonas Mohamed: ruvis respektive kiten och epigisk. 
Vikroligt lätthelg plass biojigisk. 
Lafektig potire i tyskade prere, neliga i lyrusa vask. 
Infradyligt olig belåsamma för teprev nälig de namägt plar tihysk nad: ett mangen. 
Disk cynaktiv inte ilast i mikrod: och trollfilter. 
Pakinar vinar. 
Vurade megande: om dymavis isonat har behyre sunyren. 
Resamma kul än maktig exokin innan nyryng. 
Poning ben kal nyse selål sprängbälte i epigisk homolära dimände. 
Mikadyse sen sorad suledes pos, oliga även om preras bes förutom euroktig jitt. 
Rer sygen, heterore, räse tredat för att teragt respektive Erik Berggren denas: jedissade om än sotyns pregisk kravallant. 
</p>
        </Typography>
    <CardActions className={tab.card_button}>
        <Button size="small" color="primary">
        <img className={tab.card_icon__delete} src={Icon_Delete} alt="" />
        </Button>
    </CardActions>
        </CardContent>
    </CardActionArea>
    </Card>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <div className={tab.container}>
        <div className={tab.user}>
            <div className={tab.title}>
                <h4>George Michael</h4>
                <div className="text">
                I’m never gonna dance again. Guilty feet
                </div>
            </div>
            </div>
    <div className={tab.raiting}>
    <Box
    sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
    }}
    >
    <Rating
        name="hover-feedback"
        value1={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
        setValue1(newValue);
        }}
        onChangeActive={(event, newHover) => {
        setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    )}
    </Box>
            </div>
            <div className={tab.details}>
                <button className={tab.details_button}>View details</button>
            </div>
            <div className={tab.actions}>
                <button className={tab.actions_button}>...</button>
            </div>

    </div>
    <div className={tab.container}>
        <div className={tab.user}>
            <div className={tab.title}>
                <h4>George Michael</h4>
                <div className="text">
                I’m never gonna dance again. Guilty feet
                </div>
            </div>
            </div>
    <div className={tab.raiting}>
    <Box
    sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
    }}
    >
    <Rating
        name="hover-feedback"
        value1={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
        setValue1(newValue);
        }}
        onChangeActive={(event, newHover) => {
        setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    )}
    </Box>
            </div>
            <div className={tab.details}>
                <button className={tab.details_button}>View details</button>
            </div>
            <div className={tab.actions}>
                <button className={tab.actions_button}>...</button>
            </div>

    </div>
    <div className={tab.container}>
        <div className={tab.user}>
            <div className={tab.title}>
                <h4>George Michael</h4>
                <div className="text">
                I’m never gonna dance again. Guilty feet
                </div>
            </div>
            </div>
    <div className={tab.raiting}>
    <Box
    sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
    }}
    >
    <Rating
        name="hover-feedback"
        value1={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
        setValue1(newValue);
        }}
        onChangeActive={(event, newHover) => {
        setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    )}
    </Box>
            </div>
            <div className={tab.details}>
                <button className={tab.details_button}>View details</button>
            </div>
            <div className={tab.actions}>
                <button className={tab.actions_button}>...</button>
            </div>

    </div>
    <div className={tab.container}>
        <div className={tab.user}>
            <div className={tab.title}>
                <h4>George Michael</h4>
                <div className="text">
                I’m never gonna dance again. Guilty feet
                </div>
            </div>
            </div>
    <div className={tab.raiting}>
    <Box
    sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
    }}
    >
    <Rating
        name="hover-feedback"
        value1={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
        setValue1(newValue);
        }}
        onChangeActive={(event, newHover) => {
        setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    )}
    </Box>
            </div>
            <div className={tab.details}>
                <button className={tab.details_button}>View details</button>
            </div>
            <div className={tab.actions}>
                <button className={tab.actions_button}>...</button>
            </div>

    </div>
    <div className={tab.container}>
        <div className={tab.user}>
            <div className={tab.title}>
                <h4>George Michael</h4>
                <div className="text">
                I’m never gonna dance again. Guilty feet
                </div>
            </div>
            </div>
    <div className={tab.raiting}>
    <Box
    sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
    }}
    >
    <Rating
        name="hover-feedback"
        value1={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
        setValue1(newValue);
        }}
        onChangeActive={(event, newHover) => {
        setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    )}
    </Box>
            </div>
            <div className={tab.details}>
                <button className={tab.details_button}>View details</button>
            </div>
            <div className={tab.actions}>
                <button className={tab.actions_button}>...</button>
            </div>

    </div>
    <div className={tab.container}>
        <div className={tab.user}>
            <div className={tab.title}>
                <h4>George Michael</h4>
                <div className="text">
                I’m never gonna dance again. Guilty feet
                </div>
            </div>
            </div>
    <div className={tab.raiting}>
    <Box
    sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
    }}
    >
    <Rating
        name="hover-feedback"
        value1={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
        setValue1(newValue);
        }}
        onChangeActive={(event, newHover) => {
        setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
    )}
    </Box>
            </div>
            <div className={tab.details}>
                <button className={tab.details_button}>View details</button>
            </div>
            <div className={tab.actions}>
                <button className={tab.actions_button}>...</button>
            </div>

    </div>

    </TabPanel>
    </Box>
);
}
