import React from "react";
import spinner from "../../img/spinner.gif";
import './Loader.css'
const FullPageLoader = () => {
    return (
        <div className="fp-container">
            <img src={spinner} className="fp-loader" alt="loading" />
        </div>
    );
};

export default FullPageLoader;