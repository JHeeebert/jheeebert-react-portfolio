import React from "react";
import Loader from "react-loader-spinner";

// This component is a preloader for the page that will display a loading icon 
// that will spin until the page is loaded and time out after 3 seconds
export default function PreLoader() {
    return (
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
    );
}