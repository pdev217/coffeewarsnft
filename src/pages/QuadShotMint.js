import React,{useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { quadShots } from "../config/shots"

        
function QuadShot () {
    useEffect(() => {
        var video = $(".video");
        $(video).on('canplay', function () {
            $(video).mouseenter(function () {
                $(this).get(0).play();
            }).mouseleave(function () {
                $(this).get(0).pause();
            })
        });
    })
    
    return(
        <Container className="pt-4 pb-6" id="quadshot">
            <Row>   
                
            <Col sm={12} className="text-center position-relative"> 
                <img src="images/singleshot.png" className="img-fluid" style={{ width: '80vmax' }} />
                <h1 className="font-cooperBlack font-weight600 text-white fontsize4vmax letterspace1px mb-0 position-absolute center-hd text-uppercase lineheight1" style={{ top: '5px', textShadow: '4px 4px 3px #08fd02' }}> Quad Shot <span className="d-sm-block"> Heart Pounding </span>
                <span className="d-sm-block"> Level </span> </h1>
            </Col> 


            <Col sm={12} className="w-100 text-center">
                <h1 className="font-cooperBlack fontsize4-5vmax letterspace6px mb-0 lineheight0-8 text-uppercase mb-2" style={{ textShadow: '2px 2px 1px #fff', color:'#f97002' }}> <span className="fontsize6vmax"> 21</span> Caffeinated Nfts </h1>
                <h5 className="text-white text-uppercase letterspace3px font-weight700 fontsize1-5vmax"> (Hover Over To Play) </h5>
            </Col>

            {
                quadShots.map(e => 
                    <Col sm={4} className="col-6 mt-4 animate__animated animate__fadeInLeft wow animated_duration2s">
                        <Col className="w-100 text-center px-sm-4">
                                <Col className="nft-video w-100 mb-2" style={{ boxShadow: '1px 1px 12px 1px #f98425' }}>
                                <img src={e.imgUrl} className="img-fluid" />
                                <video className="video" width="100%" height="100%" data-play="hover" preload="auto">
                                        <source src={e.videoUrl} type="video/mp4" />
                                    </video>
                                </Col>
                                <h5 className="text-lightyellow font-acierdisplay letterspace1px"> {e.title} </h5>
                                <a href="#" className="d-inline-block bg-darkpink border-radius6px text-white pt-2 pb-2 px-3 font-acierdisplay text-decoration-none fontsize15px hoverbtn2"> Mint Quad Shot Level </a>
                        </Col>
                    </Col>
                )
            }

        </Row>
        </Container>
    );
}


export default QuadShot;