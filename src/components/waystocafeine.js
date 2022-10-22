import React,{Component} from "react";
import {Container, Row, Col} from 'react-bootstrap';


class WayCafeine extends Component{
    render(){
        return(
                <Container fluid className="pt-5 pb-5" id="cafeine-pump">
                    <Container>
                    <Row>
                            <Col className="w-100 position-relative text-center mb-5">
                                    <img src="images/ways-bg.png" className="img-fluid" style={{width: '83vmax'}} />
                                    <h1 className="font-acierdisplay font-weight500 text-white shadow-purple fontsize3vmax letterspace2px mb-0 position-absolute cafe-pump-hd d-flex justify-content-center center-hd align-items-center mt-4"> We Have <span className="text-lightyellow fontsize3-5vmax d-inline-block px-2"> 3 </span> Ways To Get That Caffeine Pumping! </h1>
                            </Col>
                            </Row>

                            <Row>
                            <Col sm={4} className="mt-4 p-0">
                                    <Col className="w-100 text-center">
                                                <img src="images/coffeecup.png" className="img-fluid animate__animated animate__bounce animate__infinite" width="60%" />
                                        </Col>

                                    <Col className="w-100 text-center">
                                            <h1 className="font-cooperBlack font-weight800 text-white shadow-red text-uppercase fontsize2-5vmax lineheight1 mb-4 animate__animated animate__fadeInUp wow animated_duration2s heading-h"> Single Shot <span className="d-sm-block"> Buzzy Level </span> </h1>
                                            
                                            <Col className="equal-content w-100">
                                            <p className="font-acierdisplay fontsize1-5vmax text-lightyellow mx-auto pt-2 mb-2 lineheight1 maxwidth280"> Buy one of our <span className="text-white font-sourcesans fontsize2-5vmax font-weight800"> 11,999 </span> artistically handcrafted and completely unique character NFTs....    </p>

                                        {/* bonus Image */}
                                            <Col className="w-100 ps-sm-4 mt-2 mb-4">
                                                <a href="#bonuspurchase"><img src="images/bonus-img.png" className="img-fluid" width="231" /></a>
                                            </Col>
                                 
                                        </Col>

                                        <a href="#singleshot" className="btn bg-red border-red rounded text-white text-uppercase font-acierdisplay pt-3 pb-3 lineheight1 outline-none mt-2 hoverbtn1"> Go to Single Shot </a>

                                </Col>
                            </Col>

                        {/* double shot */}
                            <Col sm={4} className="mt-4 p-0">
                                    <Col className="w-100 text-center">
                                                <img src="images/doubleshot.png" className="img-fluid animate__animated animate__shakeX animate__infinite" width="60%" />
                                        </Col>

                                <Col className="w-100 text-center">
                                        <h1 className="font-cooperBlack font-weight800 text-white shadow-red text-uppercase fontsize2-5vmax lineheight1 mb-4 animate__animated animate__fadeInUp wow animated_duration2s heading-h"> double SHOT BUZZmaker LEVEL </h1>

                                        <Col className="equal-content w-100">
                                            <p className="font-acierdisplay fontsize1-5vmax text-lightyellow lineheight1 maxwidth300 mx-auto pt-2 mb-4 w-80"> Buy one of the <span className="text-white font-sourcesans fontsize2-5vmax font-weight800"> 100 </span> and you get to be in the film. Yep, you heard that right. All good caffeinated movies need devoted fans. At this level we will put your picture in the film. You will also get an <span className="text-purple"> EVEN MORE RARE</span> <span className="text-white"> nft! </span> </p>
                                        </Col>
                                
                                        <a href="#doubleshot" className="btn bg-green border-green rounded text-white text-uppercase font-acierdisplay pt-3 pb-3 lineheight1 outline-none mt-2 hoverbtn4"> Go To Double Shot </a>

                                </Col>
                            </Col>
    



                            {/* Quad Heart shot */}
                                <Col sm={4} className="col-sm-4 mt-4 p-0">
                                        <Col className="w-100 text-center">
                                            <img src="images/quadshot.png" className="img-fluid animate__animated animate__rubberBand animate__infinite" width="71%" />
                                        </Col>

                                    <Col className="w-100 text-center">
                                            <h1 className="font-cooperBlack font-weight800 text-white shadow-red text-uppercase fontsize2-5vmax lineheight1 mb-4 animate__animated animate__fadeInUp wow animated_duration2s heading-h"> quad shot heart pounding level </h1>
                                            <Col className="equal-content w-100">
                                                <p className="font-acierdisplay fontsize1-5vmax text-lightyellow maxwidth300 mx-auto pt-2 mb-4 lineheight1 w-80"> We are <span className="text-white"> sellING </span> only <span className="text-white fontsize2-5vmax"> 21 </span> 
                                                <span className="text-white"> video GIFs </span> of scenes from the film  curated and packaged. It’s an exclusive club. Each is one-of-a-kind museum-quality. Imagine our baristas at the most exclusive madison avenue gallery holding a cup of joe with patterns in the milk. </p>
                                            </Col>

                                            <a href="#quadshot" className="btn bg-pink border-pink rounded text-white text-uppercase font-acierdisplay pt-3 pb-3 lineheight1 outline-none mt-2 hoverbtn2"> Go to Quad Shot </a>

                                    </Col>
                                </Col>
                    
                        

                    </Row>
                </Container>
            </Container>
         
        );
    }
}



export default WayCafeine;