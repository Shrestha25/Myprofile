import React from "react";
import "./textimage.css";
import Nsssymbol from "../images/nsssymbol.jpeg";
import Jagrati from "../images/jagrati.png";

const socialservices = () =>{
    return(
        <React.Fragment>
        <div class="container">
            <div class="image">
                <img src={Nsssymbol} alt=""/>
            </div>
            <div class="text">
                <h2>National Service Scheme</h2>
                <p> In the IIITDMJ chapter of NSS, we organized the camps<br/>
                    like blood donation camps, a cleanliness campaign, 
                    a cloth donation camp and other social works in nearby villages.<br/>
                    We visit nearby villages to know their problems. We also visit old age homes and orphanages.
                </p>
            </div>
        </div>
        <br/>
        <div class="container">
            <div class="image">
                <img src={Jagrati} alt=""/>
            </div>
            <div class="text">
                <h2>Jagrati</h2>
                <p> A proud volunteer of the Jagrati family.<br/>
                    Jagrati is an initiative by the students of IIITDMJ to provide free education 
                    to the children of villages nearby our institute.<br/>
                    Apart from teaching, we do many other activities like organizing Tree Plantation Drives and Stationery Distribution .
                    </p>
            </div>
        </div>
        </React.Fragment>
    );
}

export default socialservices;