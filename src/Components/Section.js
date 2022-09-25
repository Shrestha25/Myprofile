import React from "react";
import Aboutme from "../parts/aboutme";
import Cpprofile from "../parts/cpprofile";
import Project from "../parts/project";
import Socialservice from "../parts/socialservice";
import Experience from "../parts/experience";
import Contactme from "../parts/contactme";
const Section =({ title, dark, id }) =>{
  if(id==="section1"){
    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <Aboutme/>
        </div>
      </div>
    );
  }
  else if(id==="section2"){
    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <Project/>
        </div>
      </div>
    );
  }
  else if(id==="section3"){
    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <Experience/>
        </div>
      </div>
    );
  }
  else if(id==="section4"){
    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <Cpprofile/>
        </div>
      </div>
    );
  }
  else if(id==="section6"){
    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <Contactme/>
        </div>
      </div>
    );
  }
  else return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <Socialservice/>
      </div>
    </div>
  );
}

export default Section;
