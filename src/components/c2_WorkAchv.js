import React from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import appr1 from '../assets/recognitions/SlackBot_Appr_1.png'
import appr2 from '../assets/recognitions/SlackBot_Appr_2.png'
import appr3 from '../assets/recognitions/SalesIntel_Appr_1.png'
import appr4 from '../assets/recognitions/SalesIntel_Appr_2.png'
import appr5 from '../assets/recognitions/Yield_Appr_1.png'
import appr6 from '../assets/recognitions/Training_Appr_1.png'
import appr7 from '../assets/recognitions/PeerRecog_Appr_1.png'
import appr8 from '../assets/recognitions/PeerRecog_Appr_2.png'
import appr9 from '../assets/recognitions/PeerRecog_Appr_3.png'

import '../css/App.css'
import 'swiper/css/bundle';

function WorkAchievements() {

    return (
        <div class="accordion-item">
            <h3 class="accordion-header" id="achievement">
              <button class="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAchievement" aria-expanded="true" aria-controls="collapseAchievement">
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
            <div id="collapseAchievement" class="accordion-collapse collapse" aria-labelledby="achievement" data-bs-parent="#mainContent">
              <div class="accordion-body">
                <div className='row g-0 accordian-block'>
                  <div className='col-12 align-self-center'>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true}}
                      navigation={{ clickable: true }}
                      style={{backgroundColor:"lightgray"}}                      
                    >
                      <SwiperSlide className="slide">
                        <div className='flex-elem'>
                          <img src={appr1} alt='' className='recognition' style={{margin:"auto"}}></img>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="slide">
                        <div className='flex-elem'>
                          <img src={appr2} alt='' className='recognition'></img>
                        </div>
                        <br></br>
                      </SwiperSlide>                      
                      <SwiperSlide className="slide">
                        <div className='flex-elem'>
                          <img src={appr4} alt='' className='recognition'></img>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="slide">
                        <div className='flex-elem'>
                            <img src={appr3} alt='' className='recognition'></img>
                        </div>
                        <br></br>
                        <div className='flex-elem'>
                            <img src={appr5} alt='' className='recognition'></img>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="slide">
                        <div className='flex-elem'>
                          <img src={appr6} alt='' className='recognition'></img>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="slide">
                        <div className='flex-elem'>
                          <img src={appr8} alt='' className='recognition'></img>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="slide">
                        <div className='flex-elem'>
                          <img src={appr7} alt='' className='recognition'></img>
                        </div>
                        <br></br>
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