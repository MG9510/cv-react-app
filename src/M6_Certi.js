import React from "react";
import coursera from "./images/coursera.png"

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Certi(props) {
    return (
        <div id={props.id} style={{display:"none"}}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="swiper-container"
                >
                {/* Excel */}
                <SwiperSlide style={{padding:"10px"}}>
                    <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"none"}}>
                        <div className="flex-elem">
                            <div>
                                <img src={coursera} className="profile-pic" alt=""></img>
                            </div>                        
                        </div>
                        <hr></hr>
                        <div className="flex-elem">
                            <p className="h3">Excel Skills for Business</p>
                        </div>
                        <div className="flex-elem">
                            <p className="h3" style={{fontWeight:"normal"}}>April 2018</p>
                        </div>
                        <div className="flex-elem">
                            <a className="h4" href="https://www.coursera.org/account/accomplishments/verify/FPRDSQYHWCZH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">
                                View certificate
                            </a>
                        </div> 
                        <hr></hr>                           
                    </div>
                </SwiperSlide>
                {/* Python Basics */}
                <SwiperSlide style={{padding:"10px"}}>
                    <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"none"}}>
                        <div className="flex-elem">
                            <div>
                                <img src={coursera} className="profile-pic" alt=""></img>
                            </div>                        
                        </div>
                        <hr></hr>
                        <div className="flex-elem">
                            <p className="h3">Python Programming Essentials</p>
                        </div>
                        <div className="flex-elem">
                            <p className="h3" style={{fontWeight:"normal"}}>Oct 2019</p>
                        </div>
                        <div className="flex-elem">
                            <a className="h4" href="https://www.coursera.org/account/accomplishments/verify/RARGV6PQEN2K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">
                                View certificate
                            </a>
                        </div> 
                        <hr></hr>                           
                    </div>
                </SwiperSlide>
                {/* Python Data Collection */}
                <SwiperSlide style={{padding:"10px"}}>
                    <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"none"}}>
                        <div className="flex-elem">
                            <div>
                                <img src={coursera} className="profile-pic" alt=""></img>
                            </div>                        
                        </div>
                        <hr></hr>
                        <div className="flex-elem">
                            <p className="h3">Data Collection & Processing Python</p>
                        </div>
                        <div className="flex-elem">
                            <p className="h3" style={{fontWeight:"normal"}}>Oct 2019</p>
                        </div>
                        <div className="flex-elem">
                            <a className="h4" href="https://www.coursera.org/account/accomplishments/verify/H94TFFY356CF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">
                                View certificate
                            </a>
                        </div> 
                        <hr></hr>                           
                    </div>
                </SwiperSlide>
                {/* Python Data Analysis */}
                <SwiperSlide style={{padding:"10px"}}>
                    <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"none"}}>
                        <div className="flex-elem">
                            <div>
                                <img src={coursera} className="profile-pic" alt=""></img>
                            </div>                        
                        </div>
                        <hr></hr>
                        <div className="flex-elem">
                            <p className="h3">Data Analysis Python</p>
                        </div>
                        <div className="flex-elem">
                            <p className="h3" style={{fontWeight:"normal"}}>Dec 2019</p>
                        </div>
                        <div className="flex-elem">
                            <a className="h4" href="https://www.coursera.org/account/accomplishments/verify/XVBHNTALFV2U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">
                                View certificate
                            </a>
                        </div> 
                        <hr></hr>                           
                    </div>
                </SwiperSlide>
                {/* Python Data Science & AI */}
                <SwiperSlide style={{padding:"10px"}}>
                    <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"none"}}>
                        <div className="flex-elem">
                            <div>
                                <img src={coursera} className="profile-pic" alt=""></img>
                            </div>                        
                        </div>
                        <hr></hr>
                        <div className="flex-elem">
                            <p className="h3">Python for Data Science & AI</p>
                        </div>
                        <div className="flex-elem">
                            <p className="h3" style={{fontWeight:"normal"}}>July 2020</p>
                        </div>
                        <div className="flex-elem">
                            <a className="h4" href="https://www.coursera.org/account/accomplishments/verify/REJADYBRGD4D?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">
                                View certificate
                            </a>
                        </div> 
                        <hr></hr>                           
                    </div>
                </SwiperSlide>
                {/* Deep Learning*/}
                <SwiperSlide style={{padding:"10px"}}>
                    <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"none"}}>
                        <div className="flex-elem">
                            <div>
                                <img src={coursera} className="profile-pic" alt=""></img>
                            </div>                        
                        </div>
                        <hr></hr>
                        <div className="flex-elem">
                            <p className="h3">Neural Networks & Deep Learning</p>
                        </div>
                        <div className="flex-elem">
                            <p className="h3" style={{fontWeight:"normal"}}>Dec 2020</p>
                        </div>
                        <div className="flex-elem">
                            <a className="h4" href="https://www.coursera.org/account/accomplishments/verify/47AKM9THBYNE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">
                                View certificate
                            </a>
                        </div> 
                        <hr></hr>                           
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Certi