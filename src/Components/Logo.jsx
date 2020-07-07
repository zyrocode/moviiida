import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'

class Logo extends Component {
    state = {}
    render() {
        return (
            <Row>
                <Col className="col-sm-12 col-md-6 col-lg-4">
                    <img className="login-logo mx-auto" src="https://i.postimg.cc/Xq76KJK3/logo.png" alt="moviiida logo" />
                </Col>
            </Row>
        );
    }
}

export default Logo;
