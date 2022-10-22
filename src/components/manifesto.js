import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';



class Manifesto extends Component{
    render(){
        return(
            <Container className="pt-4 pb-5" id="manifesto">
                <Row>
                    <Col sm={12} className="w-100 position-relative text-center ">
                          <img src="images/manifest-hd.png" className="img-fluid" style={{ width: '83vmax' }} />
                          <h1 className="font-acierdisplay font-weight600 text-red fontsize6vmax letterspace2px mb-0 position-absolute center-hd mt-2" style={{ textShadow: '-4px -4px 2px #fecc04' }}> Our Manifesto </h1>
                    </Col>

                    <Col sm={12} className="text-center mx-auto" style={{ maxWidth: '900px' }}>
                      <h2 className="text-lightyellow font-acierdisplay letterspace1px"> Pure and Simple </h2>
                      <p className="text-white font-acierdisplay lineheight1-5 fontsize1-5vmax mt-3"> The only way to make lasting change is take on the fight and make it happen... don’t wait for someone else to say you can. At <span className="text-orange"> COFFEE WARS </span> we believe that storytellers and artists deserve an outlet where they can be valued and supported without having to bow to the machine of big media. So we’re tilting the model on its head and testing a new architecture using NFTs to connect storytellers directly with their audience to essentially decentralize content production. And moreover we want to share the rewards directly with those that support us... Both financially and from a worldview perspective. </p>
                      <p className="text-white font-acierdisplay lineheight1-5 fontsize1-5vmax mt-3"> We all need to do our part to curb global warming. This is the message of <br/>
                      <span className="text-orange">  Coffee wars </span>... But we believe, why not have some fun doing it? </p>
                  </Col> 

                </Row>
            </Container>
  
        );
    }
}


export default Manifesto;