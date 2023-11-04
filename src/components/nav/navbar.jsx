import React from "react";
import "../../css/navbar.css"
import { GithubOutlined, LinkedinOutlined} from '@ant-design/icons';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar__name">
                <h1> Manuel Caicedo </h1>
            </div>

            <div className="navbar__list">
                <ul className="navbar__list--content">
                    <li className="navbar__list--item">Projects</li>
                    <li className="navbar__list--item">Contact</li>
                </ul>

                <div className="navbar__icon">
                    <GithubOutlined className="navbar__icon" style={{ fontSize: '24px' }} />
                    <LinkedinOutlined className="navbar__icon" style={{ fontSize: '24px' }}/>
                </div>
            </div>

            

        </div>
    );
}

export default Navbar