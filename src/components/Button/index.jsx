import React from 'react';
import btn from "./index.module.css"
import Plan from "../../img/plan_light.svg"

const Button = () => {
    return (
        <>
            <button className={btn.btn}><img className={btn.btn_img} src={Plan} alt="img" />Add to my trip plan</button>
        </>
    );
}

export default Button;
