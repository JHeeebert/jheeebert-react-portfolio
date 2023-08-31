// Import React 
import React from "react";
// Import profile image to use in About page
import Profile from "../../assets/img/profile/profile.jpg";
// Import "about" css Styles
import "./about.css";
// Import react-bootstrap components to use in About page
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// Helper function to render a button with an external link
const ExternalLinkButton = ({ href, text, variant }) => {
    <a href={href} target="_blank" rel="noopener noreferrer">
        <Button className="m-2" variant={variant}>
            {text}
        </Button>
    </a>
};

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <main className="d-flex justify-content-center flex-wrap">
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* Profile Picture */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        {/* Right column with details for about me */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded align-text-left">
                                {/* Description */}
                                Hi there! I am <strong>&nbsp;Joshua Hebert</strong>
                                <br />A passionate programmer and a learner, born and brought up on the east coast the United States.
                                I am a Full Stack Web Developer with React.js, Express.js, Node.js, and MongoDB as my tech stack.
                                <br />
                                I love sports and gaming. In my free time, I play video games, watch sports, and travel.
                                I also love to eat at new restaurants and take photos of the places I visit.
                                <br />
                                I am currently enrolled in the UNCC Coding Bootcamp and am looking for a full-time position as a Web Developer.
                                <br />
                                <br />
                                {/* Buttons to download resume and view links to my other work */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary">
                                                Let's Connect
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <ExternalLinkButton href="https://www.linkedin.com/in/jheeebert/" text="View My LinkedIn Profile" variant="primary" />
                                    </div>
                                    <div>
                                        <ExternalLinkButton href="https://github.com/jheeebert" text="View My GitHub Profile" variant="primary" />
                                    </div>
                                    <div>
                                        <ExternalLinkButton href="https://drive.google.com/file/d/1-10000000000000000000/view?usp=sharing" text="View My Resume" variant="primary" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
</main>
            </div>
        </div>
    );
};
// Export About component
export default About;
