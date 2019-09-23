import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import { LoginUserForm, RegisterFrom, Button } from './index'
import withStyle from 'react-jss'
import { FormStyle } from './Form.Style'
import './form.css';

const UserForm = ({classes}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const [form, setForm] = useState(false);

    const currentForm = () => {
        setForm(!form);
    }
    
    const onOpenModal = () => {
        setModalOpen(true)
    };
    const onCloseModal = () => {
        setModalOpen(false)
    };

    return(
        <React.Fragment>            
            <button className={classes.loginLink} onClick={onOpenModal}>Login</button>
            <Modal open={modalOpen} onClose={onCloseModal} center>
            <Button formbtn={currentForm} />
            {form === false ? <LoginUserForm /> : <RegisterFrom />}            
            </Modal>            
        </React.Fragment>
    )
}

export default withStyle(FormStyle)(UserForm);