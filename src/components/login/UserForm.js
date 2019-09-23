import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import { LoginUserForm, RegisterFrom } from './index'
import { Tabs, Tab } from 'react-bootstrap-tabs';
import withStyle from 'react-jss'
import { FormStyle } from './Form.Style'
import './form.css';


const UserForm = ({classes}) => {
    const [modalOpen, setModalOpen] = useState(false);
    
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
                <Tabs onSelect={(index, label) => (label + ' selected')}>
                    <Tab label="Login"><LoginUserForm /></Tab>
                    <Tab label="Register"><RegisterFrom /></Tab>
                </Tabs>
            </Modal>            
        </React.Fragment>
    )
}

export default withStyle(FormStyle)(UserForm);