import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "../../css/contact.css"

function Contact(){
    return(
        <div className="contact">
            <div className="contact__item">
                <MdEmail size={50} color="white" className="contact__email--icon"></MdEmail>
                <p className="contact__email--text">manuelcaicedo52@gmail.com</p>
            </div>

            <div className="contact__item">
                <FaPhone size={40} color="white" className="contact__phone--icon"></FaPhone>
                <p className="contact__phone--text">+57 3219453514</p>
            </div>

        </div>
    );
}

export default Contact