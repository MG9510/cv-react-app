import React from 'react';

import ProfilePic from '../assets/images/Profile_Pic.jpg'
import cvPDF from '../assets/CV.pdf'
import '../css/App.css'

function Summary() {

    return (
        <div className='row g-0 summary-content'>
            <div className='col-3 col-md-2 col-lg-1 align-self-center'>
                <div className='flex-elem'>
                    <img src={ProfilePic} alt='' className='profile-pic'></img>
                </div>      
            </div>
            <div className='col-9 col-md-10 col-lg-11 align-self-center'>
                <div className='data-block' style={{marginLeft:"1%"}}>
                    <div className='header'>
                        <h4 className='header-txt'><b>MANU GUPTA</b></h4>
                        <h5 className='header-txt' style={{fontStyle:"italic"}}>Data Science & Analytics</h5>
                    </div>
                </div>             
            </div>
            <div className='col-12 col-md-12 align-self-center'>
                <div className='data-block' style={{marginTop:"1%"}}>
                    <p>
                        Proficient and results-oriented Data Scientist with a solid foundation in statistical modeling, 
                        machine learning, and data analysis. Possessing advanced proficiency in SQL, Python & React, 
                        I bring a proven track record of extracting actionable insights from complex datasets. 
                        My expertise extends to data preprocessing, feature engineering, and the development of predictive models 
                        for various business applications.
                    </p>
                    <p>
                        I aim to leverage the scale of enterprise data with the powers of modern computing to revise 
                        understanding of the business environment and redesign processes with AI powered insights. 
                    </p>        
                </div>             
            </div>
            <div className='col-12 col-md-12 align-self-center'>
                <div className='row g-0'>
                    <div className='col-6 col-sm-3'>
                        <button className='block-elem info-btn'>
                            <h4 style={{margin:"auto"}}><i className="fa-solid fa-map-location-dot"></i></h4>
                            <p style={{margin:"auto"}}>Bangalore, India</p>
                        </button>
                    </div>                    
                    <div className='col-6 col-sm-3'>
                        <a href='https://www.linkedin.com/in/manu-gupta-007/' target='_' className='block-elem info-btn'>
                            <h4 style={{margin:"auto"}}><i className="fa-brands fa-linkedin"></i></h4>
                            <p style={{margin:"auto"}}>manu-gupta-007</p>
                        </a> 
                    </div>
                    <div className='col-6 col-sm-3'>
                        <a href='https://github.com/MG9510' target='_' className='block-elem info-btn'>
                            <h4 style={{margin:"auto"}}><i className="fa-brands fa-github"></i></h4>
                            <p style={{margin:"auto"}}>MG9510</p>
                        </a>
                    </div>
                    <div className='col-6 col-sm-3'>
                        <a href={cvPDF} target='_' className='block-elem info-btn'>
                            <h4 style={{margin:"auto"}}><i className="fa-solid fa-file-pdf"></i></h4>
                            <p style={{margin:"auto"}}>Download CV</p>
                        </a>
                    </div>       
                </div> 
            </div>
        </div>
    )

}

export default Summary;