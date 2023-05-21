import React from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import IbmImg from '../assets/images/ibm.png'

import '../css/App.css'
import 'swiper/css/bundle';

function WorkExp() {

    return (
        <div class="accordion-item">
            <h3 class="accordion-header" id="workExp">
              <button class="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWorkExp" aria-expanded="true" aria-controls="collapseWorkExp">
                <div className='flex-elem accordian-btn' style={{justifyContent:"start"}}>
                  <div className='flex-elem' style={{marginLeft:"3%"}}>
                    <h3><i className="fa-solid fa-business-time"></i></h3>
                  </div>
                  <div className='flex-elem' style={{marginLeft:"3%"}}>
                    <h3>Work Experience</h3>
                  </div>
                </div>
              </button>
            </h3>
            <div id="collapseWorkExp" class="accordion-collapse collapse" aria-labelledby="workExp" data-bs-parent="#mainContent">
              <div class="accordion-body">
                <div className='row g-0 accordian-block'>
                  <div className='col-5 col-lg-6 align-self-center'>
                    <div className='flex-elem'>
                      <img src={IbmImg} alt='' className='images'></img>
                    </div>    
                  </div>
                  <div className='col-7 col-lg-6 align-self-center'>
                    <div className='data-block'>
                      <div className='' style={{textAlign:"center"}}>
                        <h4 className='header-txt'><b>IBM</b></h4>
                        <h5 className='header-txt'>Performance Marketing</h5>
                        <h5 className='header-txt' style={{fontStyle:"italic"}}>Data Scientist</h5>
                        <h5 className='header-txt' style={{fontStyle:"italic"}}>Oct 2020 - Present</h5>
                      </div>
                    </div>  
                  </div>
                  <div className='col-12 align-self-center'>
                    <br></br>
                  </div>
                  <div className='col-12 align-self-center'>
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation={{ clickable: true }}
                      pagination={{ clickable: true}}
                      className="swiper-container"
                    >
                      {/* SlackBot */}
                      <SwiperSlide >
                        <div className='row g-0 slide' style={{textAlign:"center"}}>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Name</b></h4>
                            <h6>Sales Intel SlackBot (IBM Worldwide)</h6>
                          </div>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Goal</b></h4>
                            <h6>Lead Creation (Open Pipeline)</h6>
                          </div>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Revenue Potential</b></h4>
                            <h6>Project Pilot In-Progress</h6>
                          </div>
                          <div className='col-12 data-block align-self-center' style={{textAlign:"left"}}>
                            <div className='block-elem'>
                              <hr></hr>
                              <p>
                                <b>SlackBot for Sales</b> is a marketing initiative to deliver the most recent
                                actionable intelligence to sellers and assist in lead creation. The initiative serves
                                the primary objective of IBM Marketing that is to Capture & Nuture Demand 
                              </p>                              
                              <p style={{textDecoration:"underline"}}>
                                Project has three main components
                              </p>
                                <ul>
                                  <li>
                                    <p>
                                      <b>Subscription form</b> - Records Seller Territory data, Market & Product 
                                      preferences for those who wish to enroll for Slack notifications. 
                                      Built as a web-app with React serving as frontend and Python
                                      as the backend which writes data to IBM Database and enables editing in real-time 
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <b>SlackBot Job</b> - Program that maps latest responses from marketing
                                      assets at an Account, Market & Product level against the data collected from
                                      the subscription form. Job is completely automated and is deployed on the 
                                      IBM Data Science Kubernetes Cluster.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <b>Slack API</b> - To send automated slack notifications to sellers about their subscription
                                      details and account level alerts for all sellers that have enrolled for the program on
                                      a daily/weekly basis depending on the type of intelligence requested.
                                    </p>
                                  </li>
                                </ul>
                              <p style={{textDecoration:"underline"}}>
                                Project pilot metrics -
                              </p>
                              <ul>
                                <li>
                                  <p>
                                    <b>Lift of 3x for intelligence view rates</b> in IBM Sales Cloud
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <b>Lift of 2x for sales ownership of intelligence</b> in IBM Sales Cloud
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <b>Lift of 1.5x for lead creation from response</b>
                                  </p>
                                </li>
                              </ul>
                              <hr></hr>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* Patterns of Interest */}
                      <SwiperSlide>
                        <div className='row g-0 slide' style={{textAlign:"center"}}>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Name</b></h4>
                            <h6>Patterns of Interest (IBM Worldwide)</h6>
                          </div>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Goal</b></h4>
                            <h6>Lead Creation (Open Pipeline)</h6>
                          </div>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Revenue Potential</b></h4>
                            <h6>~ 150 $M (quarterly)</h6>
                          </div>
                          <div className='col-12 data-block align-self-center' style={{textAlign:"left"}}>
                            <div className='block-elem'>
                              <hr></hr>
                              <p>
                                  Patterns of Interest started off as analytical project which aggregates 
                                  individual level interactions such as visits, registration, events
                                  & trials; along with intent level data such as competitive search 
                                  & product reviews at an <b> Account, Market and Product level.</b> 
                              </p>
                              <p>
                                  This project has been reinforced using Data Science which helps 
                                  us identify the factors that are important in lead creation for a
                                  particular account & product category. The <b>accounts with highest 
                                  likelihood of conversion </b> are <b>flagged for Sellers </b>in IBM Sales Cloud 
                                  on a weekly basis
                              </p>
                              <p>
                                <b>Random Forest model</b> was selected due to superior performance, 
                                interpretable results and scalability when compared to its peers (KNN & Logistic Regression).
                              </p>
                              <p>
                                The model successfully identified <b>23% of accounts</b> which contributed to -
                              </p>
                              <ul>
                                <li>
                                  <p>
                                    <b>66% of Total Open Pipeline by Revenue</b>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <b>54% of Total Open Pipeline by Count</b> 
                                  </p>
                                </li>
                              </ul> 
                              <hr></hr>                             
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* Project Yield */}
                      <SwiperSlide>
                        <div className='row g-0 slide' style={{textAlign:"center"}}>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Name</b></h4>
                            <h6>Project Yield (IBM Partner Ecosystem)</h6>
                          </div>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Goal</b></h4>
                            <h6>Lead Conversion (Won Pipeline)</h6>
                          </div>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Revenue Potential</b></h4>
                            <h6>~ 20 $M (quarterly)</h6>
                          </div>
                          <div className='col-12 data-block align-self-center' style={{textAlign:"left"}}>
                            <div className='block-elem'>
                              <hr></hr>
                              <p>
                                Project Yield was a marketing initiative to assit <b> IBM Business 
                                Partners</b> in identifying leads most likely to convert based on 
                                historical trends
                              </p>
                              <p>
                                Business partner performance for the past 12 quarters across product 
                                categories, sales channels, Industy and more was used to train & develope 
                                a model which could identify these high qulaity leads.
                                Given the sheer volume and dimensionality of the dataset, a Random Forest model was
                                used as a classifier to predict the probability of conversion.
                              </p>
                              <p>
                                The model predictions would help business partners prioritize business action 
                                towards these leads. It would also enable IBM to assist these partners with 
                                <b> Co-Marketing funding</b> to improve pipeline yield.
                              </p>
                              <p>
                                The model successfully identified <b>27% of accounts</b> which contributed to -
                              </p>
                              <ul>
                                <li>
                                  <p>
                                    <b>55% of Win Pipeline by Revenue</b>
                                  </p>
                                </li>
                                <li>
                                  <p>
                                    <b>47% of Win Pipeline by Count</b> 
                                  </p>
                                </li>
                              </ul>  
                              <hr></hr>                            
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* Audience Database */}
                      <SwiperSlide>
                        <div className='row g-0 slide' style={{textAlign:"center"}}>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Name</b></h4>
                            <h6>Audience Insights (IBM Z LinuxOne)</h6>
                          </div>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Goal</b></h4>
                            <h6>Audience Database curation</h6>
                          </div>
                          <div className='col-12 col-sm-4 align-self-center'>
                            <h4 style={{fontStyle:"italic", color:"brown"}}><b>Revenue Potential</b></h4>
                            <h6>-</h6>
                          </div>
                          <div className='col-12 data-block align-self-center' style={{textAlign:"left"}}>
                            <div className='block-elem'>
                              <hr></hr>
                              <p>
                                The purpose of this project was to create a <b> database of prospective clients  </b>
                                belonging to the Consumer Tech industry for the <b>IBM Z LinuxOne product </b>  
                                marketing team.                                
                              </p>
                              <p>
                                Audience data would then be used by the product marketing team for audience analytics 
                                & building a marketing strategy for upcoming product launch.
                              </p>
                              <p>
                                Deployed a <b> web scrapper </b> built in Python using the <b> web testing module Selenium </b> 
                                that extracts information such as Company Name, Industry & Mkt. Cap which is mapped to IBM 
                                Business units.
                              </p>
                              <p>
                                Successfully extracted information for <b>~1,700 prospective clients</b> at a worldwide level 
                                from a <b>list of 50 urls</b> with a code <b>execution time of 14mins</b>.
                              </p>
                              <hr></hr>
                            </div>
                          </div>
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

export default WorkExp;