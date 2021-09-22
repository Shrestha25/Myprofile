import React from 'react';
import './ToggleButton.css';

const toggleButton = props =>(
    <button className="toggle_button" onClick={props.click}>
        <div className="button_line" />
        <div className="button_line" />
        <div className="button_line" />
    </button>
);

export default toggleButton;