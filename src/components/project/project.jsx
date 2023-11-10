import React from "react";
import CardProject from "./card/cardProject";
import "../../css/project.css"

function Project(){
    return( 
        <section className="container">
            <CardProject className="container__card"></CardProject>
            <CardProject className="container__card"></CardProject>
            <CardProject className="container__card"></CardProject>
        </section>
    );
}

export default Project