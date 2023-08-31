// Import React and the APP css file
import React from "react";
import "./App.css";
// Import Components to use in App
import NavBar from "./components/navBar/NavBar";
import CustomCarousel from "./components/carousel/Carousel";
import HomeMessage from "./components/home-message/HomeMessage.Js"  
// Import built in React components to use in App
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Slide from "react-reveal/Slide";
// Import View folders to use in App
import About from "./views/about/About";
import Skills from "./views/skills/Skills";
import Portfolio from "./views/portfolio/Portfolio";
import Contact from "./views/contact/Contact";
import ContactForm from "./views/contact-form/ContactForm";
import Resume from "./views/resume/Resume";
import Footer from "./components/footer/Footer";

// Helper function to render section animations
function SectionAnimation({ animationType, content }) {
  return (
    <div>
      <div className="section-container rounded">
        {/* Render the animation with content */}
        {animationType && React.createElement(animationType, { duration: 1000, distance: "20px" }, content)}
      </div>
    </div>
  );
}
// App function to render the App
function App() {
const sections = [
      { component: NavBar },
      { component: CustomCarousel },
      { component: HomeMessage },
      {
        component: (
          <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallax/background.jpg")}
            bgImageAlt=""
            strength={-200}
          >
            <div>
              <div className="section-container rounded">
                <Fade left duration={1000} distance="20px">
                  <About />
                </Fade>
              </div>
              </div>
          </Parallax>
        ),
      },
      { views: Skills, animationType: Fade },
      { views: Portfolio, animationType: Slide },
      { views: Resume, animationType: Slide },
      { views: Contact, animationType: Fade },
      { views: ContactForm, animationType: Fade },
      { views: Footer, animationType: Fade },
    ];

return (
    <div className="App"
      style={{ position: "relative" }}>
      {sections.map((section, index) => (
        <SectionAnimation key={index}
          animationType={section.animationType}
        >
          {section.component && <section.component />}
          {index === sections.length - 2 && <hr />}
        </SectionAnimation>
      ))}
    </div>
  );
}
export default App; 