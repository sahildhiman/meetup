import React, { useState } from 'react'
import Modal from 'react-responsive-modal'
import { LoginUserForm } from './'

const Login = () => {
    const [modalOpen, setModalOpen] = useState(false)
    
    const onOpenModal = () => {
        setModalOpen(true)
    };
    const onCloseModal = () => {
        setModalOpen(false)
    };

    return(
        <div>
            <h1>Login Form</h1>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal open={modalOpen} onClose={onCloseModal} center>
            <h2>Simple centered modal</h2>
                <LoginUserForm />
            </Modal>            
        </div>
    )
}

export default Login;