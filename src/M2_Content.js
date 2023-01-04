import React from "react";
import profilePic from './images/Profile_Pic.jpg'
import pdf from "./images/CV.pdf"

import PersonalInfo from "./C1_PersInfo";
import Skills from "./C2_Skills";
import DescrHeaders from "./C3_Descr_Headers";

function Content() {

    return (
        <div className="row g-0">
            {/* SIDEBAR */}
            <div className="col-4 col-md-3 sideBar">
                {/* PROFILE PIC | NAME | JOB ROLE */}
                <div className="block-elem">
                    <div className="flex-elem">
                        <img className="profile-pic" src={profilePic} alt=""></img>
                    </div>   
                    <div className="block-elem">
                        <p className="h3" style={{textAlign:"center"}}>Manu Gupta</p>
                        <p className="h4" style={{textAlign:"center"}}>Data Science & Analytics</p>
                    </div>                   
                </div> 
                {/* PERSONAL INFO */}
                <div className="block-elem">
                    <div className="info-header">
                        <p className="h4">Personal Info</p>
                    </div>
                    <PersonalInfo iconName="loc-icon" iconClass="fas fa-map-marked-alt" text="Bangalore"/>
                    <PersonalInfo iconName="workex-icon" iconClass="fa-solid fa-5" text="Work Exp." subtext="yrs"/>
                    <PersonalInfo iconName="linkedin-icon" iconClass="fab fa-linkedin" text="LinkedIn" href="https://www.linkedin.com/in/manu-gupta-007/" />
                    <PersonalInfo iconName="git-icon" iconClass="fab fa-github" text="GitHub" href="https://github.com/MG9510" />
                    <PersonalInfo iconName="pdf-icon" iconClass="fa-solid fa-file-pdf" text="Download" href={pdf} />              
                </div>
                {/* SKILLS */}
                <div className="block-elem">
                    <div className="info-header">
                        <p className="h4">Skills</p>
                    </div>
                    <Skills name="ETL Processes" value="medium" />                     
                    <Skills name="Data Analysis" value="high" /> 
                    <Skills name="Machine Learning" value="medium" /> 
                    <Skills name="Deep Learning" value="low" />
                    <Skills name="Data Visualization" value="high" /> 
                    <Skills name="Web Scrapping" value="high" /> 
                    <Skills name="Automation" value="medium" /> 
                    <Skills name="DevOps" value="low" />    
                </div>
                {/* TOOLS & SOFTWARES */}
                <div className="block-elem">
                    <div className="info-header">
                        <p className="h4">Tools & Software</p>
                    </div>
                    <Skills name="SQL" value="medium" />                  
                    <Skills name="Python" value="high" /> 
                    <Skills name="Scikit Learn" value="medium" /> 
                    <Skills name="Tensor Flow" value="low" />                        
                    <Skills name="HTML" value="high" />
                    <Skills name="CSS" value="high" /> 
                    <Skills name="JavaScript" value="low" />
                    <Skills name="React" value="low" />
                    <Skills name="Selenium" value="high" />
                    <Skills name="Docker" value="low" />  
                    <Skills name="Kubernetes" value="medium" />            
                </div>
            </div>
            {/* DESCRIPTION */}
            <div className="col-8 col-md-9 contentBar">
                {/* CAREER GOALS */}
                <hr></hr>
                <div className="block-elem">
                    <DescrHeaders id="careerGoals" iconClass="fas fa-crosshairs" headerText="CAREER GOALS" />
                </div>
                <hr></hr>
                {/* WORK EXP. */}
                <div className="block-elem">
                    <DescrHeaders id="workExp" iconClass="fas fa-briefcase" headerText="WORK EXP." />  
                </div>
                <hr></hr>
                {/* EDUCATION */}
                <div className="block-elem">
                    <DescrHeaders id="education" iconClass="fas fa-graduation-cap" headerText="EDUCATION" />
                </div>
                <hr></hr>
                {/* CERTIFICATIONS & COURSES */}
                <div className="block-elem">
                    <DescrHeaders id="certi" iconClass="fa-solid fa-scroll" headerText="CERTIFICATIONS" />
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default Content