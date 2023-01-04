import React from "react";

import CareerGoals from "./M3_CareerGoals";
import WorkExp from "./M4_WorkExp";
import Education from "./M5_Education";
import Certi from "./M6_Certi";

function DescrHeaders(props) {

    function hideBlock(elemID) {

        const contentID = `${elemID}-content`
        const btnArrow = `${elemID}-arrow`

        const contentBlock = document.getElementById(contentID)
        const btnIcon = document.getElementById(btnArrow)
        
        if (contentBlock.style.display === "none") {
            contentBlock.style.display = "block"
        }
        else {
            contentBlock.style.display = "none"
        }

    }

    const btnID = props.id
    const btnArrow = `${btnID}-arrow`

    if (btnID ==="careerGoals") {
        var elem = <CareerGoals id="careerGoals-content"/>;
    }
    else if (btnID ==="workExp") {
        var elem = <WorkExp id="workExp-content"/>;
    }
    else if (btnID ==="education") {
        var elem = <Education id="education-content"/>;        
    }
    else if (btnID ==="certi") {
        var elem = <Certi id="certi-content"/>;        
    }

    return (
        <div className="block-elem">
            <div id={btnID} className="title-header" onClick={() => hideBlock(btnID)}>
                <div className="row">
                    <div className="col-1">
                        <div style={{display:"flex", alignItems:"center", justifyContent:"start"}}>
                            <div>
                                <i className={`h1 ${props.iconClass}`}></i>
                            </div>                        
                        </div>
                    </div>
                    <div className="col-9">
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"3px"}}>
                            <div>
                                <p className="h1">{props.headerText}</p>
                            </div>                        
                        </div>
                    </div>
                    <div className="col-1">
                        <div style={{display:"flex", alignItems:"center", justifyContent:"end"}}>
                            <div>
                                <i id={btnArrow} className="h2 fas fa-chevron-circle-down"></i>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <div style={{transition:"0.3s"}}>
                {elem}
            </div>
        </div>
    )

}

export default DescrHeaders