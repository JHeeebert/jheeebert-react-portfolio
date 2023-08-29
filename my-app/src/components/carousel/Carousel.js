// Import React and Carousel components
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Import components to use in carousel
import ScrollDown from "../scroll-down/ScrollDown";
// Import styles to use in carousel
import "./carousel.css"
// Import images to use in carousel
import slide1 from "../../assets/img/slide1.jpg";
import slide3 from "../../assets/img/slide3.jpg";
import slide4 from "../../assets/img/slide4.jpg";
import slide5 from "../../assets/img/slide5.jpg";
// CustomCarousel component to render the carousel
const CustomCarousel = () => {
    return (
        <div className='home'>
            <Carousel controls={false}>
                {/* Map over an array of images in slide show */}
                {[slide1, slide5, slide3, slide4].map((slide, index) => {
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