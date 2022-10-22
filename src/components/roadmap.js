import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';



class Manifesto extends Component{
    render(){
        return(
            <Container className="pt-7 pb-7" id="roadmap">
                <Row>

                <Col sm={12} className="position-relative text-center">
                        <img src="images/roadmap-hd.png" className="img-fluid" style={{ width: '65vmax' }} />
                        <h1 className="font-acierdisplay shadow-white font-weight500 text-orange fontsize6vmax letterspace12px mb-0 position-absolute center-hd mt-2"> RoadMap </h1>
                  </Col>

                <Col sm={12} className="text-center mt-up">
                    <h3 className="text-uppercase text-white font-acierdisplay"> The Path From Start To Finish </h3>
                </Col>  


              {/* June */}
                <Col sm={12} className="d-flex d-flex">
                    <Col sm={4} className="mt-4">
                        <Col className="w-100">
                            <h5 className="text-white font-acierdisplay"> August 2022 </h5>
                            <h5 className="text-orange font-sourcesans font-weight700 fontsize1-5vmax"> - COFFEE WARS Website Development. </h5>
                        </Col>
                        <Col className="w-100 mt-5 pt-4 animate__animated animate__fadeInLeft wow animated_duration2s">
                            <img src="images/map1.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }}/>
                        </Col>
                    </Col>
                     <Col sm={3} className="mt-4">
                          <Col><img src="images/arrow.png" className="img-fluid animate__animated animate__shakeY animate__infinite" /></Col>
                      </Col>
                      <Col sm={5} className="mt-4">
                          <Col className="w-100 custom-top">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> September 2022 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Launch of COFFEE WARS NFTs. </li>
                                 <li>- Hosting of monthly Discord chat with filmmakers and behind-the-scenes crew. </li>
                                  <li>- The first 500 owners of the NFT tokens will have their names included in the development of the  Sequel. </li>
                                  <li>- 100 Double Shot Level holders will have their photos included in the next the feature film.</li>
                                </ul>
                          </Col>
                      </Col>
                </Col>
                 {/* June  */}


                <Col sm={12} className="w-100 text-center mt-5">
                   <h3 className="mb-0 text-green font-acierdisplay font-weight500"> *Film Development Production On The Sequel GreenLit When 5000 Are Sold </h3>
                </Col>


                 {/* Octuber  */}
                <Col sm={12} className="d-flex d-flex">
                       <Col sm={4} className="mt-4">
                          <Col className="w-100">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> November 2022 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Publicity for the worldwide release of COFFEE WARS </li>
                                 <li>- Screenplay and development begins on the sequel. </li>
                              
                                </ul>
                          </Col>
                      </Col>
                    <Col sm={4} className="mt-auto">
                          <Col className="custom-top pt-5"><img src="images/arrow.png" className="img-fluid animate__animated animate__shakeY animate__infinite" /></Col>
                      </Col>
                      <Col sm={4} className="mt-4">
                        <Col className="w-100 mt-5 pt-2 animate__animated animate__fadeInRight wow animated_duration2s">
                            <img src="images/map2.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                </Col>
                {/* Octuber  */}


                 {/* November  */}
                <Col sm={12} className="d-flex d-flex">
                    <Col sm={4} className="col-sm-4 mt-4">
                        <Col className="w-100 animate__animated animate__fadeInLeft wow animated_duration2s">
                            <img src="images/map3.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>

                     <Col sm={3} className="mt-auto">
                        
                      </Col>
                    
                    <Col sm={5} className="mt-auto mb-auto">
                          <Col className="w-100">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> January 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Release of the first COFFEE WARS worldwide. </li>
                                 <li>- Development of the sequel continues. </li>
                                  <li>- Casting begins on the sequel. </li>
                                </ul>
                          </Col>
                      </Col>
                </Col>
                {/* November */}




                {/* Feburary  */}
                <Col sm={12} className="d-flex d-flex mt-4">
                  
                      <Col sm={6} className="mt-4">
                          <Col className="w-100 mt-3">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> March 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Pre-Production begins on the COFFEE WARS sequel. </li>
                                </ul>
                                <Col className="pt-5 text-sm-end"><img src="images/arrow.png" className="img-fluid animate__animated animate__shakeY animate__infinite" /></Col>
                          </Col>
                      </Col>
                     <Col sm={2} className="mt-auto">
                        
                      </Col>
                      <Col sm={4} className="mt-4">
                        <Col className="w-100 animate__animated animate__fadeInRight wow animated_duration2s">
                            <img src="images/map4.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                </Col>
                {/* Feburary  */}



                {/* May  */}
                <Col sm={12} className="d-flex d-flex">
                         <Col sm={4} className="mt-sm-0 mt-4">
                        <Col className="w-100 animate__animated animate__fadeInLeft wow animated_duration2s">
                            <img src="images/map5.jpg" className="img-fluid w-100" style={{boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                     <Col sm={3} className="mt-auto">
                        
                      </Col>
                      <Col sm={5} className="mt-auto mb-auto">
                          <Col className="w-100 mt-3">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> June 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Film Production begins. </li>
                                </ul>
                          </Col>
                      </Col>
                </Col>
                 {/* May */}



                {/* August */}
                <Col sm={12} className="d-flex d-flex mt-4">
                  
                      <Col sm={6} className="mt-4">
                          <Col className="w-100 mt-3">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> August 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Editorial begins on COFFEE WARS the Sequel. </li>
                                </ul>
                                <Col className="pt-5 text-sm-end"><img src="images/arrow.png" className="img-fluid animate__animated animate__shakeY animate__infinite" /></Col>
                          </Col>
                      </Col>
                     <Col sm={2} className="mt-auto">
                        
                      </Col>
                      <Col sm={4} className="mt-4">
                        <Col className="w-100 animate__animated animate__fadeInRight wow animated_duration2s">
                            <img src="images/map6.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                </Col>
                 {/* August */}



                 {/* Again November */}
                <Col sm={12} className="d-flex d-flex">
                         <Col sm={4} className="mt-sm-0 mt-4">
                        <Col className="w-100 animate__animated animate__fadeInLeft wow animated_duration2s">
                            <img src="images/map7.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                     <Col sm={3} className="mt-auto">
                        
                      </Col>
                      <Col sm={5} className="mt-auto mb-auto">
                          <Col className="w-100 mt-3">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> November 2023 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- Advanced Screening of the sequel. </li>
                                </ul>
                          </Col>
                      </Col>
                </Col>
                {/* Again November  */}
                  


               {/* Spring */}
                <Col sm={12} className="d-flex d-flex mt-3">
                  
                      <Col sm={6} className="mt-4">
                          <Col className="w-100">
                                <h5 className="text-white font-acierdisplay mb-1 letterspace2px"> Spring 2024 </h5>
                                <ul className="text-orange font-weight700 list-unstyled p-0 m-0 fontsize1-5vmax font-sourcesans">
                                  <li>- The COFFEE WARS sequel will be released. </li>
                                  <li>- Exclusive Q&A with filmmakers. </li>
                                  <li>- And we start work on the second sequel! </li>
                                </ul>
                          </Col>
                      </Col>
                     <Col sm={2} className="mt-auto">
                        
                      </Col>
                      <Col sm={4} className="mt-4">
                        <Col className="w-100 animate__animated animate__fadeInRight wow animated_duration2s">
                            <img src="images/map8.jpg" className="img-fluid w-100" style={{ boxShadow: '1px 0px 13px 4px #e36c36' }} />
                        </Col>
                    </Col>
                </Col>
                 {/* Spring */}



                </Row>
            </Container>
  
        );
    }
}


export default Manifesto;