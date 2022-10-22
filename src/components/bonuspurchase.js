import React,{Component, useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';



class BonusPurchase extends Component{
    render(){
    return(
        <Container className="pt-4 pb-4" id="bonuspurchase">
        <Row>
             <Col sm={12} className="text-center position-relative"> 
                  <img src="images/singleshot.png" className="img-fluid" style={{ width:'80vmax' }} />
                  <h1 className="font-cooperBlack font-weight600 text-white shadow-purple fontsize4vmax letterspace1px mb-0 position-absolute center-hd text-uppercase d-flex justify-content-center align-items-center lineheight0-8 m-bottom" style={{ bottom:'32px',textShadow:'-6px 3px 3px #8334d1' }}> Bonus For First 500 <br/> NFT Holders!! </h1>
             </Col> 


              <Col sm={12} className="text-center mb-4 mx-auto" style={{ maxWidth: '58vmax' }}>
                <img src="images/bonus02.png" className="img-fluid mb-4" width="400" />
                <p className="font-cooperBlack fontsize2vmax text-white lineheight1"> For the first <span className="text-lightyellow fontsize2-5vmax"> 500 </span> who purchase NFTs, we will add Your Name to Coffee Wars the Sequel. 
                <span className="text-lightyellow text-uppercase"> Your name </span> (your real one or your coffee-counter nom-de-plume) will be featured somewhere in the film. Pretty frikkin cool, right? </p>
                </Col>

                <Col sm={12} className="w-100 text-center mt-5">
                    <img src="images/img01.png" className="img-fluid" />
                </Col> 

             </Row>
        </Container>

    );
    }
}




export default BonusPurchase;