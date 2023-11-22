import React from "react";
import "../../css/navbar.css"
import { GithubOutlined, LinkedinOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Contact from "../contact/contact";


function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar__name">
                <h1> Manuel Caicedo </h1>
            </div>

            <div className="navbar__list">
                <ul className="navbar__list--content">

                    <Link to={"/"} className="navbar__link">
                        <li className="navbar__list--item">Home</li>
                    </Link>

                    <Link to={"/projects"} className="navbar__link">
                        <li className="navbar__list--item">Projects</li>
                    </Link>

                    
                    <li className="navbar__list--item"> <Contact/></li>
                    
                    
                </ul>

                <div className="navbar__icon">
                    <a href="https://github.com/Konan03" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined className="navbar__icon" style={{ fontSize: '24px' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/jose-manuel-caicedo-perdomo/" target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined className="navbar__icon" style={{ fontSize: '24px' }}/>
                    </a>
                </div>
            </div>

            

        </div>
    );
}

export default Navbar