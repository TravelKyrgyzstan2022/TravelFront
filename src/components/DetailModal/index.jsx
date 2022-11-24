import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import dm from "./index.module.css"
import Place from '../../img/place.png'
import {useState} from 'react'
import Add_Photo from "../../img/add_photo.svg"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflow: 'scroll'
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
}


export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 700 }}>
                <div>
            <h2 id="parent-modal-title">Изображения</h2>
            <div className={dm.cards}>
                    <div className={dm.cards_left}>
                <img src={Place} alt="" />
                    </div>
                    <div className={dm.cards_right}>
                    <img className={dm.card_img} src={Place} alt="" />
                    <img className={dm.card_img} src={Place} alt="" />
                    <img className={dm.card_img} src={Place} alt="" />
                    <img className={dm.card_img} src={Place} alt="" />
                    <img className={dm.card_img} src={Place} alt="" />
                    <img className={dm.card_img} src={Place} alt="" />
                    <img className={dm.card_img} src={Place} alt="" />
                    {/* <img src={Place} alt="" /> */}
                <div>
                    <img src={Add_Photo} alt="" />
                </div>
                    </div>
            </div>
                </div>

            <p id="parent-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <Button onClick={handleClose}>Close Child Modal</Button>
            </Box>
        </Modal>
        </div>
    );
}
