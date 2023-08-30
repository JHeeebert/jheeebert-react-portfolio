// Import React and Carousel components
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Import components to use in carousel
import ScrollDown from "../scroll-down/ScrollDown";
// Import styles to use in carousel
import "./carousal.css"
// Import images to use in carousel
import slide1 from "../../assets/img/slides/slide1.jpg";
import slide2 from "../../assets/img/slides/slide2.jpg";
import slide3 from "../../assets/img/slides/slide3.jpg";
import slide4 from "../../assets/img/slides/slide4.jpg";


// CustomCarousel component to render the carousel
const CustomCarousel = () => {
    return (
        <div className='home'>
            <Carousel controls={false} indicators interval={2500} pause={false}>
                {/* Map over an array of images in slide show */}
                {[slide1, slide2, slide3, slide4].map((slide, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100 custom-img" src={slide} alt={`Slide ${index + 1}`} />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <ScrollDown />
        </div>
    );
};
// Export CustomCarousel component
export default CustomCarousel;