import React from 'react';
import mn from './index.module.css'
import Search  from '../../../img/search.svg';
import Mtitle from '../../../img/mtitle.svg'
import Icon_Card from '../../../img/icon_card.svg'
import Add_Icon from '../../../img/add_managers.svg'
// import { Switch } from 'react-switch';

const Managers = () => {
    // const handleChange = event => {
    //     if (event.target.checked) {
    //     return background = '#3FBD89'
    //     } else {
    //     return background = '#CDD1E2'
    //     }
    // }


    return (
        <div className={mn.container}>
        <form className={mn.form}>
            <img className={mn.img} src={Search} alt="" />
            <input className={mn.search} type="search" placeholder="Поиск по ФИО, электронной почте, дате регистрации"/>
        </form>
        <div className={mn.border}></div>
        <div className={mn.about}>
            <div className={mn.title}>
                <img className={mn.title_image} src={Mtitle} /> 
            <h3>
            Менеджеры</h3>
            </div>
        <div className={mn.about_managers}>
            <div className={mn.card}>
                <img className={mn.icon} src={Icon_Card} />
                <div className={mn.name}>Вася</div>
                <a href="" className={mn.link}>Менеджер 1-го уровня</a>
                </div>
                <div className={mn.card}>
                <img className={mn.icon} src={Icon_Card} />
                <div className={mn.name}>Вася</div>
                <a href="" className={mn.link}>Менеджер 1-го уровня</a>
                </div>
                <div className={mn.card}>
                <img className={mn.icon} src={Icon_Card} />
                <div className={mn.name}>Вася</div>
                <a href="" className={mn.link}>Менеджер 1-го уровня</a>
                </div>
                <div className={mn.card}>
                <img className={mn.icon} src={Icon_Card} />
                <div className={mn.name}>Вася</div>
                <a href="" className={mn.link}>Менеджер 1-го уровня</a>
                </div>
        </div>

        <div className={mn.add_mn}>
            <img className={mn.add_icon} src={Add_Icon} alt="" />
            <h3>Добавление менеджера </h3>
        </div>
        <div className={mn.manager_box}>
        <div className={mn.empty}>
    
            <div className={mn.right}>
                <input className={mn.input} type='text' placeholder='Имя'/>      
                <input className={mn.input} type='text' placeholder='Фамилия'/>      
                <input className={mn.input} type='text' placeholder='Отчество'/>      
                <input className={mn.input} type='email' placeholder='Электронная почта'/>      
        </div>
        <div className={mn.box}>

        <div className={mn.border_box}></div>
        <div className={mn.left}>
            <div className={mn.t}>
            <p className={mn.text1}>Добавлять/редактировать/удалять контент в разделы клиентского сайта и мобильного приложения</p>
            <label className={mn.switch1} >
                <input type="checkbox" />
                <span className={mn.slider}></span>
                </label>
            </div>   
            <div className={mn.t}>
            <p className={mn.text}>Принимать запросы на поддержку менеджера </p>
            <label className={mn.switch} >
                <input type="checkbox" />
                <span className={mn.slider}></span>
                </label>
            </div>   
            <div className={mn.t}>
            <p className={mn.text}>Доступ к списку пользователей (база данных)</p>
            <label className={mn.switch} >
                <input type="checkbox" />
                <span className={mn.slider}></span>
                </label>
            </div>   
            <div className={mn.t}>
            <p className={mn.text}>Связываться с пользователями через телеграм чат - трекать локацию</p>
            <label className={mn.switch} >
                <input type="checkbox" />
                <span className={mn.slider}></span>
                </label>
            </div>   
            <div className={mn.t}>
            <p className={mn.text}>Удалять отзывы</p>
            <label className={mn.switch} >
                <input type="checkbox" />
                <span className={mn.slider}></span>
                </label>
            </div>   
            <div className={mn.t}>
            <p className={mn.text}>Одобрять блог </p>
            <label className={mn.switch} >
                <input type="checkbox" />
                <span className={mn.slider}></span>
                </label>
            </div>   
        </div>
        </div>
        </div>
        <div className={mn.btn}>
        <a  href="/"><button className={mn.btn_a}>Добавить менеджера</button></a>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Managers;
