import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class CoffeeGif4 extends Component{
    render(){
        return(
            <Container fluid>
                <Row>   
                    <Col lg={12} className="p-0 animate__animated animate__fadeIn wow animated_duration2s">
                    <img src="images/coffee-press-video.gif" className="img-fluid w-100" />
                    </Col> 
                </Row>
                <Container className="pt-5 pb-5">
                    <Row>
                        <Col sm={12} className="w-100 position-relative text-center ">
                                <img src="images/behind-hd.png" className="img-fluid" style={{ width: '68vmax' }} />
                                <h1 className="font-acierdisplay font-weight600 text-white fontsize5vmax shadow-pink letterspace2px mb-0 position-absolute center-hd mt-2"> Keep Up With Us </h1>
                        </Col>

                        <Col sm={12} className="w-100 text-center mx-auto" style={{ maxWidth: '980px' }}>
                            <h2 className="text-red font-acierdisplay letterspace1px"> Follow Our Progress </h2>
                            <p className="text-white font-acierdisplay lineheight1-3 fontsize2vmax mt-4 font-weight400"> We will hold monthly online meetings connecting our <span className="text-lightred"> NFT partners </span> with the artists and filmmakers who are bringing
                             <span className="text-lightred"> coffee wars </span> to the world and creating a franchise of sequels. And when the films are complete, our nft holders will get first premiere access to the film before anyone else has seen it. Our intention is to shake things up. Enough waiting around for some big studio with their bureaucratic pencil-pushers. We are
                              <span className="text-lightred"> coffee wars </span>,  and we are ready to get our caffeine on!</p>
                            <a href="#" className="bg-purple rounded font-acierdisplay text-white fontsize2vmax outline-none px-4 d-inline-block text-decoration-none pt-2 pb-1 letterspace1px hoverbtn3">  Discord </a>
                        </Col> 
                </Row>
                </Container>
        </Container>
        );
    }
}


export default CoffeeGif4;