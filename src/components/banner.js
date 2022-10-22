import React,{Component, useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Banner(){
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return(
            <Container fluid>
                <Row>
                    <Col className="position-relative text-center">
                            <img src="images/coffee-banner.gif" className="img-fluid w-100" />

                            <Col className="position-absolute text-white text-center m-auto banner-text">
                            <h1 className="text-white shadow-orange fontsize5vmax mb-0 font-cooperitalic text-uppercase"> Watch The Teaser Now </h1>
                                <Button className="bg-transparent border-0 outline-none" href="#" onClick={handleShow}><img src="images/play.png" className="animate__animated animate__tada animate__infinite" width="80" /> </Button>
                            </Col>
                    </Col>


                    
                        {/* Video Modal  */}
                           <Modal show={show} onHide={handleClose} className="bg-transparent video-modal" size="lg">
                                <Modal.Header className="bg-transparent" closeButton>
                                </Modal.Header>
                                <Modal.Body>
                                <iframe src="https://player.vimeo.com/video/730600895?h=920867e80e?autoplay=1&loop=1&autopause=0" height="540" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="mt-auto mb-auto" style={{ width:'100%' }}></iframe>
                                </Modal.Body>
                            </Modal>

                            {/*  Video Modal  */}

                </Row>
            </Container>
        );  
}



export default Banner;