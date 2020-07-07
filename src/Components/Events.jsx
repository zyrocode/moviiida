import React, { Component } from 'react';
import axios from 'axios'
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import Logo from './Logo'
import Footer from './Footer';

class Events extends Component {
    state = {
        events: []
    }
    render() {
        return (
            <Container className="box">
                <Logo />
                <Row>
                    <Col className="col-sm-12 col-md-6 col-lg-4">
                        <Form>
                            <FormGroup>
                                <h6>Seleziona l'evento</h6>
                                <Input type="select" name="select">
                                    {this.state.events.map(event =>
                                        <option>{event.titolo}</option>
                                    )}
                                </Input>
                            </FormGroup>
                            <Button className="login-button mx-auto mt-4">Conferma</Button>
                        </Form>
                    </Col>
                </Row>
                <Footer />
            </Container>
        );
    }

    componentDidMount = async () => {
        try {
            /* let response = await fetch("https://moviiida.it/eventi/api/getEvents.php?idOperatore=2", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "key": "3ezaSyDsHNKg8qU-Z4XE-UTw_gkvjsXrXos_cOP"
                }
            }) */

            const url = "https://moviiida.it/eventi/api/getEvents.php?idOperatore=2"
            let response =  axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "key": "3ezaSyDsHNKg8qU-Z4XE-UTw_gkvjsXrXos_cOP"
                }
            });
            if (response.ok) {
                let- events = await response.json()
                this.setState({
                    events: events
                })
            }
        } catch (error) {
            console.log(error);
        }
        console.log(this.state.events)
    }
}

export default Events;