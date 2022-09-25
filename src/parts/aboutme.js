import React from "react";
import "./aboutme.css";
import Img from "../images/my.jpeg";
const aboutme = () =>{
    return(
        <div className="aboutme_main">
            <img src={Img} alt="" className="aboutme_main_img"/>
            <br/>
            <br/>
            <div>
            Hi, myself Shrestha Pratap Singh<br/>
            I'm currently a final year student pursuing my B-Tech degree in Computer and Science from IIITDM Jabalpur<br/><br/>
            I'm a Competitive Programmer who loves solving problems.<br/>
            I have a decent background in programming, with high proficiency in Data Structures and Algorithms,<br/>
            a decent knowledge and experience of working with REST APIs, ReactJS, and AWS services Like DynamoDB, Cloudfront, AWS Lamda CircleCi and terraform.<br/><br/>
            Apart from coding, I love to play football and make small memes.<br/>
            In my free time, I sketch also<br/>
            </div>
        </div>
        
    );
}

export default aboutme;