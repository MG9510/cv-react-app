import React from "react";
import ibmIMG from './images/ibm.png'
import tataIMG from './images/tata.jpg'

import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function WorkExp(props) {
    return (
        <div id={props.id} style={{display:"none"}}>
            {/* IBM */}
            <div className="block-elem title-text">
                <div className="row flex-elem" style={{padding:"7.5px", backgroundColor:"lightgrey", borderRadius:"15px"}}>
                    <div className="col-5 col-sm-6">
                        <div className="flex-elem">
                            <div>
                                <img src={ibmIMG} className="profile-pic" alt=""></img>
                            </div>                        
                        </div>
                    </div>
                    <div className="col-7 col-sm-6" style={{padding:"5px"}}>
                        <div className="flex-elem">
                            <div className="block-elem" style={{textAlign:"center"}}>
                                <p className="h3">
                                    IBM
                                </p>
                                <hr></hr>
                                <p className="h4">
                                    Data Science & Analytics
                                </p>
                                <p className="h4">
                                    Oct 2020 - Present
                                </p>
                                <p className="h4">
                                    2 years 2 months
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="swiper-container"
                    >
                    {/* Patterns of Interest */}
                    <SwiperSlide style={{padding:"10px"}}>
                        <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"2px solid wheat"}}>
                            <div className="row" style={{textAlign:"center"}}>
                                <div className="col-12 col-sm-5">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}>
                                            <b>Project Name: </b>
                                        </p>
                                        <p>Patterns of Interest (IBM Worldwide)</p>                                    
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-4">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Project Goal: </b></p>
                                        <p>Lead Creation (Open Pipeline)</p>  
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-3">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Revenue Potential: </b></p>
                                        <p>~ 150 $M (quarterly)</p>  
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="block-elem h5">
                                <p className="h4" style={{textDecoration:"underline"}}><b>Project Brief</b></p>
                                <p>
                                    Patterns of Interest is an analytical project which aggregates 
                                    individual level interactions such as visits, registration, events
                                    & trials; along with intent level data such as competitive search 
                                    & product reviews at an <b> Account, Market and Product level.</b> 
                                </p>
                                <br></br>
                                <p>
                                    This project has been reinforced using Data Science which helps 
                                    us identify the factors that are important in lead creation for a
                                    particular account & product category. 
                                </p>
                                <br></br>
                                <p>
                                    The <b>accounts with highest likelihood of conversion </b> are <b>flagged for 
                                    Sales in IBM Sales Cloud</b> on a weekly basis so as convert those prospects
                                    into leads
                                </p>
                                <br></br>
                                <p>
                                    Three different types of supervised machine learning models were 
                                    considered for this project; Random Forest, KNN & Logistic Regression
                                    out of which <b>Random Forest model</b> was selected due to superior performance, 
                                    interpretable results and scalability. 
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Project Yield */}
                    <SwiperSlide style={{padding:"10px"}}>
                        <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"2px solid wheat"}}>
                            <div className="row" style={{textAlign:"center"}}>
                                <div className="col-12 col-sm-5">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Project Name: </b></p>
                                        <p>Project Yield (Partner Ecosystem)</p>                                    
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-4">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Project Goal: </b></p>
                                        <p>Lead Conversion (Won Pipeline)</p>  
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-3">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Revenue Potential: </b></p>
                                        <p>~ 25 $M (quarterly)</p>  
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="block-elem h5">
                                <p className="h4" style={{textDecoration:"underline"}}>
                                    <b>Project Brief</b>
                                </p>
                                <p>
                                    Project Yield was a marketing initiative to assit <b> IBM Business 
                                    Partners</b> in identifying leads most likely to convert based on 
                                    historical trends
                                </p>
                                <br></br>
                                <p>
                                    Business partner performance for the past 12 quarters across product 
                                    categories, sales channels, Industy and more was used to train & develop 
                                    a model which could identify these high qulaity leads. 
                                </p>
                                <br></br>
                                <p>
                                    These insights would help business partners prioritize business action towards 
                                    these leads. It would also enable IBM to assist these partners with 
                                    <b> Co-Marketing funding</b> to improve pipeline yield.
                                </p>
                                <br></br>
                                <p>
                                    Given the sheer volume and dimensionality of the dataset, a Random Forest model was
                                    used as a classifier to predict the probability of conversion.
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Audience Database */}
                    <SwiperSlide style={{padding:"10px"}}>
                        <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"2px solid wheat"}}>
                            <div className="row" style={{textAlign:"center"}}>
                                <div className="col-12 col-sm-5">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Project Name: </b></p>
                                        <p>Audience Insgihts (IBM Z LinuxOne)</p>                                    
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-4">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Project Goal: </b></p>
                                        <p>Audience Database curation</p>  
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-3">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Revenue Potential: </b></p>
                                        <p> - </p>  
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="block-elem h5">
                                <p className="h4" style={{textDecoration:"underline"}}>
                                    <b>Project Brief</b>
                                </p>
                                <p>
                                    The purpose of this project was to create a <b> database of prospective clients  </b>
                                    belonging to the Consumer Tech industry for the <b>IBM Z LinuxOne product </b>  
                                    marketing team.
                                </p>
                                <br></br>
                                <p>
                                    Audience data would then be used by the product marketing team for audience analytics 
                                    & building a marketing strategy for upcoming product launch.
                                </p>
                                <br></br>
                                <p>
                                Deployed a <b> web scrapper </b> built in Python using the <b> web testing module Selenium </b> 
                                that extracts information such as Company Name, Industry & Mkt. Cap which is mapped to IBM 
                                Business units.
                                </p>
                                <br></br>
                                <p>
                                Successfully extracted information for <b>~1,700 prospective clients</b> at a worldwide level 
                                from a list of 50 urls with a code execution time of 15mins.
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Pipeline Reporting */}
                    <SwiperSlide style={{padding:"10px"}} >
                        <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"2px solid wheat"}}>
                            <div className="row" style={{textAlign:"center"}}>
                                <div className="col-12 col-sm-5">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Project Name: </b></p>
                                        <p>Marketing Pipeline analytics</p>                                    
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-4">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Project Goal: </b></p>
                                        <p>Reporting</p>  
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-3">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Revenue Potential: </b></p>
                                        <p> - </p>  
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="block-elem h5">
                                <p className="h4" style={{textDecoration:"underline"}}>
                                    <b>Project Brief</b>
                                </p>
                                <p>
                                    Publish weekly/monthly <b>marketing pipeline metrics</b> and conduct deep dives to identify gaps 
                                    in pipeline generation and/or progression
                                </p>
                                <br></br>
                                <p>
                                    Publish and analyse QtQ and YtY performance for <b>IBM Partner Ecosystem</b>  
                                </p>
                                <br></br>
                                <p>
                                    Automated the process of generating reports right from SQL extraction 
                                    to report generation using Python. 
                                </p>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <br></br>
            </div>
            {/* Tata Technologies */}
            <div className="block-elem title-text">
                <div className="row flex-elem" style={{padding:"7.5px", backgroundColor:"lightgrey", borderRadius:"15px"}}>
                    <div className="col-5 col-sm-6">
                        <div className="flex-elem">
                            <div style={{display:"flex", alignItems:"center"}}>
                                <img src={tataIMG} className="profile-pic" alt=""></img>
                            </div>                        
                        </div>
                    </div>
                    <div className="col-7 col-sm-6" style={{padding:"5px"}}>
                        <div className="flex-elem">
                            <div className="block-elem" style={{textAlign:"center"}}>
                                <p className="h3">
                                    Tata Technologies
                                </p>
                                <hr></hr>                                      
                                <p className="h4">
                                    Design Engineer
                                </p>
                                <p className="h4">
                                    July 2015 - May 2018
                                </p>
                                <p className="h4">
                                    2 years 11 months
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    {/* MFG. Services */}
                    <SwiperSlide style={{padding:"10px"}}>
                        <div className="block-elem title-text" style={{backgroundColor:"wheat", border:"2px solid wheat"}}>
                            <div className="row" style={{textAlign:"center"}}>
                                <div className="col-12 col-sm-4">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}>
                                            <b>Industry:</b>
                                        </p>
                                        <p>Aerospace Manufacturing</p>                                    
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-5">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Project Goal: </b></p>
                                        <p>Manufacturing Process Automation</p>  
                                    </div>
                                </div>
                                <br></br>
                                <div className="col-12 col-sm-3">
                                    <div className="h5">
                                        <p className="h4" style={{textDecoration:"underline"}}><b>Revenue Potential: </b></p>
                                        <p> - </p>  
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="block-elem h5">
                                <p className="h4" style={{textDecoration:"underline"}}><b>Project Brief</b></p>
                                <p>
                                    Client - <b>Magellan Aerospace, tier-1 supplier</b> of aerospace components
                                    to <b> AIRBUS </b>.                                
                                </p>
                                <br></br>
                                <p>
                                    Designed CNC machining programs & zero contatact inspection programs for wing components 
                                    belonging to the A330, A350 & A380 class of airliners. 
                                </p>
                                <br></br>
                                <p>
                                    Responsible for creating and reviewing quality assurance documents to standardize machining 
                                    process and ensure high quality deliverables in a lean manufacturing environment. 
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <br></br>
            </div>
        </div>
    )
}

export default WorkExp