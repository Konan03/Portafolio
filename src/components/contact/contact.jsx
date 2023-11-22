import React, { useState } from "react";
import { Button, Modal } from 'antd';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "../../css/contact.css"

function Contact(){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(

        <>
        <Button type="primary" onClick={showModal} style={{ backgroundColor: 'rgb(80, 77, 77)' }}>
          Contact
        </Button>
        <Modal title="Contacts" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} 
        okButtonProps={{ style: { backgroundColor: 'rgb(80, 77, 77)'} }}
        cancelButtonProps={{style: {backgroundColor: 'rgb(80, 77, 77)', color: 'white', borderColor: 'white'}}}>
          <div className="icon">
            <MdEmail size={30} />
            <p className="text">manuelcaicedo52@gmail.com</p>
          </div>
          <div className="icon">
            <FaPhone size={30} />
            <p className="text">+57 3219453514</p>
          </div>
          
        </Modal>
        </>
    );
}

export default Contact