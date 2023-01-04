import React from "react";
import manipal from "./images/mit-manipal.jpg"
import nmims from "./images/nm-mumbai.jpg"

function Education(props) {
    return (
        <div id={props.id} style={{display:"none"}}>
            <div className="block-elem title-text" style={{border:"none"}}>
                <div className="row flex-elem" style={{padding:"7.5px", backgroundColor:"wheat", borderRadius:"15px"}}>
                    <div className="col-12 col-lg-6">
                        <div className="flex-elem">
                            <div>
                                <img src={nmims} className="edu-pic" alt=""></img>
                            </div>                        
                        </div>
                    </div>
                    <div className="col-12 col-lg-6" style={{padding:"5px"}}>
                        <div className="block-elem" style={{textAlign:"center"}}>
                            <hr></hr>  
                            <p className="h3">
                                NMIMS, Mumbai
                            </p>  
                            <a className="h4" href="https://sbm.nmims.edu/" target="_blank" rel="noopener noreferrer">
                                Visit Website
                            </a>
                            <hr></hr>                                  
                            <p className="h3">
                                MBA
                            </p>
                            <p className="h3" style={{fontWeight:"normal"}}>
                                Data Analytics & Marketing
                            </p>
                            <p className="h3" style={{fontWeight:"normal"}}>
                                CGPA: 2.9 / 4.0
                            </p>
                            <hr></hr>  
                            <p className="h3" style={{fontWeight:"normal"}}>
                                June 2018 - May 2020 
                            </p>
                            <hr></hr>  
                        </div>
                    </div> 
                </div>
            </div>
            <div className="block-elem title-text" style={{border:"none"}}>
                <div className="row flex-elem" style={{padding:"7.5px", backgroundColor:"wheat", borderRadius:"15px"}}>
                    <div className="col-12 col-lg-6">
                        <div className="flex-elem">
                            <div>
                                <img src={manipal} className="edu-pic" alt=""></img>
                            </div>                        
                        </div>
                    </div>
                    <div className="col-12 col-lg-6" style={{padding:"5px"}}>
                        <div className="block-elem" style={{textAlign:"center"}}>
                            <hr></hr>  
                            <p className="h3">
                                Manipal Institue of Technology
                            </p>
                            <a className="h4" href="https://manipal.edu/mit.html" target="_blank" rel="noopener noreferrer">
                                Visit Website
                            </a>
                            <hr></hr>                                  
                            <p className="h3" style={{fontWeight:"normal"}}>
                                Bachelors of Technology
                            </p>
                            <p className="h3" style={{fontWeight:"normal"}}>
                                Industrial & Production Engg.
                            </p>
                            <p className="h3" style={{fontWeight:"normal"}}>
                                CGPA: 8.3 / 10.0
                            </p>
                            <hr></hr>  
                            <p className="h3" style={{fontWeight:"normal"}}>
                                June 2011 - May 2015
                            </p>
                            <hr></hr>  
                        </div>
                    </div> 
                </div>
            </div>            
        </div>
    )
}

export default Education