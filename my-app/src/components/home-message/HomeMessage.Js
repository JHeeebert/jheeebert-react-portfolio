import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

// Styles for the text in the carousel
const MyHomeMessage = styled.h1`
`;
const HomeMessage = () => {
    return (
        <MyHomeMessage>
            <div className="titleMessage">
                <div className="heading">
                    <div className="main text-center mb-3">
                        Hello, my name is
                        <br />
                        <span>
                            <strong>Joshua Hebert</strong>
                        </span>
                    </div>
                    <div className="subMesaage">
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Gamer", "World Traveler", "Photographer", "Tech News Junkie"],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </div>
                </div>
            </div>
        </MyHomeMessage>
    );
};
// Export HomeMessage component
export default HomeMessage;