import React, { Component } from 'react';
import { Button, Col, Container, Row, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import Increase from './Increase';

class Dashboard extends Component {
    state = {
        booked: 0,
        standing: 0,
        totalBooked: 63,
        totalStanding: 37,
        total: 100,
        increaseModal: false,
        menuModal: false,
        increaseMultiplier: 1
    }
    render() {
        return (
            <>


                <Container className="box-dashboard px-4">



                    <Row>
                        <Col>
                            <span onClick={() => this.setState({ menuModal: true })} className="menu-icon"></span>
                            <div onClick={() => this.setState({ increaseModal: true })} >
                                <span className="increase">+{this.state.increaseMultiplier}</span>
                            </div>
                        </Col>
                    </Row>

                    {/*--------------------- M A I N   M E N U ------------------------*/}

                    <Modal isOpen={this.state.menuModal} toggle={() => this.setState({ menuModal: false })}>
                        <ModalHeader toggle={() => this.setState({ menuModal: false })}>Incremento</ModalHeader>
                        <ModalBody className="increase-menu">
                            <p>MENUU</p>
                        </ModalBody>
                    </Modal>


                    {/*------------------ I N C R E A S E   M E N U ------------------------*/}

                    <Modal isOpen={this.state.increaseModal} toggle={() => this.setState({ increaseModal: false })}>
                        <ModalHeader toggle={() => this.setState({ increaseModal: false })}>Incremento</ModalHeader>
                        <ModalBody className="increase-menu">
                            <Row className="mt-5 mb-5">
                                <Col onClick={() => this.setState({ increaseMultiplier: 1, increaseModal: false })}>
                                    <span className="increase-menu-number">+1</span>
                                </Col>
                                <Col onClick={() => this.setState({ increaseMultiplier: 2, increaseModal: false })}>
                                    <span className="increase-menu-number">+2</span>
                                </Col>
                            </Row>
                            <Row className="mt-3 mb-5">
                                <Col onClick={() => this.setState({ increaseMultiplier: 5, increaseModal: false })}>
                                    <span className="increase-menu-number">+5</span>
                                </Col>
                                <Col onClick={() => this.setState({ increaseMultiplier: 10, increaseModal: false })}>
                                    <span className="increase-menu-number">+10</span>
                                </Col>
                            </Row>
                        </ModalBody>
                    </Modal>






                    {/*------------------ T O T A L ------------------------*/}

                    <Row>
                        <Col>
                            <div className="dashboard-total-number">
                                <span>TOTALE</span>
                                <h1>{this.state.booked + this.state.standing}</h1>
                                <span>RESIDUO</span>
                                <h4>{this.state.total - (this.state.booked + this.state.standing)}</h4>
                            </div>
                        </Col>
                    </Row>





                    {/*------------------ C O U N T E R S ------------------------*/}



                    {/*--------------- B O O K E D ------------------------*/}

                    <Row className="dashboard-counter">
                        <Col className="col-2">
                            <a onClick={() => this.setState({ booked: this.state.booked - this.state.increaseMultiplier })}>
                                <img className="dashboard-minus" src="https://i.postimg.cc/xdZY5Ny9/bottone-minus.png" alt="plus icon" />
                            </a>
                        </Col>
                        <Col className="col-8 text-center">
                            <img className="dashboard-counter-icon" src="https://i.postimg.cc/6Q3CkFsB/icona-prenotati.png" alt="booked icon" /><br />
                            <span className="dashboard-book-label">PRENOTATI</span>
                            <h1>{this.state.booked}</h1>
                            <p>RESIDUO: {this.state.totalBooked - this.state.booked}</p>
                        </Col>
                        <Col className="col-2">
                            <a onClick={() => this.setState({ booked: this.state.booked + this.state.increaseMultiplier })}>
                                <img className="dashboard-plus" src="https://i.postimg.cc/5tnnvwJ2/bottone-plus.png" alt="plus icon" />
                            </a>
                        </Col>
                    </Row>

                    {/*-------------- S T A N D I N G ------------------------*/}

                    <Row className="dashboard-counter">
                        <Col className="col-2">
                            <a onClick={() => this.setState({ standing: this.state.standing - this.state.increaseMultiplier })}>
                                <img className="dashboard-minus" src="https://i.postimg.cc/xdZY5Ny9/bottone-minus.png" alt="plus icon" />
                            </a>
                        </Col>
                        <Col className="col-8 text-center">
                            <img className="dashboard-counter-icon" src="https://i.postimg.cc/V6PLqbW2/icona-inpiedi.png" alt="booked icon" /><br />
                            <span className="dashboard-stand-label">IN PIEDI</span>
                            <h1>{this.state.standing}</h1>
                            <p>RESIDUO: {this.state.totalStanding - this.state.standing}</p>
                        </Col>
                        <Col className="col-2">
                            <a onClick={() => this.setState({ standing: this.state.standing + this.state.increaseMultiplier })}>
                                <img className="dashboard-plus" src="https://i.postimg.cc/5tnnvwJ2/bottone-plus.png" alt="plus icon" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Dashboard;