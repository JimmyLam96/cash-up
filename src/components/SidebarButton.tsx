import React from 'react';
import "../css/SidebarButton.css";

//different versions of the button
const buttonStyles = new Set(["btn--default", "btn--clicked"]);

function SidebarButton(props: SBBProps) {
       
    //first check if the parsed button styles actually is possible
    const buttonStyle = buttonStyles.has(props.buttonStyle) ? props.buttonStyle : "btn--default";

    return(
    <button className={`btn ${buttonStyle}`}>
        {props.children}
        {props.name}
        </button>
    )
}

export default SidebarButton;

interface SBBProps {
    name: string;
    buttonStyle: string;
    children?: any;
}