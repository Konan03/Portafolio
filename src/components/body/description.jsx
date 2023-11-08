import React from "react";
import "../../css/description.css"


function Description(){
    return(
        <div className="description">
            <div className="description__text">
                <p className="description__text--info">
                    Hello, I am a systems engineering student.
                </p>
            </div>

            <img src="\img\konan.jpeg" alt="photo profile" className="description__photo"></img>
        </div>
    );
}

export default Description