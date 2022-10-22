import React,{useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useMoralis } from "react-moralis";

function Header() {

    const { authenticate, isAuthenticated, account, logout } = useMoralis();
    
    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

    // useEffect(() => {
    //     if(!account) {
    //         authenticate()
    //     }
    // }, [account, authenticate])
  

    console.log("---isAuthenticated", isAuthenticated)
    console.log("---account", account)
    
    return(
        <Container fluid className='pt-2 pb-2'>
            <Row className='px-2'>
                <Navbar expand="lg" className="header-navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-uppercase font-acierdisplay w-100 align-items-center">
                        <Nav.Link className='text-white' href="#about">About </Nav.Link>
                        <Nav.Link className='text-white' href="#manifesto"> Manifesto </Nav.Link>
                        <Nav.Link className='text-white' href="#roadmap"> Roadmap </Nav.Link>
                        <Navbar.Brand href="#" className="d-lg-block d-none"><img src="images/logo-brown.png" className='img-fluid' width="110" /></Navbar.Brand>
                        <Col className="d-lg-block d-none"><img src="images/team.png" className="img-fluid" /></Col>
                        <Col id="countdown" className="timerclock me-sm-4">
                                <ul className="d-flex text-center font-acierdisplay list-unstyled text-white m-0">
                                <li className="bg-clock"><span id="days"></span>days</li>
                                <li className="bg-clock"><span id="hours"></span>Hrs</li>
                                <li className="bg-clock"><span id="minutes"></span>Mins</li>
                                <li className="bg-clock"><span id="seconds"></span>Secs</li>
                                </ul>
                            </Col>
                            
                        <Navbar.Brand href="#"><img src="images/logo-orange.png" className='img-fluid' width="110" /></Navbar.Brand>
                        {/* <Nav.Link className='text-white position-relative' href="#"> Connect Wallet <span className="coming-btn">Coming Soon</span></Nav.Link> */}
                        <Nav.Link className='text-white position-relative' onClick={isAuthenticated?logOut:authenticate}> {isAuthenticated?"Disconnect":"Connect Wallet"} </Nav.Link>
                        <Nav.Link className='text-white' href="#cafeine-pump"> NFTs </Nav.Link>
                        <Nav.Link className='text-white' href="https://discord.gg/KDF5HKa3mb" target="_blank"> Discord </Nav.Link>
                    </Nav>
                    </Navbar.Collapse> 
                    <Col className="d-lg-none d-md-none d-sm-none d-block"><img src="images/team.png" className="img-fluid" /></Col>
                    <Navbar.Brand href="#" lg={0} className="d-lg-none d-md-none hide-sm"><img src="images/logo-brown.png" className='img-fluid' width="110" /></Navbar.Brand>    
                </Navbar>
                
            </Row>
        </Container>
        
    );
}


export default Header;
