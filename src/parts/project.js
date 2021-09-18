import React from "react";
import "./textimage.css";
import stool_logo from "../images/stool_logo.png";
import Wampserver from "../images/WampServer.png";

const project = () =>{
    return(
        <React.Fragment>
        <div class="container">
            <div class="image">
                <img src={stool_logo} alt=""/>
            </div>
            <div class="text">
                <h2>Stool.</h2>
                <p> A platform to invest in a stock via group pool.
                    Friends and strangers come together to invest in stocks and cryptocurrency, 
                    for sharing the investment strategy and profit.<br/>
                    <i>This team project bring our team in top 10 of Zeta Hacks 3.0</i> <br/><br/>
                    <a href="https://github.com/shivamsouravjha/Stooler">Git Hub Repository</a> </p>
            </div>
        </div>
        <br/>
        <div class="container">
            <div class="image">
                <img src={Wampserver} alt=""/>
            </div>
            <div class="text">
                <h2>PHC Database</h2>
                <p> A DBMS project for PHC using WAMP server, which mantain stock of medicines, update time table of
                    doctors, keep record of patients history and reduce paper work and increase efficiency.<br/><br/>
                    <a href="https://github.com/Shrestha25/dbms_project">Git Hub Repository</a></p>
            </div>
        </div>
        </React.Fragment>
    );
}

export default project;