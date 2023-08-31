import React from "react";
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logo.jpg';
import "./navBar.css";

// Navbar Component is a wrapper for the Navbar Component 
const NavBarComponent = () => {
    return (
        <>
        {/* NavBar options to make it responsive */}
            <NavBar collapseOnSelect expand="md"
                fixed="top"
                className="animate-navbar nav-theme justify-content-between"
                variant="dark">
                <NavBarComponent.Brand href="#home">
                    <img src={Logo} alt="logo" className="logo" />
                </NavBarComponent.Brand>
                <NavBarComponent.Toggle aria-controls="responsive-navbar-nav" />
                <NavBarComponent.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </NavBarComponent.Collapse>
            </NavBar>
        </>
    );
};
// Export of the NavBar Component
export default NavBar;