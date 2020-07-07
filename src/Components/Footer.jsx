import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'

class Footer extends Component {
    state = {}
    render() {
        return (
            <Row>
                <Col className="col-sm-12 col-md-6 col-lg-4 footer mt-4">
                    <h6 className="text-center">POWERED BY</h6>
                    <img className="login-4digital mx-auto" src="https://i.postimg.cc/9M92NNzM/logo-4digital-white.png" alt="4digital logo" />
                </Col>
            </Row>
        );
    }
}

export default Footer;