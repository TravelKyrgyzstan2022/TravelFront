import React from 'react';
import content from './index.module.css'
import Search  from '../../../img/search.svg';
import Ctitle from '../../../img/content_search.svg'
import Add_Icon from "../../../img/content_add.svg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Content_url from '../../../img/content_url.png'
import Card_icon from '../../../img/card_icon.svg'

const Content = () => {
    return (
        <div className={content.container}>
                    <form className={content.form}>
            <img className={content.img} src={Search} alt="" />
            <input className={content.search} type="search" placeholder="Поиск по ФИО, электронной почте, дате регистрации"/>
        </form>
        <div className={content.border}></div>
        <div className={content.content}>
        <div className={content.title}>
                <img className={content.title_image} src={Ctitle} /> 
            <h3>
            Управление контентом
            </h3>
        </div>

        <div className={content.add}>
            <img className={content.add_icon} src={Add_Icon} alt="" />
        <a href="/"><button className={content.button}>Создать новый контент</button></a>
        </div>
        <div>
        <label className={content.dropdown}>
        <div className={content.dd_button}>
        <h5 className={content.dd_button__text}>Категория</h5>
        </div>
        <input type="checkbox" className={content.dd_input} id="test"/>
        <ul className={content.dd_menu}>
        <li>Eat</li>
        <li>Stay</li>
        </ul>
        </label>

<div className={content.full_card}>
    <Card className={content.card}
    sx={{
        borderRadius: '20px'
    }}
    >
        <Typography className={content.card_title}>
            <div className={content.card_title__img}>
            <img src={Card_icon} alt="" />
            </div>
            Eat
        </Typography>
    <CardActionArea>
        <CardMedia
        component="img"
        className={content.card_img}
        image={Content_url}
        alt="green iguana"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Money trees is a perfect place to shade and that’s just how I feel...
(now now)
        </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary">
        Увидеть больше
        </Button>
    </CardActions>
    </Card>
    </div>
        </div>
        </div>
        </div>
    );
}

export default Content;
