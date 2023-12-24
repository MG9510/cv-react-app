import React from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import SwiperNavBtn from './c5_Swiper_NavBtns';
import coursera from '../assets/images/coursera.png'
import caltech from '../assets/recognitions/PG_DS.png'

import '../css/App.css';
import 'swiper/css/bundle';

function Certifications() {

    return (
        <div className="accordion-item">
            <h3 className="accordion-header" id="courses">
              <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCourses" aria-expanded="true" aria-controls="collapseCourses">
                <div className='flex-elem accordian-btn' style={{justifyContent:"start"}}>
                  <div className='flex-elem' style={{marginLeft:"3%"}}>
                    <h3><i className="fa-solid fa-certificate"></i></h3>
                  </div>
                  <div className='flex-elem' style={{marginLeft:"3%"}}>
                    <h3>Certifications</h3>
                  </div>
                </div>
              </button>
            </h3>
            <div id="collapseCourses" className="accordion-collapse collapse" aria-labelledby="courses" data-bs-parent="#mainContent">
              <div className="accordion-body">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  style={{backgroundColor:"lightgray", textAlign:"center"}}                      
                >
                  <SwiperNavBtn /> 
                  <SwiperSlide>
                    <div className='row g-0 slide'>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <div className='flex-elem'>
                          <img src={caltech} alt='' className='certi'></img>
                        </div>
                      </div>
                      <div className='col-12 col-sm-8 align-self-center'>
                        <br></br>
                        <div className='data-block' style={{marginLeft:"1%"}}>
                          <div className='header'>
                            <h4 className='header-txt'><b>CALTECH | Post Graduate Program</b></h4>
                            <hr></hr>
                            <h5 className='header-txt'>Jun 2023 - Dec 2023</h5>
                            <br></br>
                            <h5 className='header-txt'>Function - Data Science</h5>
                            <hr></hr>
                            <a href='https://success.simplilearn.com/ae0bed00-d5a8-409f-b0d1-0e15ce8f0b13' target='_'>
                              <h5 style={{textDecoration:"underline", color:"blue"}}>View certificate</h5>
                            </a>              
                          </div>
                        </div> 
                        <br></br> 
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='row g-0 slide'>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <div className='flex-elem'>
                          <img src={coursera} alt='' className='certi'></img>
                        </div>
                      </div>
                      <div className='col-12 col-sm-8 align-self-center'>
                        <br></br>
                        <div className='data-block' style={{marginLeft:"1%"}}>
                          <div className='header'>
                            <h4 className='header-txt'><b>Neural Networks & Deep Learning</b></h4>
                            <hr></hr>
                            <h5 className='header-txt'>Dec 2020</h5>
                            <br></br>
                            <h5 className='header-txt'>Function - Data Science</h5>
                            <hr></hr>
                            <a href='https://www.coursera.org/account/accomplishments/verify/47AKM9THBYNE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' target='_'>
                              <h5 style={{textDecoration:"underline", color:"blue"}}>View certificate</h5>
                            </a>              
                          </div>
                        </div> 
                        <br></br> 
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                    <div className='row g-0 slide'>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <div className='flex-elem'>
                          <img src={coursera} alt='' className='certi'></img>
                        </div>
                      </div>
                      <div className='col-12 col-sm-8 align-self-center'>
                        <br></br>
                        <div className='data-block' style={{marginLeft:"1%"}}>
                          <div className='header'>
                            <h4 className='header-txt'><b>Python for Data Science & AI</b></h4>
                            <hr></hr>
                            <h5 className='header-txt'>July 2020</h5>
                            <br></br>
                            <h5 className='header-txt'>Function - Data Science</h5>
                            <hr></hr>
                            <a href='https://www.coursera.org/account/accomplishments/verify/REJADYBRGD4D?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' target='_'>
                              <h5 style={{textDecoration:"underline", color:"blue"}}>View certificate</h5>
                            </a>               
                          </div>
                        </div> 
                        <br></br> 
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                    <div className='row g-0 slide'>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <div className='flex-elem'>
                          <img src={coursera} alt='' className='certi'></img>
                        </div>
                      </div>
                      <div className='col-12 col-sm-8 align-self-center'>
                        <br></br>
                        <div className='data-block' style={{marginLeft:"1%"}}>
                          <div className='header'>
                            <h4 className='header-txt'><b>Data Analysis with Python</b></h4>
                            <hr></hr>
                            <h5 className='header-txt'>Dec 2019</h5>
                            <br></br>
                            <h5 className='header-txt'>Function - Data Analytics</h5>
                            <hr></hr>
                            <a href='https://www.coursera.org/account/accomplishments/verify/XVBHNTALFV2U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' target='_'>
                              <h5 style={{textDecoration:"underline", color:"blue"}}>View certificate</h5>
                            </a>                 
                          </div>
                        </div> 
                        <br></br> 
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                    <div className='row g-0 slide'>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <div className='flex-elem'>
                          <img src={coursera} alt='' className='certi'></img>
                        </div>
                      </div>
                      <div className='col-12 col-sm-8 align-self-center'>
                        <br></br>
                        <div className='data-block' style={{marginLeft:"1%"}}>
                          <div className='header'>
                            <h4 className='header-txt'><b>Data Collection & Processing with Python</b></h4>
                            <hr></hr>
                            <h5 className='header-txt'>Oct 2019</h5>
                            <br></br>
                            <h5 className='header-txt'>Function - Data Analytics</h5>
                            <hr></hr>
                            <a href='https://www.coursera.org/account/accomplishments/verify/H94TFFY356CF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' target='_'>
                              <h5 style={{textDecoration:"underline", color:"blue"}}>View certificate</h5>
                            </a>                  
                          </div>
                        </div> 
                        <br></br> 
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                    <div className='row g-0 slide'>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <div className='flex-elem'>
                          <img src={coursera} alt='' className='certi'></img>
                        </div>
                      </div>
                      <div className='col-12 col-sm-8 align-self-center'>
                        <br></br>
                        <div className='data-block' style={{marginLeft:"1%"}}>
                          <div className='header'>
                            <h4 className='header-txt'><b>Python Programming Essentials</b></h4>
                            <hr></hr>
                            <h5 className='header-txt'>Oct 2019</h5>
                            <br></br>
                            <h5 className='header-txt'>Function - Programming</h5>
                            <hr></hr>
                            <a href='https://www.coursera.org/account/accomplishments/verify/RARGV6PQEN2K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' target='_'>
                              <h5 style={{textDecoration:"underline", color:"blue"}}>View certificate</h5>
                            </a>                  
                          </div>
                        </div> 
                        <br></br> 
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide >
                    <div className='row g-0 slide'>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <div className='flex-elem'>
                          <img src={coursera} alt='' className='certi'></img>
                        </div>
                      </div>
                      <div className='col-12 col-sm-8 align-self-center'>
                        <br></br>
                        <div className='data-block' style={{marginLeft:"1%"}}>
                          <div className='header'>
                            <h4 className='header-txt'><b>Excel Skills for Business</b></h4>
                            <hr></hr>
                            <h5 className='header-txt'>April 2019</h5>
                            <br></br>
                            <h5 className='header-txt'>Function - Data Analytics</h5>
                            <hr></hr>
                            <a href='https://www.coursera.org/account/accomplishments/verify/FPRDSQYHWCZH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' target='_'>
                              <h5 style={{textDecoration:"underline", color:"blue"}}>View certificate</h5>
                            </a>
                          </div>
                        </div> 
                        <br></br> 
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>                
              </div>
            </div>
        </div>
    )

}

export default Certifications;