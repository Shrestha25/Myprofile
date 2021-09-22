import React from 'react';
import logo from "../../logo.png";
import "./Sidedrawer.css";
import { Link} from "react-scroll";

const sideDrawer = props => {
       let drawerClasses='side_drawer';
       if(props.show){
           drawerClasses='side_drawer open';
       }
    return(
        <nav className={drawerClasses}>
            <div> <img src={logo} className="drawer_logo" alt="Logo"/> </div>
            <ul>
            <li>
                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    About ME
                </Link>
                </li>
                <li>
                <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Projects
                </Link>
                </li>
                {/* <li>
                <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Education
                </Link>
                </li> */}
                <li>
                <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    CP Profile
                </Link>
                </li>
                <li>
                <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Social Services
                </Link>
                </li>
                <li>
                <Link
                    activeClass="active"
                    to="section6"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Contact Me
                </Link>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;