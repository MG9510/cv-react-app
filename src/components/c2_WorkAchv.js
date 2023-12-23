import React from 'react';
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import SwiperNavBtn from './c5_Swiper_NavBtns';

import appr1 from '../assets/recognitions/SlackBot_Appr_1.png'
import appr2 from '../assets/recognitions/SlackBot_Appr_2.png'
import appr3 from '../assets/recognitions/SalesIntel_Appr_1.png'
import appr4 from '../assets/recognitions/SalesIntel_Appr_2.png'
import appr5 from '../assets/recognitions/Yield_Appr_1.png'
import appr6 from '../assets/recognitions/Training_Appr_1.png'
import appr7 from '../assets/recognitions/PeerRecog_Appr_1.png'
import appr8 from '../assets/recognitions/PeerRecog_Appr_2.png'
import appr9 from '../assets/recognitions/PeerRecog_Appr_3.png'
import appr10 from '../assets/recognitions/IBM_Entrepreneur_Award.png'
import appr11 from '../assets/recognitions/SAMMY_Award.png'
import appr12 from '../assets/recognitions/SAMMY_Award.jpg'

import '../css/App.css'
import 'swiper/css/bundle';

function WorkAchievements() {

  var windowWidth = window.screen.width;

  if (windowWidth >= 840) {
    var numSlidesPerView = 2
  }
  else {
    var numSlidesPerView = 1
  }
  
  return (
      <div className="accordion-item">
          <h3 className="accordion-header" id="achievement">
            <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAchievement" aria-expanded="true" aria-controls="collapseAchievement">
              <div className='flex-elem accordian-btn' style={{justifyContent:"start"}}>
                <div className='flex-elem' style={{marginLeft:"3%"}}>
                  <h3><i className="fa-solid fa-trophy"></i></h3>
                </div>
                <div className='flex-elem' style={{marginLeft:"3%"}}>
                  <h3>Work Achievements</h3>
                </div>
              </div>
            </button>
          </h3>
          <div id="collapseAchievement" className="accordion-collapse collapse" aria-labelledby="achievement" data-bs-parent="#mainContent">
            <div className="accordion-body">
              <div className='row g-0 accordian-block'>
                <div className='col-12 align-self-center'>                  
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={numSlidesPerView}
                    style={{backgroundColor:"lightgray"}}                      
                  >   
                    <SwiperNavBtn />                               
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>INDUSTRY AWARD - SAMMY</b></h5>
                      <h6 style={{textAlign:"center", textDecoration:"underline"}}>Sales Intelligence SlackBot</h6>
                      <div className='flex-elem'>
                        <img src={appr11} alt='' className='recognition'></img>
                      </div>
                      <div className='flex-elem'>
                        <img src={appr12} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>  
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>ENTREPRENEUR AWARD</b></h5>
                      <h6 style={{textAlign:"center", textDecoration:"underline"}}>Sales Intelligence SlackBot</h6>                      
                      <div className='flex-elem'>
                        <img src={appr10} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>                    
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>WORLDWIDE PROJECT LAUNCH</b></h5>
                      <h6 style={{textAlign:"center", textDecoration:"underline"}}>Sales Intelligence SlackBot</h6>
                      <div className='flex-elem'>
                        <img src={appr2} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>   
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>WORLDWIDE PROJECT LAUNCH</b></h5>
                      <h6 style={{textAlign:"center", textDecoration:"underline"}}>Sales Intelligence SlackBot</h6>
                      <div className='flex-elem'>
                        <img src={appr1} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>                                         
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>PROJECT CONTRIBUTION</b></h5>
                      <h6 style={{textAlign:"center", textDecoration:"underline"}}>Patterns of Interest</h6>
                      <div className='flex-elem'>
                        <img src={appr4} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>TEAM CONTRIBUTION</b></h5>
                      <h6 style={{textAlign:"center", textDecoration:"underline"}}>Patterns of Interest</h6>
                      <div className='flex-elem'>
                          <img src={appr3} alt='' className='recognition'></img>
                      </div>
                      <br></br>
                      <h5 style={{textAlign:"center"}}><b>TEAM CONTRIBUTION</b></h5>
                      <h6 style={{textAlign:"center", textDecoration:"underline"}}>Project Yield</h6>
                      <div className='flex-elem'>
                          <img src={appr5} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>TEAM TRAINING SESSION</b></h5>
                      <div className='flex-elem'>
                        <img src={appr6} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>TEAM CONTRIBUTION</b></h5>
                      <div className='flex-elem'>
                        <img src={appr8} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                      <h5 style={{textAlign:"center"}}><b>PEER RECOGNITION</b></h5>
                      <div className='flex-elem'>
                        <img src={appr7} alt='' className='recognition'></img>
                      </div>
                      <br></br>
                      <h5 style={{textAlign:"center"}}><b>TEAM CONTRIBUTION</b></h5>
                      <div className='flex-elem'>
                        <img src={appr9} alt='' className='recognition'></img>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
      </div>
  )

}

export default WorkAchievements;