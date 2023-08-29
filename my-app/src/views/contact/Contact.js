import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import "./contact.css";

// Contact component to render the contact section
const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    {/* Contact Form */}
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:joshua.jheeebertwd@gmail.com" target='blank' rel='noopener noreferrer'>
                                <Button variant="outline-danger" title="joshua.jheeebertwd@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/jheeebert/" target='blank' rel='noopener noreferrer'>
                                <Button variant="outline-primary" title="Visit my LinkedIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://github.com/jheeebert" target='blank' rel='noopener noreferrer'>
                                <Button variant="outline-dark" title="My other projects">
                                    <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.twitter.com/jheeebert" target='blank' rel='noopener noreferrer'>
                                <Button variant="outline-info" title="Tweets are welcomed!">
                                    <i className="fab fa-twitter"></i> Twitter
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.instagram.com/jheeebert" target='blank' rel='noopener noreferrer'>
                                <Button variant="outline-danger" title="Follow me on Instagram">
                                    <i className="fab fa-instagram"></i> Instagram
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default Contact;