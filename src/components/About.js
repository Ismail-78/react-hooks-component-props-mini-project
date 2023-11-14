import React from "react";
 function About ({image, About}) {
    const defaultImage= "https://via.placeholder.com/215";

    return(
        <aside>
            <img src={image || defaultImage } alt ="blog logo"></img>
            <p>{About}</p>
        </aside>
    )
 }

 export default About;