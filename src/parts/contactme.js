import React from "react";
import Face from "../logos/face.jpg";
import Insta from "../logos/insta.png";
import Linkedin from "../logos/linkedin.png";
import Mail from "../logos/mail.png";
import Git from "../logos/github.png";
import Twitter from "../logos/twitter.png";
import "./contactme.css";

const contact = () =>{
    return(
        <div className="logoset">
        <div>
            <img src={Mail} alt=""/> &nbsp;
            <a href="mailto:m.25shrestha97@gmail.com">25shrestha97@gmail.com</a> &nbsp;
            <a href="mailto:m.2019147@iiitdmj.ac.in">2019147@iiitdmj.ac.in</a>
        </div>
        <br/>
        <div>
            <a href="https://github.com/Shrestha25"><img src={Git} alt=""/> &nbsp;My Github Account </a>
        </div>
        <br/>
        <div>
            <a href="https://www.linkedin.com/in/shrestha-pratap-singh-1023a7190/"><img src={Linkedin} alt=""/></a> &nbsp;
            <a href="https://twitter.com/shresthapratap1?lang=en"><img src={Twitter} alt=""/></a> &nbsp;
            <a href="https://www.instagram.com/shrestha_sps_25/"><img src={Insta} alt=""/></a> &nbsp;
            <a href="https://www.facebook.com/shrestha.pratapsingh.14/"><img src={Face} alt=""/></a> &nbsp;
        </div>
        </div>
    );
}

export default contact;