import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import modal from './index.module.css'
import Delete_Icon from './../../img/icon_delete.svg'
import { Link } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};



export default function BasicModal({open,handleClose  = () => open(false)}) {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);



return (
    <div>
    {/* <Button onClick={handleOpen}>Open modal</Button> */}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
    <Box className={modal.modal} sx={style}>
        <Typography className={modal.title} id="modal-modal-title" variant="h6" component="h2">
        Причина удаления
        </Typography>
    <FormControl>
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        >
        <FormControlLabel className={modal.label} value="general" control={ <Radio color='default'/>} label="Общая" />
        <FormControlLabel className={modal.label} value="content" control={<Radio color='default' />} label="Вредоносное содержание" />
        <FormControlLabel className={modal.label} value="off_topic" control={<Radio color='default' />} label="Не по теме" />
        <FormControlLabel className={modal.label} value="rave" control={<Radio color='default' />} label="Бред какой-то" />
        <FormControlLabel className={modal.label} value="wrong_language" control={<Radio color='default' />} label="Неправильный язык" />
    </RadioGroup>
    <div className={modal.btn}>
        <Link  to='/' >
    <Button className={modal.btn_cancel} onClick={handleClose}>ОТМЕНА</Button>
        </Link>
    <Button className={modal.btn_delete} onClick={handleClose}>
        <img src={Delete_Icon} alt="" />
        УДАЛИТЬ</Button>
    </div>
    </FormControl>
    </Box>
    </Modal>
    </div>
);
}
