import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class CoffeeGif3 extends Component{
    render(){
        return(
            <Container fluid>
                <Row>   
                    <Col lg={12} className="p-0 animate__animated animate__fadeIn wow animated_duration2s">
                    <img src="images/coffee-wars-fills.gif" className="img-fluid w-100" />
                    </Col> 
                </Row>
        </Container>
        );
    }
}


export default CoffeeGif3;