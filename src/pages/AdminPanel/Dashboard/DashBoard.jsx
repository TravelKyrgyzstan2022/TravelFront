import React from 'react';
import dash from './index.module.css'
// import Search  from '../../../img/search.svg';

const Dashboard = () => {
    return (
        <div className={dash.container}>
        <form className={dash.form}>
            {/* <img className={dash.img} src={Search} alt="" /> */}
            <input className={dash.search} type="search" placeholder="Поиск по ФИО, электронной почте, дате регистрации"/>
        </form>
        </div>
    );
}

export default Dashboard;