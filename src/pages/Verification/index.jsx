import React from 'react';
import './index.css'
import Background from '../../img/auth_background.png'
import VerificationInput from 'react-verification-input';

const Verification = () => {
    return (
        <div className="containeer">
            <img className='img' src={Background} alt="" />
            <div className="box">
                <p className='box_title'>Verification</p>
                <p className='box_txt'>Enter 6-digit code that we sent on</p>
                <span className='txt_bold'>vasya@gmail.com</span>
                <div className='box_input'>
                <VerificationInput
            onChange={console.log}
            inputField={{
                onChange: (e) => {
                console.log(e.nativeEvent.target.value);
                }
            }}
            length={6}
            validChars="0-9"
            removeDefaultStyles
            characters={{
                className: "characters"
            }}
            character={{
                className: "character",
                classNameInactive: "character--inactive",
                classNameSelected: "character--selected"
            }}
    />
                </div>
                <div className='btn'>
                <button className='box_btn'>Submit</button>
                </div>

                <p className='btn_link'>Send new code</p>
            </div>
        </div>
    );
}

export default Verification;
