import React, { Component } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import Footer from './Footer';
import Logo from './Logo';

class Login extends Component {
    state = {}
    render() {
        return (
            <>
                <Container className="box">
                    <Logo/>
                    <Row>
                        <Col className="col-sm-12 col-md-6 col-lg-4">
                            <h5 className="text-center mb-3">Esegui il login per accedere</h5>
                            <Form>
                                <FormGroup className="mb-0">
                                    <Input className="login-email" type="email" name="email" placeholder="Email address" />
                                </FormGroup>
                                <FormGroup className="mt-0">
                                    <Input className="login-password" type="password" name="password" placeholder="Password" />
                                </FormGroup>
                                <Button className="login-button mx-auto">SIGN IN</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Footer/>
                </Container>
            </>
        );
    }
}

export default Login;