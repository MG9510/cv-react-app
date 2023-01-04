import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills(props) {

    var colorRange = {
        "none": "danger",
        "low": "warning",
        "medium": "info",
        "high": "success"
    }

    var colors = {
        "none": 25,
        "low": 50,
        "medium": 75,
        "high": 100
    }

    return (
        <div className="block-elem h5 prog">
            <p style={{margin:"5px"}}>{props.name}</p>
            <ProgressBar variant={colorRange[props.value]} now={colors[props.value]} />
        </div>
    )

}

export default Skills