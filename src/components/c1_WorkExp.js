import React from 'react';

import IbmImg from '../assets/images/ibm.png'
import TataImg from '../assets/images/tata.jpg'

import '../css/App.css'

function WorkExp() {

    return (
        <div className="accordion-item">
            <h3 className="accordion-header" id="workExp">
              <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWorkExp" aria-expanded="true" aria-controls="collapseWorkExp">
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
            <div id="collapseWorkExp" className="accordion-collapse collapse" aria-labelledby="workExp">
              <div className="accordion-body">
                <div className='row g-0 accordian-block'>
                  {/* IBM */}
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
                  {/* Patterns of Interest */}
                  <h5 className="accordion-header" id="proj1">
                    <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProj1" aria-expanded="true" aria-controls="collapseProj1">
                      <h6><b>PATTERNS OF INTEREST</b></h6>
                    </button>
                  </h5>
                  <div id="collapseProj1" className="accordion-collapse collapse" aria-labelledby="proj1">
                    <br></br>
                    <div className='row g-0 slide' style={{textAlign:"center"}}>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Name</b></h4>
                        <h6><b>Patterns of Interest</b> (IBM Worldwide)</h6>
                      </div>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Goal</b></h4>
                        <h6><b>Opportunity Creation</b> (Open Pipeline)</h6>
                      </div>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Revenue Potential</b></h4>
                        <h6><b>$ 45M - $ 70M</b> (quarterly)</h6>
                      </div>
                      <div className='col-12 data-block align-self-center' style={{textAlign:"left"}}>
                        <div className='block-elem'>
                          <hr></hr>
                          <p>
                              Patterns of Interest started off as analytical project which aggregates 
                              individual level interactions such as visits, registration, events
                              & trials; along with intent level data such as competitive search 
                              & product reviews at an <b> Account and Product level.</b> 
                          </p>
                          <p>
                              This project has been reinforced using Data Science which helps 
                              us identify the factors that are important in lead creation for a
                              particular account & product category. The <b>accounts with highest 
                              likelihood of conversion</b> are <b>flagged for Sellers </b>in IBM Sales Cloud 
                              on a weekly basis
                          </p>
                          <p>
                            <b>Random Forest classifier</b> was selected due to superior performance, 
                            interpretable results and scalability when compared to its peers (KNN & Logistic Regression).
                          </p>
                          <p style={{textDecoration:"underline"}}>
                            Project performance metrics -
                          </p>
                          <p>
                            The model successfully identified <b>24% of account-product</b> combinations which contributed to -
                          </p>
                          <ul>
                            <li>
                              <p>
                                <b>54% of Total Open Pipeline by Revenue</b>
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>45% of Total Open Pipeline by Count</b> 
                              </p>
                            </li>
                          </ul>                          
                        </div>
                      </div>
                    </div>
                  </div>                  
                  {/* SlackBot */}
                  <h5 className="accordion-header" id="proj2" style={{marginTop:"2%"}}>
                    <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProj2" aria-expanded="true" aria-controls="collapseProj2">
                      <h6><b>SALES INTELLIGENCE SLACKBOT</b></h6>
                    </button>
                  </h5>
                  <div id="collapseProj2" className="accordion-collapse collapse" aria-labelledby="proj2">
                    <br></br>
                    <div className='row g-0 slide' style={{textAlign:"center"}}>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Name</b></h4>
                        <h6><b>Sales Intel SlackBot</b> (IBM Worldwide)</h6>
                      </div>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Goal</b></h4>
                        <h6><b>Opportunity Creation</b> (Open Pipeline)</h6>
                      </div>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Revenue Potential</b></h4>
                        <h6><b>$ 16M - $ 25M</b> (quarterly)</h6>
                      </div>
                      <div className='col-12 data-block align-self-center' style={{textAlign:"left"}}>
                        <div className='block-elem'>
                          <hr></hr>
                          <p>
                            Implemented a marketing initiative to provide real-time actionable intelligence (priority account
                            interactions & open opportunities) for lead creation and support IBM Marketing's goal of capturing &
                            nurturing demand.
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
                            Project performance metrics -
                          </p>
                          <ul>
                            <li>
                              <p>
                                <b>Lift of 4x for intelligence view rates</b> in IBM Sales Cloud
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>Lift of 2.5x for sales ownership of intelligence</b> in IBM Sales Cloud
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>Lift of 1.5x in Open pipeline generated</b>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Project Yield */}
                  <h5 className="accordion-header" id="proj3" style={{marginTop:"2%"}}>
                    <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProj3" aria-expanded="true" aria-controls="collapseProj3">
                      <h6><b>PROJECT YIELD</b></h6>
                    </button>
                  </h5>
                  <div id="collapseProj3" className="accordion-collapse collapse" aria-labelledby="proj3">
                    <br></br>
                    <div className='row g-0 slide' style={{textAlign:"center"}}>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Name</b></h4>
                        <h6><b>Project Yield</b> (IBM Partner Ecosystem)</h6>
                      </div>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Goal</b></h4>
                        <h6><b>Opportunity Conversion</b> (Won Pipeline)</h6>
                      </div>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Revenue Potential</b></h4>
                        <h6><b>~ 20 $M</b> (quarterly)</h6>
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
                          <p style={{textDecoration:"underline"}}>
                            Project performance metrics -
                          </p>
                          <p>
                            The model successfully identified <b>37% of accounts</b> which contributed to -
                          </p>
                          <ul>
                            <li>
                              <p>
                                <b>52% of Win Pipeline by Revenue</b>
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>47% of Win Pipeline by Count</b> 
                              </p>
                            </li>
                          </ul>                          
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Audience Database */}
                  <h5 className="accordion-header" id="proj4" style={{marginTop:"2%"}}>
                    <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProj4" aria-expanded="true" aria-controls="collapseProj4">
                      <h6><b>AUDIENCE DATABASE CURATION</b></h6>
                    </button>
                  </h5>
                  <div id="collapseProj4" className="accordion-collapse collapse" aria-labelledby="proj4">
                    <br></br>
                    <div className='row g-0 slide' style={{textAlign:"center"}}>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Name</b></h4>
                        <h6><b>Audience Insights</b> (IBM Z LinuxOne)</h6>
                      </div>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Project Goal</b></h4>
                        <h6><b>Audience Database curation</b></h6>
                      </div>
                      <div className='col-12 col-sm-4 align-self-center'>
                        <h4 style={{fontStyle:"italic", color:"brown"}}><b>Revenue Potential</b></h4>
                        <h6>None</h6>
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
                          <p style={{textDecoration:"underline"}}>
                            Project performance metrics -
                          </p>
                          <p>
                            Successfully extracted information for <b>~1,700 prospective clients</b> at a worldwide level 
                            from a <b>list of 50 urls</b> with a code <b>execution time of 14mins</b>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* TATA TECH */}
                  <div className='col-5 col-lg-6 align-self-center' style={{marginTop:"2%"}}>
                    <div className='flex-elem'>
                      <img src={TataImg} alt='' className='images'></img>
                    </div>    
                  </div>
                  <div className='col-7 col-lg-6 align-self-center' style={{marginTop:"2%"}}>
                    <div className='data-block'>
                      <div className='' style={{textAlign:"center"}}>
                        <h4 className='header-txt'><b>TATA TECHNOLOGIES</b></h4>
                        <h5 className='header-txt'>Aerospace Mfg.</h5>
                        <h5 className='header-txt' style={{fontStyle:"italic"}}>Design Engineer</h5>
                        <h5 className='header-txt' style={{fontStyle:"italic"}}>July 2015 - June 2018</h5>
                      </div>
                    </div>  
                  </div>
                  <div className='col-12 align-self-center'>
                    <br></br>
                  </div>
                  {/* Manufacturing Automation */}
                  <h5 className="accordion-header" id="proj5">
                    <button className="accordion-button collapsed header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProj5" aria-expanded="true" aria-controls="collapseProj5">
                      <h6><b>MANUFACTURING AUTOMATION</b></h6>
                    </button>
                  </h5>
                  <div id="collapseProj5" className="accordion-collapse collapse" aria-labelledby="proj5">
                    <br></br>
                    <div className='row g-0 slide' style={{textAlign:"center"}}>
                      <div className='col-12 data-block align-self-center' style={{textAlign:"left"}}>
                        <div className='block-elem'>
                          <p>
                            Worked with <b>Magellan Aerospace</b>, tier-1 supplier of aerospace components to <b>AIRBUS</b> in designing CNC
                            machining programs & robotic inspection programs for wing components belonging to the A330, A350
                            & A380 class of airliners.
                          </p>
                          <p>
                            These programs were loaded at manufacturing sites of Magellan Aerospace at Wrexham & Bournemouth (UK)
                            where they were mass produced and then shipped off to France for final assembly.
                          </p>
                          <p>
                            Responsible for creating, reviewing quality assurance documents, standardizing machining process and
                            ensuring high quality deliverables in a lean manufacturing environment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
    )

}

export default WorkExp;