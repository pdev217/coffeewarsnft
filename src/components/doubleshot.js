import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Doubleshot extends Component{
    render(){
        return(
            <Container fluid className='pt-5' id="doubleshot">
                <Row>   
                    <Col sm={12} className="text-center position-relative"> 
                            <img src="images/singleshot.png" className="img-fluid" style={{ width:'80vmax' }} />
                            <h1 className="font-cooperBlack font-weight600 text-white fontsize4vmax letterspace1px mb-0 position-absolute center-hd text-uppercase lineheight1" style={{ top: '5px', textShadow: '4px 4px 3px #6cbf45' }}> Double Shot <span className="d-sm-block"> BuzzMaker </span> 
                            <span className="d-sm-block"> Level </span> </h1>
                        </Col> 

                    <Col sm={12} className="text-center mt-pull-up"> 
                            <h1 className="font-acierdisplay font-weight500 text-white shadow-purple fontsize3vmax letterspace1px mb-0" > We'll Put You Into The Film! </h1>
                    </Col>  


                    <Col sm={12} className="mt-5">
                         <Col className="w-100 ps-sm-5 mb-4 position-relative">
                        <h3 className="font-acierdisplay text-lightyellow"> Check Out This Random Dude From The Internet As An Example... </h3>
                        <img src="images/people1.jpg" className="img-fluid ms-sm-5" width="200" style={{ boxShadow:'1px 1px 13px -1px #f2fb04;' }} />
                        <img src="images/arrow.png" width="206" className="align-bottom" style={{ margin: '0px -4em' }} />
                    </Col>
                </Col>


                <Col sm={12} className="p-0 text-center">
                        <img src="images/slide1.jpg" className="img-fluid w-100 mb-3" />

                        <h5 className="text-lightyellow font-cooperBlack"> Buy a Double Shot and appear in <span className="text-white text-uppercase">Coffee Wars! </span> </h5> 
                        <a href="#" className="bg-green text-white font-acierdisplay rounded text-decoration-none pt-3 pb-3 px-2 btn outline-none mt-2 hoverbtn4"> Mint Double Shot Level </a>
                </Col>

                </Row>

                <Row className="pt-4 pb-7">
                    <h3 className="font-cooperBlack text-white text-center fontsize2vmax"> Buy Double Shot and get one of the exclusive <span className="text-lightyellow fontsize2-5vmax"> Gold Cup </span> NFTs!</h3>

                <Col sm={4} className="mt-4 flip-animated">
                    <Col className="w-100 animate__animated animate__fadeInLeft wow animated_duration2s">
                        <img src="images/goldimg1.jpg" className="img-fluid w-100" style={{ boxShadow: '0px 0px 19px 8px #f78428' }} />
                    </Col>
                </Col>

                <Col sm={4} className="mt-4 flip-animated">
                    <Col className="w-100 animate__animated animate__fadeInUp wow animated_duration2s">
                        <img src="images/goldimg2.jpg" className="img-fluid w-100" style={{ boxShadow: '0px 0px 19px 8px #f78428' }} />
                    </Col>
                </Col>

                <Col sm={4} className="mt-4 flip-animated">
                    <Col className="w-100 animate__animated animate__fadeInRight wow animated_duration2s">
                        <img src="images/goldimg3.jpg" className="img-fluid w-100" style={{ boxShadow: '0px 0px 19px 8px #f78428' }} />
                    </Col>
                </Col>
                    </Row>
        </Container>
        );
    }
}


export default Doubleshot;