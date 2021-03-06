import React from 'react';
import './Services.css';
import { Row, Card, Col } from 'react-bootstrap';
import { ImOffice, ImBubble, ImBook } from "react-icons/im";

const Services = () => {
    return (
        <div className="sevices my-5">
            <div className="container">
                <div className="services mb-5 text-light">
                    <h1>Our Services</h1>
                    <p className="text-danger">We can help you with,</p>
                </div>
                <div className="mb-5">
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="fs-1"><ImBook /></Card.Title>
                                    <Card.Title>Coaching</Card.Title>
                                    <Card.Text className="px-5 py-3">We provide you the best coaching in you town. All you need to choose a career path.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="fs-1"><ImBubble /></Card.Title>
                                    <Card.Title>Consultation</Card.Title>
                                    <Card.Text className="px-5 py-3">We provide you the best consultation about career path. Our consultation is life changing.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="fs-1"><ImOffice /></Card.Title>
                                    <Card.Title>Life Programs</Card.Title>
                                    <Card.Text className="px-5 py-3">We also organize live events on career track that helps students having quic overview of growing.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>

    );
};

export default Services;