import React from "react";
import "./cpprofile.css";
import Atcoder from "../images/atcoder.jpg";
import Codeforces from "../images/codeforces.png";
import Codechef from "../images/codechef.jpg";
import Hackerearth from "../images/hackerearth.png";

const cpprofile = () =>{
    return(
        <div className="cp_pro">
          <h5>My Coding Profile at different platform </h5>
          <div>
          <img src={Atcoder}  alt="" className="logo_img" /> &nbsp;&nbsp; <a href="https://atcoder.jp/users/Shrestha"> @Atcoder </a><br/>
          <img src={Codechef}  alt="" className="logo_img" /> &nbsp;&nbsp; <a href="https://www.codechef.com/users/gsps13184"> @Codechef </a><br/>
          <img src={Codeforces}  alt="" className="logo_img" /> &nbsp;&nbsp;  <a href="https://codeforces.com/profile/25shrestha97"> @Codeforces </a><br/>
          <img src={Hackerearth}  alt="" className="logo_img" /> &nbsp;&nbsp; <a href="https://www.hackerearth.com/@25shrestha97"> @Hackerearth </a><br/>
          </div>
  </div>
    );
}

export default cpprofile;