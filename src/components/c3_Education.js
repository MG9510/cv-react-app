import React from 'react';

import nmims from '../assets/images/nm-mumbai.jpg'
import mit from '../assets/images/mit-manipal.jpg'

import 'swiper/css/bundle';
import '../css/App.css';

function Education() {

    return (
        <div className="accordion-item">
            <h3 className="accordion-header" id="education">
              <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEducation" aria-expanded="true" aria-controls="collapseEducation">
                <div className='flex-elem accordian-btn' style={{justifyContent:"start"}}>
                  <div className='flex-elem' style={{marginLeft:"3%"}}>
                    <h3><i className="fa-solid fa-graduation-cap"></i></h3>
                  </div>
                  <div className='flex-elem' style={{marginLeft:"3%"}}>
                    <h3>Education</h3>
                  </div>
                </div>
              </button>
            </h3>
            <div id="collapseEducation" className="accordion-collapse collapse" aria-labelledby="education" data-bs-parent="#mainContent">
              <div className="accordion-body">
                <div className='row g-0 slide'>
                  <div className='col-12 col-sm-5 align-self-center'>
                    <div className='flex-elem'>
                      <img src={nmims} alt='' className='education'></img>
                    </div>
                  </div>
                  <div className='col-12 col-sm-7 align-self-center'>
                    <div className='data-block' style={{textAlign:"center"}}>
                      <div className='header'>
                        <h4 className='header-txt'><b>NMIMS, Mumbai</b></h4>
                        <hr></hr>
                        <h5 className='header-txt'>Masters of Business Administration - MBA</h5>
                        <br></br>
                        <h5 className='header-txt'>Analytics & Marketing</h5>
                        <br></br>
                        <h5 className='header-txt'>CGPA - 2.9 / 4.0</h5>        
                      </div>
                    </div> 
                  </div>
                </div>
                <br></br>
                <div className='row g-0 slide'>
                  <div className='col-12 col-sm-5 align-self-center'>
                    <div className='flex-elem'>
                      <img src={mit} alt='' className='education'></img>
                    </div>
                  </div>
                  <div className='col-12 col-sm-7 align-self-center'>
                    <div className='data-block' style={{textAlign:"center"}}>
                      <div className='header'>
                        <h4 className='header-txt'><b>Manipal Institute of Technology</b></h4>
                        <hr></hr>
                        <h5 className='header-txt'>Bachelore of Technology</h5>
                        <br></br>
                        <h5 className='header-txt'>Industrial & Production Engg.</h5>
                        <br></br>
                        <h5 className='header-txt'>CGPA - 8.3 / 10.0</h5>         
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>             
              </div>
            </div>
        </div>
    )
}

export default Education;