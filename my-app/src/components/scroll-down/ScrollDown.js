import React from "react";
import styled, { keyframes } from "styled-components";

// Define a keyframes animation for the bounce effect seen on the scroll down arrow
const bounceAnimation = keyframes`
    0%, 100% {
        bottom: 0;
    }
    50% {
        bottom: 100px;
    }
`;
// Styled component for the scroll down arrow
// This component will be rendered in the Carousel component
const MyScroll = styled.div`
    position: relative;
    z-index: 1;
    bottom: 1.6rem;
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: transparent;
    font-weight: bold;
    text-shadow: 1px 1px 1px #45a29e; 
    color: #fff;
    animation: 3s linear 0s infinite normal none running ${bounceAnimation};
    .turn {
        font-size: 30px;
        cursor: pointer;
        transform: rotate(90deg);
    }
`;
// ScrollDown component to render the scroll down arrow
const ScrollDown = () => {
    return (
        <MyScroll>
            <div>
                {/* Link to the "about" section with a double down arrow */}
                <a href="#about" className="fas fa-angle-double-down">
                </a>
            </div>
        </MyScroll>
    );
}
// Export the ScrollDown component
export default ScrollDown;
