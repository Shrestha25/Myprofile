import React, { Component } from "react";
import "./App.css";
import Toolbar from "./Components/Toolbar/Toolbar";
import Section from "./Components/Section";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";

class App extends Component {
  state ={
    sideDraweropen: false
  }
  drawerToggleClickHandler =() => {
    this.setState((prevState)=>{
      return {sideDraweropen: !prevState.sideDraweropen};
    });
  };

  backdropClickHandler =()=>{
    this.setState({
      sideDraweropen: false
    });
  };

  render() {
    let backdrop;

    if(this.state.sideDraweropen){
      backdrop =<Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Toolbar drawer={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDraweropen}/>
        {backdrop}
        <main style={{marginTop: '70px'}}>
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
        </main>
      </div>
    );
  }
}

export default App;
