import React from "react";

function PersonalInfo(props) {

    return (
        <div className={`icon ${props.iconName} h4`}>
            <a href={props.href} target="_blank" rel="noopener noreferrer" className="block-elem" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <i className={`${props.iconClass} h3`}>{props.subtext}</i>
                <p>{props.text}</p>
            </a>            
        </div>
    )

}

export default PersonalInfo