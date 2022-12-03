import React from 'react';
import DataBase  from "../../img/database.svg";
import Managers from "../../img/managers.svg"
import Content from "../../img/content.svg"
import CheckList from "../../img/check_list.svg"
import { NavLink} from 'react-router-dom';
import sbar from './index.module.css'
import Dashboard from '../../pages/AdminPanel/Dashboard/DashBoard';
import Exit from '../../img/exit.svg'
import LOGO from '../../img/LOGO.svg'

const SideBar = ({children}) => {

    const menuItem = [
        {
            path:'/database',
            name: 'База данных',
            icon: <img src={DataBase} alt="" />,
        },
        {
            path: '/managers',
            name: 'Менеджеры',
            icon: <img src={Managers} alt="" /> ,
        },
        {

            path: '/content',
            name: 'Контент',
            icon: <img src={Content} alt="" />
        },
        {
            path: '/reviewsandblogs',
            name: 'Отзывы и блоги',
            icon: <img src={CheckList} alt="" />,
            margin:true
        },
        {
            path: '/',
            name: 'Выход',
            icon: <img src={Exit} alt="" />

        }

    ]


    return (
        <div className={sbar.container}>
            
            <div className={sbar.side_bar}>
                <div className={sbar.top_section}>
                    <img className={sbar.logo} src={LOGO} alt="img" />
                </div>
                {
                    menuItem.map((item,index) => (
                        <NavLink to={item.path} key={index} className={sbar.link} activeclassName="active"
                        
                        style={{marginBottom : item.margin ? '80%':null}}
                        >
                            <div className={sbar.icon}>{item.icon}</div>
                            <div className={sbar.link_text}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            {/* <main>{children}</main> */}
        </div>

    );
}

export default SideBar;
