import React,{Component, useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';



function OurBaristas(){
    return(
        <Container className="pt-4 pb-4" id="singleshot">
        <Row>
            <Col className="col-sm-12 text-center position-relative"> 
                  <img src="images/singleshot.png" className="img-fluid" style={{width:'80vmax' }} />
                  <h1 className="font-cooperBlack font-weight600 text-white shadow-purple fontsize4vmax letterspace1px mb-0 position-absolute center-hd text-uppercase d-flex justify-content-center align-items-center lineheight0-8 m-bottom" style={{ bottom: '32px',textShadow:'4px 4px 1px #de0d00' }} > Single Shot <br/> Buzzy Level </h1>
             </Col> 


             <Col sm={12} className="w-100 text-center">
                    <h1 className="text-orange font-acierdisplay fontsize5vmax letterspace6px mb-0 lineheight0-8 animate__animated animate__fadeInUp wow animated_duration2s" style={{textShadow: '2px 2px 1px #fff' }}> Our Baristas </h1>
                    <h5 className="text-white text-uppercase letterspace3px font-weight700 fontsize1-5vmax"> (Hover Over To View Various Available) </h5>
              </Col>


              <Col sm={4} className="px-1 nft-exp-box mt-5 animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Jo-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Jo</h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Kate Nash </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                            
                        </Col>
                  </Col>
              </Col>


              <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Roopa-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Roopa </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Saoirse-Monica Jackson </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                        
                        </Col>
                  </Col>
              </Col>


                 <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Rudy-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Rudy </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Toby Sebastian </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                            
                        </Col>
                  </Col>
              </Col>



              <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Andy-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Andy </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Owain Arthur </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                         </Col>
                  </Col>
              </Col>


              <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Maja-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Maja </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Maya Miller </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                        </Col>
              </Col>
            </Col>



            <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Hans-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Hans </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Freddie Fox </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay border-radius10px text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                        </Col>
                  </Col>
              </Col>



                <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Ray-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Ray </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Jordan Stephens </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                        </Col>
                  </Col>
              </Col>



              <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Stoney-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Stoney </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Jenny Rainsford </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                    
                        </Col>
                  </Col>
              </Col>




               <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Group-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> All For One </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Team </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                        
                        </Col>
                  </Col>
              </Col>



              <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Lisa-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Lisa </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Sally Phillips </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
            
                        </Col>
                  </Col>
              </Col>



               <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Jorge-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Jorge </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Tobias Forrest </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
            
                        </Col>
                  </Col>
              </Col>



               <Col className="col-sm-4 px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Bernie-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Bernie </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Ray Fearon </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
            
                        </Col>
                  </Col>
              </Col>




              <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Isabella-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Isabella </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Maria Conchita Alonso </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
            
                        </Col>
                  </Col>
              </Col>



              <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Mum-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Mum </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Rosie Cavaliero </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
                        </Col>
                  </Col>
              </Col>




               <Col sm={4} className="px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Dad-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Dad </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Hugh Dennis </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
              
                        </Col>
                  </Col>
              </Col>



               <Col sm={4} className="offset-sm-4 col-12 px-1 nft-exp-box mt-5 animate__animated animate__zoomIn wow animated_duration2s">
                  <Col className="w-100 text-center">
                        <img src="images/CharacterNFT/Bridget-Scroll.gif" className="img-fluid mb-3" />
                        <h5 className="font-acierdisplay text-white mb-0 lineheight0-8 letterspace1px"> Bridget </h5>
                        <p className="text-orange font-weight700 fontsize17px"> Played by Lydia West </p>
                        <Col className="w-100">
                            <button className="bg-red border-red fontsize13px font-acierdisplay rounded text-white btn outline-none pt-2 pb-1 hoverbtn1"> Mint Single Shot </button>
              
                        </Col>
                  </Col>
              </Col>



             </Row>
        </Container>

    );
}




export default OurBaristas;