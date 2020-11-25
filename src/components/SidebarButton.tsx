import React from 'react';
import "../css/SidebarButton.css";
import { Link } from 'react-router-dom';

//different versions of the button
const buttonStyles = new Set(["default", "clicked"]);

function SidebarButton(props: SBBProps) {
       
    //first check if the parsed button styles actually is possible
    const buttonStyle = buttonStyles.has(props.buttonStyle) ? props.buttonStyle : "default";
    console.log(`btn--content--${buttonStyle}`);

    return(
    <button className={`btn btn--${buttonStyle}`}>
        <Link to={props.item.path} className={`btn--content btn--content--${buttonStyle}`}>
            {props.children}
            {props.item.icon}
            {props.item.title}
        </Link>
    </button>
    )
}

export default SidebarButton;

interface SBBProps {
    item: {
        title: string;
        path: string;
        icon: JSX.Element;
    };
    buttonStyle: string;
    children?: any;
}