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

                    <div className="cert-card">
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
                    <div className="cert-card">
                    <div className="certification-title">
                        <a href="https://www.credential.net/d75216e2-bd2c-4b84-a9e8-cc351a5a47fd#acc.RD06z5iZ"
                           target = "_blank"
                           rel = "noopener noreferrer"
                        >
                          DoD Cyber Sentinel Challenge Participant
                        </a>
                    </div>
                    <div className="certification-desc">
                        <span>June 2025 | Placed 717 of 2,155 </span>
                    </div>
                    <a href="https://www.credential.net/d75216e2-bd2c-4b84-a9e8-cc351a5a47fd#acc.RD06z5iZ"
                       target="_blank"
                       rel="noopener noreferrer"
                       >
                        <img src="/assets/dod_badge.png"
                        alt ="DoD Cyber Sentinel Challenge Badge"
                        width="150"
                        height="150"
                        />
                       </a>
                </div>
                </div>
            </div>

        );

    }   
}

export default Certifications;