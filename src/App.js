import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="altbody">
        <Section
          title="About ME"
          dark={true}
          id="section1"
        />
        <br/>
        <Section
          title="Projects"
          dark={false}
          id="section2"
        />
        <br/>
        {/* <Section
          title="Education"
          dark={true}
          id="section3"
        />*/}
        <Section
          title="CP Profile"
          dark={true}
          id="section4"
        />
        <br/>
        <Section
          title="Social Services"
          dark={false}
          id="section5"
        />
        <br/>
        <Section
          title="Contact Me"
          dark={true}
          id="section6"
        />
        </div>
      </div>
    );
  }
}

export default App;
