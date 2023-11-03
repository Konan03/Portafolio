import React from "react";

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar__name">
                <h1> Manuel Caicedo </h1>
            </div>

            <div>
                <a> My</a>
                <a> About</a>
                <a> Contact</a>
            </div>
        </div>
    );
}

export default Navbar