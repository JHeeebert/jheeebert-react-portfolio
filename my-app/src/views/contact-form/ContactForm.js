import React, { useState } from "react";
import "./contactForm.css";
import Swal from "sweetalert2";
// Create validation function for email address
const validateEmail = (email) => {
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};
function ContactForm() {
    const initialState = {
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
        file: null,
    };
    // Set formState to initial state
    const [formState, setFormState] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState("");
    // Handle input changes
    const handleInputChange = (e) => {
        // Get name and value from target
        const { name, value, type } = e.target;
        const inputValue = type === "file" ? e.target.files[0] : value;
        // Update formState
        setFormState({
            ...formState,
            [name]: inputValue,
        });
    };
    // Handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, phoneNumber, message } = formState;
        // Check if form has everything
        if (!name || !email || !message) {
            setErrorMessage("Please fill out all required fields.");
            return;
        }
        // Check if email is valid
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }
        // Check if phone number is valid
        if (phoneNumber.length !== 10) {
            setErrorMessage("Please enter a valid 10-digit phone number.");
            return;
        }
        // Check if message is valid
        if (message.length < 5) {
            setErrorMessage("Please enter a valid message of atleast 5 characters.");
            return;
        }
        // If all is well, send the data to the server
        setErrorMessage("");
        setFormState(initialState);
        Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out to me. I will get back to you as soon as possible.",
            icon: "success",
            confirmButtonText: "OK",
        });
    };
    return (
        <div className="contact-form">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <form id="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" defaultValue={formState.name} onBlur={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" name="email" defaultValue={formState.email} onBlur={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" className="form-control" name="phoneNumber" defaultValue={formState.phoneNumber} onBlur={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" rows="5" defaultValue={formState.message} onBlur={handleInputChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
