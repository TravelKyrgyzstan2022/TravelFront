import React from 'react';
import rb  from './index.module.css'
import Search  from '../../../img/search.svg';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Title from '../../../img/blogandrev.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card_img from '../../../img/card_img.svg'
import Ava from '../../../img/ava.svg'
import Icon_Delete from "../../../img/icon_delete.svg";
import SideBar from '../../../components/SideBar';


function LinkTab(props) {
return (

    
    <Tab
    component="a"
    onClick={(event) => {
        event.preventDefault();
    }}
    {...props}
    />
);
}
const ReviewsAndBlogs = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return (
        <div className={rb.main_container}>
            <SideBar/>
    <div className={rb.container}>
        <form className={rb.form}>
        <img className={rb.img} src={Search} alt="" />
        <input className={rb.search} type="search" placeholder="Поиск по ФИО, электронной почте, дате регистрации"/>
        </form>
        <div className={rb.border}></div>
        <div className={rb.content}>
        <div className={rb.title}>
                <img className={rb.title_image} src={Title} /> 
            <h3>
            Одобрение блогов и отзывов
            </h3>
        </div>
    <Box sx={{ width: '100%' }}>
    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Блоги" href="/blogs" />
        <LinkTab label="Отзывы и рейтинг" href="/reviewsandraiting" />
    </Tabs>
    </Box>
    <Card className={rb.card}>
    <CardActionArea>
        <div className={rb.card_blog1}>
        <CardMedia
        component="img"
        image={Card_img}
        className={rb.card_img}
        />
        <Typography>
        <h2 className={rb.card_title}>How I travelled to amazing Kyrgyzstan...</h2>
        <div className={rb.card_user}>
            {/* <img src={Ava} alt="" /> */}
            <span className={rb.card_user__name}>by George Michael</span>
        </div>
        </Typography>
        </div>
        <CardContent>
        <Typography className={rb.card_text}>
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
    <CardActions className={rb.card_button}>
        <Button size="small" color="primary">
        <img className={rb.card_icon__delete} src={Icon_Delete} alt="" />
        </Button>
    </CardActions>
        </CardContent>
    </CardActionArea>
    </Card>
    <Card className={rb.card}>
    <CardActionArea>
        <div className={rb.card_blog1}>
        <CardMedia
        component="img"
        image={Card_img}
        className={rb.card_img}
        />
        <Typography>
        <h2 className={rb.card_title}>How I travelled to amazing Kyrgyzstan...</h2>
        <div className={rb.card_user}>
            {/* <img src={Ava} alt="" /> */}
            <span className={rb.card_user__name}>by George Michael</span>
        </div>
        </Typography>
        </div>
        <CardContent>
        <Typography className={rb.card_text}>
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
    <CardActions className={rb.card_button}>
        <Button size="small" color="primary">
        <img className={rb.card_icon__delete} src={Icon_Delete} alt="" />
        </Button>
    </CardActions>
        </CardContent>
    </CardActionArea>
    </Card>

    </div>
        </div>
        </div>
    );
}

export default ReviewsAndBlogs;
