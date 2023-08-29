import React from 'react';
import "./footer.css";
// Footer Component
const Footer = () => {
    return (
        <div>
            <div className="py-2 text-center footer-style">© Joshua Hebert; {new Date().getFullYear()}</div>
        </div>
    );
}
// Export Footer component
export default Footer;