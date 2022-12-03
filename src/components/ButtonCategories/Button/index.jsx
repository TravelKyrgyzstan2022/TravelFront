import React from 'react';
import btncat from "./index.module.css"
import ICON from "../../../img/plan_light.svg"

const ButtonCategories = () => {
    return (
        <>
            <button className={btncat.btn}><img className={btncat.btn_img} src={ICON} alt="img" />Add to my trip plan</button>
        </>
    );
}

export default ButtonCategories;
