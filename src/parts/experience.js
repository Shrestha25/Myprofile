import React from "react";
import "./textimage.css";
import elucidata from "../images/elucidata.jpg";

const Experience = () =>{
    return(
        <React.Fragment>
        <div class="container">
            <div class="image">
                <img src={elucidata} alt=""/>
            </div>
            <div class="text">
                <h2>Elucidata</h2>
                <p> Worked as a software development engineer intern for 3 months.
                    Worked with the cloud infra team and developed REST APIs for connecting various services, 
                    working around AWS services like Cloudfront, Cloudwatch Lamda, and DynamoDB.
                    Worked with Terraform to maintain the software infrastructure.</p>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Experience;