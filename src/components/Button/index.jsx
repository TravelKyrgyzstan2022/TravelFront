import React from 'react';
import btn from "./index.module.css"
import PLAN from "../../img/plan_light.svg"

const Button = () => {
    return (
        <>
            <button className={btn.btn}><img className={btn.btn_img} src={PLAN} alt="img" />Add to my trip plan</button>
        </>
    );
}

export default Button;

