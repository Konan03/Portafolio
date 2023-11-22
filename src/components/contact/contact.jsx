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
        <Modal title="Contacts" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <MdEmail/>
          <p>manuelcaicedo52@gmail.com</p>
          <FaPhone/>
          <p>+57 3219453514</p>
        </Modal>
        </>
    );
}

export default Contact