import React from "react";
import './Toolbar.css';
import logo from "../../logo.png";
import { Link} from "react-scroll";
import '../SideDrawer/Togglebutton';
import ToggleButton from "../SideDrawer/Togglebutton";

const navbar = props =>(
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle"> <ToggleButton click={props.drawer} /></div>
                <div className="toolbar_logo"> <img src={logo} className="nav-logo" alt="Logo"/> </div>
                <div className="spacer"/>
                <div className="toolbar_navigation-items">
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
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Experience
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
                </div>
            </nav>
        </header>
);

export default navbar;