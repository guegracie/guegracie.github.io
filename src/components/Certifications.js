import React from "react";
import "../styles/Certifications.css";

class Certifications extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
    }


    render () {
        return (
            <div id="certifications">
                <div className="section-header">
                    <span className="section-title">certifications</span>
                </div>
                <div className="certifications-content">
                    <div className="certification-title">
                        <a href="https://www.credly.com/badges/ee6a6f68-85a5-412e-b44d-613fabafe6ae/public_url">CompTIA Security+ (SY0-701)</a>
                    </div>
                    <div className="certification-desc">
                        <span>May 2025 - May 2028 </span>
                    </div>
                    <div 
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id="ee6a6f68-85a5-412e-b44d-613fabafe6ae"
                    data-share-badge-host="https://www.credly.com"></div>
                </div>
            </div>

        );

    }   
}

export default Certifications;