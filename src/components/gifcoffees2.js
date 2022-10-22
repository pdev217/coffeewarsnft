import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class CoffeeGif2 extends Component{
    render(){
        return(
            <Container fluid>
                <Row>   
                    <Col lg={12} className="p-0 animate__animated animate__fadeIn wow animated_duration2s">
                    <img src="images/coffee-cup-smash.gif" className="img-fluid w-100" />
                    </Col> 
                </Row>
        </Container>
        );
    }
}


export default CoffeeGif2;