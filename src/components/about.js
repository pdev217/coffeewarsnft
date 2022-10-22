import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class About extends Component{
    render(){
        
        return(
            <Container fluid className="pt-4 pb-2 w-75" id="about">
                <Row>
                    <Col className="w-100 text-center mx-auto">
                            <Col className="w-100 position-relative"> <img src="images/bg-heading.png" className="img-fluid bg-about" /> 
                            <h1 className="font-acierdisplay font-weight600 text-purple shadow-white fontsize5-5vmax letterspace1px mb-0 position-absolute center-hd"> About </h1> </Col>
                                <p className="text-lightyellow font-acierdisplay fontsize2-5vmax lineheight1"> 
                                <span className="text-red fontsize2-5vmax d-block"> COFFEE WARS </span> is a RAuCOUS comedy feature film <br/> set in the world of competitive baristas, <br/> In Which Baristas From Around The world <br/> compete to be crowned <span className="text-red d-block"> world barista champion. </span>  
                            </p>
                            <p className="text-lightyellow font-acierdisplay fontsize2-5vmax lineheight1"> It's the story of a ragtag team <br/> who take on the status quo <br/><span className="text-lightgreen d-block"> to make lattes the vegan way: <br/> without cow’s milk </span> to help curb the negative impact <br/> of the dairy industry on climate change. </p>
                            <p className="text-lightyellow font-acierdisplay fontsize2-5vmax lineheight1"> The Movie Was Paid For by <span className='text-lightgreen d-block'> The Good People Behind Veginvest.  </span> This film Promotes their Message. <br/> <span className='text-red'> Go to </span> <span className='text-lightgreen'> Veginvest.com </span> <span className='text-red'> To learn More. </span>  </p>
                            <img src="images/veginvest-logo.png" className="img-fluid mb-3" width={150} />
                            <p className="text-lightyellow font-acierdisplay fontsize2-5vmax lineheight1 mb-1"> This nft Campaign will fund <br/> the release of <span className="text-lightred"> Coffee Wars</span> To movie theaters and streamers <br/> and Help finance sequel films in this caffeine Saga! </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default About;