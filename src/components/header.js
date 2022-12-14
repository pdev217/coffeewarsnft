import React,{useEffect, useState} from 'react';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useMoralis } from "react-moralis";
//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

    const { authenticate, isAuthenticated, account, logout } = useMoralis();
    const [modalShow, setModalShow] = useState(false);
    
    const logOut = async () => {
        await logout();
        console.log("logged out");
    }

    const login = async (type) => {
        if(type == "metamask") {
            await authenticate();
        }else {
            await authenticate({ provider: "walletconnect", chainId: 1 })
            .then(function (user) {
              console.log(user?.get("ethAddress"));
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        setModalShow(false)
    }

    let flag = 0;
    // useEffect(() => {
    //     if(window.ethereum) {
    //         if(!account) {
    //             authenticate()
    //         }
    //     }else {
    //         if(flag == 0) {
    //             toast.warn('Please install 🦊Metamask');
    //         }
    //     }
    //     flag ++;
    // }, [account, authenticate])
  

    console.log("---isAuthenticated", isAuthenticated)
    console.log("---account", account)
    
    return(
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Modal
                size="md"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header className='border-0'>
                    <Modal.Title id="contained-modal-title-vcenter" className='w-100'>
                        <div className='d-flex align-items-center justify-content-between w-100'>
                            Select Wallet
                            <a href='#' className='btn-default'>
                                <img  src='/icons/close.png' alt='close' onClick={() => setModalShow(false)}/>
                            </a>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button className='wallet w-100' onClick={() => login('metamask')}>
                        <img src="/icons/metamask.webp" alt='metamask' />
                      Metamask  
                    </Button>
                    <Button className='wallet w-100' onClick={() => login('walletConnect')}>
                    <img src="/icons/wallet_connect.png" alt='metamask' />
                      Wallet Connect  
                    </Button>
                </Modal.Body>
            </Modal>

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
                            <Col id="countdown" className="timerclock me-sm-4 position-relative">
                                <ul className="d-flex text-center font-acierdisplay list-unstyled text-white m-0">
                                    <li className="bg-clock"><span id="days"></span>days</li>
                                    <li className="bg-clock"><span id="hours"></span>Hrs</li>
                                    <li className="bg-clock"><span id="minutes"></span>Mins</li>
                                    <li className="bg-clock"><span id="seconds"></span>Secs</li>
                                </ul>
                                <div className='bean-fall'>
                                    <img src="images/Beans-fall-Brewing.gif" />
                                </div>
                            </Col>
                                
                            <Navbar.Brand href="#"><img src="images/logo-orange.png" className='img-fluid' width="110" /></Navbar.Brand>
                            {/* <Nav.Link className='text-white position-relative' href="#"> Connect Wallet <span className="coming-btn">Coming Soon</span></Nav.Link> */}
                            <Nav.Link className='text-white position-relative' onClick={() => isAuthenticated?logOut():setModalShow(true)}> {isAuthenticated?"Disconnect":"Connect Wallet"} </Nav.Link>
                            <Nav.Link className='text-white' href="#cafeine-pump"> NFTs </Nav.Link>
                            <Nav.Link className='text-white' href="https://discord.gg/KDF5HKa3mb" target="_blank"> Discord </Nav.Link>
                        </Nav>
                        </Navbar.Collapse> 
                        <Col className="d-lg-none d-md-none d-sm-none d-block"><img src="images/team.png" className="img-fluid" /></Col>
                        <Navbar.Brand href="#" lg={0} className="d-lg-none d-md-none hide-sm"><img src="images/logo-brown.png" className='img-fluid' width="110" /></Navbar.Brand>    
                    </Navbar>
                    
                </Row>
            </Container>
            <a className='text-white position-relative font-acierdisplay text-decoration-none mobile-wallet-connect d-md-none' onClick={() => isAuthenticated?logOut():setModalShow(true)}> {isAuthenticated?"Disconnect":"Connect Wallet"} </a>
        </div>
        
    );
}


export default Header;
