import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class BehindFilm extends Component{
    render(){
        return(
            <Container className="pt-5 pb-5">
                <Row>   
                    <Col sm={12} className="w-100 position-relative text-center ">
                        <img src="images/behind-hd.png" className="img-fluid" style={{ width: '81vmax' }} />
                        <h1 className="font-acierdisplay shadow-white font-weight500 text-orange fontsize5vmax letterspace8px mb-0 position-absolute cafe-pump-hd align-items-center d-flex justify-content-center center-hd mt-2"> Who is Behind This? </h1>
                    </Col>

                    <Col sm={12} className="w-100 text-center mt-4">
                      <p className="text-white font-acierdisplay fontsize2-5vmax lineheight1-3"> The Filmmakers Behind The Coffee Wars NFT are hightly experienced moviemakers and the creators of many studio and Independent Films. </p>
                    </Col>

                    
                    <Col sm={6} className="mt-5">
                      <Col className="w-100 text-center">
                            <Col className="mb-4 img-effect overflow-hidden" style={{ boxShadow: '1px 1px 13px 2px #fff' }}><img src="images/img02.jpg" className="img-fluid" /></Col>
                            <h4 className="text-lightred font-acierdisplay mb-2"> Randall Miller </h4>
                            <p className="text-white font-sourcesans font-weight600  max-width300 mx-auto fontsize1-5vmax"> Writer/Director Randall Miller is the director of CBGB, Bottle Shock, Coffee Wars, Houseguest and Class Act. Check him out here: </p>
                            <a href="https://www.imdb.com/name/nm0589168/" target="_blank" className="text-black bg-yellow rounded d-inline-block font-sourcesans text-decoration-none px-5 pt-2 pb-2 font-weight700 hoverbtn3"> IMDb </a>
                      </Col>
                  </Col>

                  <Col sm={6} className="mt-5">
                      <Col className="w-100 text-center">
                            <Col className="mb-4 img-effect overflow-hidden" style={{ boxShadow: '1px 1px 13px 2px #fff' }}><img src="images/img03.jpg" className="img-fluid" /></Col>
                            <h4 className="text-lightred font-acierdisplay mb-2"> Michael Davis </h4>
                            <p className="text-white font-sourcesans font-weight600 fontsize1-5vmax max-width300 mx-auto"> Writer/Director Michael Davis is the director of Shoot 'Em Up, 100 Girls and 8 Days A Week. Check him <span className="d-sm-block"> out here: </span> </p>
                            <a href="https://www.imdb.com/name/nm0205157/" target="_blank" className="text-black bg-yellow rounded d-inline-block font-sourcesans text-decoration-none px-5 pt-2 pb-2 font-weight700 hoverbtn3"> IMDb </a>
                      </Col>
                  </Col>


                </Row>
        </Container>
        );
    }
}


export default BehindFilm;