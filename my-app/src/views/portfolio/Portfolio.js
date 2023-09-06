import React from 'react';
// Import time-line component from react
import { Timeline, Events, UrlButton, ImageEvent, createTheme, themes } from "@merc/react-timeline";
// Import react-bootstrap components to use in Portfolio page
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
// Import CSS file for styling
import "./portfolio.css";
// Import image links for projects
import CarBidz from "../../assets/img/portfolio/carBidzPortfolioPhoto.png";
import MarvelFlicks from "../../assets/img/portfolio/marvelFlicksPortfolioPhoto.png";
import WeatherApp from "../../assets/img/portfolio/weatherAppPortfolioPhoto.png";
import SocialMediaApi from "../../assets/img/portfolio/socialMediaApiPortfolioPhoto.png";
import TextEditor from "../../assets/img/portfolio/textEditorPortfolioPhoto.png";
// Import Skills SVG's to use in Portfolio page
import CssIcon from "../../assets/img/skills/cssIcon.svg";
import HtmlIcon from "../../assets/img/skills/htmlIcon.svg";
import JavascriptIcon from "../../assets/img/skills/javaScriptIcon.svg";
import MongodbIcon from "../../assets/img/skills/mongoDbIcon.svg";
import TailWindCssIcon from "../../assets/img/skills/tailwindsCssIcon.svg";
import NpmIcon from "../../assets/img/skills/npmIcon.svg";
import HandleBarsIcon from "../../assets/img/skills/handlebarsIcon.svg";

// Create theme for timeline
const customTheme = createTheme(themes.default, {
    card: {
        backgroundColor: "#efefef",
    },
    date: {
        backgroundColor: "#ec4b4f",
    },
    marker: {
        borderColor: "#070d59",
    },
    timelineTrack: {
        backgroundColor: "#ec4b4f",
    },
});
// Reusable function to render project details
const PortfolioDetails = ({
    date, 
    title,
    imageSrc,
    description,
    features,
    technologies,
    githubUrl,
    deployedUrl,
}) => (
    <ImageEvent date={date} className="text-center" text={title} src={imageSrc} alt={title}>
        <div className="d-flex justify-content-between flex-column mt-1">
            <div>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                            PROJECT DETAILS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> {description}
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <hr />
                                <strong>Technologies:</strong>
                                <ul className="list-styles pt-1">
                                    {technologies.map((tech, index) => (
                                        <li key={index}><span className="p-2"><Image src={tech.icon} alt={tech.name} rounded className='image-style m-1' />{tech.name}</span></li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        <div className="d-flex justify-content-between flex-column mt-1">
            <UrlButton href={githubUrl} target="_blank" rel="noreferrer">GitHub Repo</UrlButton>
            <UrlButton href={deployedUrl} target="_blank" rel="noreferrer">Deployed URL</UrlButton>
        </div>
        </div>
    </ImageEvent>
);

// Portfolio TimeLine component to render the portfolio section
const PortfolioTimeline = () => {
    return (
        <div id="portfolio">
            <h1 className=" pt-3 text-center font-details-b pb-3">Portfolio</h1>
            <Timeline theme={customTheme}>
                <Events>
                    {/* CarBidz Group Project That allows users to browse, buy, sell, post, and bid on cars */}
                    <PortfolioDetails
                        date="July 2023"
                        title="CarBidz"
                        imageSrc={CarBidz}
                        description="CarBidz is a web application that allows users to browse, buy, sell, post, and bid on cars."
                        features={["This is an application that allows car buyers to search for cars according to make, model, and year. Users will be able to purchase cars in the form of bids."]}
                        technologies={[
                            { 
                                icon: CssIcon,
                                name: "CSS"
                            },
                            {
                                icon: HandleBarsIcon,
                                name: "Handlebars"
                            },
                            {
                                icon: JavascriptIcon,
                                name: "Javascript"
                                },
                            {
                                icon: MongodbIcon,
                                name: "MongoDB"
                                },
                        ]}
                        githubUrl="https://github.com/c0nstantin1990/car-bidz"
                        deployedUrl="https://car-bidz-d6af66a79b60.herokuapp.com/"
                    />
                    {/* MarvelFlicks Group Project That allows users to browse their favorite Marvel movies and look up trailers and reviews before viewing */}
                    <PortfolioDetails
                    date="June 2023"
                    title="MarvelFlicks"
                    imageSrc={MarvelFlicks}
                    description="MarvelFlicks is a web application that allows users to browse their favorite Marvel movies and look up trailers and reviews before viewing."
                    features={["Users can browse their favorite Marvel movies and look up trailers and reviews before viewing"]}
                    technologies={[
                        {
                            icon: TailWindCssIcon,
                            name: "CSS"
                            },
                            {
                                icon: HtmlIcon,
                                name: "HTML"
                                },
                            {
                                icon: JavascriptIcon,
                                name: "Javascript"
                                },
                    ]}
                    githubUrl="https://github.com/jheeebert/marvel-flicks"
                    deployedUrl="https://jheeebert.github.io/marvel-flicks/"
                    />
                    {/* WeatherApp Group Project That allows users to search for a city and view the weather for that city */}
                    <PortfolioDetails
                    date="May 2023"
                    title="WeatherApp"
                    imageSrc={WeatherApp}
                    description="AS A traveler
                    I WANT to see the weather outlook for multiple cities
                    SO THAT I can plan a trip accordingly"
                    features={["User can search for a city and view the weather for that city along with UV index, 5 day forecast and temperature."]}
                    technologies={[
                        {
                            icon: CssIcon,
                            name: "CSS"
                            },
                            {
                                icon: HtmlIcon,
                                name: "HTML"
                                },
                            {
                                icon: JavascriptIcon,
                                name: "Javascript"
                                },
                    ]}
                    githubUrl="https://github.com/jheeebert/weather-app"
                    deployedUrl="https://jheeebert.github.io/weather-app/"
                    />
                    {/* SocialMediaApi Group Project That allows users to search for a user's Twitter, Instagram, and LinkedIn profiles */}
                    <PortfolioDetails
                    date="August 2023"
                    title="SocialMediaApi"
                    imageSrc={SocialMediaApi}
                    description="AS A social media startup
                    I WANT an API for my social network that uses a NoSQL database
                    SO THAT my website can handle large amounts of unstructured data"
                    features={[ "This app can show users and their thoughts, it allows users to add friends and reactions to thoughts, and it allows users to update their own information and delete their account."]}
                    technologies={[
                        {
                            icon: MongodbIcon,
                            name: "MongoDB"
                            },
                            {
                                icon: NpmIcon,
                                name: "NPM"
                                },
                            {
                                icon: JavascriptIcon,
                                name: "Javascript"
                                },
                            ]}
                            githubUrl="https://github.com/JHeeebert/social-media-api"
                            deployedUrl="N/A"
                            />
                            {/* PWA Text Editor that allows users to edit and save text online or offline */}
                            <PortfolioDetails
                            date="August 2023"
                            title="PWA Text Editor"
                            imageSrc={TextEditor}
                            description="AS A developer
                            I WANT to create notes or code snippets with or without an internet connection
                            SO THAT I can reliably retrieve them for later use"
                            features={["The app uses PWA to create notes or code snippets with or without an internet connection. Deployed using Heroku."]}
                            technologies={[
                                {
                                    icon: CssIcon,
                                    name: "CSS"
                                    },
                                    {
                                        icon: HtmlIcon,
                                        name: "HTML"
                                        },
                                    {
                                        icon: JavascriptIcon,
                                        name: "Javascript"
                                        },
                                    ]}
                                    githubUrl="https://github.com/jheeebert/pwa-text-editor"
                                    deployedUrl="https://jheeebert-pwa-text-editor-ddb6fb783130.herokuapp.com/"
                                    />
                </Events>
                </Timeline>
                </div>
                );
            };
            export default PortfolioTimeline;
