import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const [currentPage, handlePageChange] = useState("About");
    
    const renderPage = () => {
        switch (currentPage) {
        case "About":
            return <About />;
        case "Contact":
            return <Contact />;
        case "Portfolio":
            return <Portfolio />;
        case "Resume":
            return <Resume />;
        default:
            return <About />;
        }
    };
    
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navba-brand-">
            <a className="navbar-item" rel="noreferrer" target="_blank" href="https://github/com/jheeebert?tab=repositories">
                <span className="content is-large">Joshua M. Hebert</span></a>
            </div>
        </nav>
        {/* Pass the state value and the setter as props to NavTab  */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Calling the renderPage function in the current page */}
        <main className="main-content">
            <div>{renderPage()}</div>
        </main>
        </div>
    );
    }
    export default Header;