import React from "react";
import "../../css/description.css"
import { BiLogoReact, BiLogoCss3, BiLogoJavascript, BiLogoJava} from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';


function Description(){
    return(
        <div className="description">
            <div className="description__text">
                <p className="description__text--info">
                    Hello, I am a systems engineering student.
                </p>
                <h3 className="description__text--txt">Passionate about music,
                 dance and technology, 
                 <br/>
                 willing to learn new things</h3>

                <div className="description__xp">   
                    <BiLogoReact size={50} color="white" className="description__xp--icon"></BiLogoReact> 
                    <p className="description__xp--text">3 months basic</p>
                </div>
                <div className="description__xp">
                    <AiFillHtml5 size={50} color="white"/>
                    <BiLogoCss3 size={50} color="white"/>
                    <BiLogoJavascript size={50} color="white"/>
                    <p className="description__xp--text"> 7 months basic</p>
                </div>
                <div className="description__xp">
                    <BiLogoJava size={50} color="white"/>
                    <p className="description__xp--text"> 2 years basic</p>
                </div>
            </div>

            <img src="\img\konan.jpeg" alt="photo profile" className="description__photo"></img>
        </div>
    );
}

export default Description