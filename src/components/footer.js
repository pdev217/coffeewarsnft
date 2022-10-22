import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class Footer extends Component{
    render(){
        return(
            <Container className="pb-4" id="discord">
                <Row>
                    <Col sm={6} className="text-sm-start text-center">
                        <h5 className="mb-0 text-white font-acierdisplay letterspace1px"> Connect With Us On Discord: <a href="https://discord.gg/KDF5HKa3mb" target="_blank"><img src="images/discord.png" /> </a> </h5> 
                    </Col>
                    {/*https://discord.gg/JaY95Qjs*/}
                    <Col sm={6} className="text-sm-end text-center mt-sm-0 mt-4">
                        <h5 className="mb-0 text-white font-acierdisplay"> &copy; 2022 Foam Productions LLC </h5>
                    </Col>
                </Row>
        </Container>
        );
    }
}


export default Footer;