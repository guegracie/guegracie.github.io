import React from "react";
import "./SOCLab.css";

class SOCLab extends React.Component {
render() {
const one = (
        <p> I built a hands-on Security Operations Center (SOC) lab using Windows and Kali Linux virtual machines to simulate
             and detect brute-force attacks in a production-style environment. With Wazuh for detection and Shuffle SOAR 
             for automated response, all components were deployed and integrated using Azure cloud infrastructure. </p>
    );

const two = (
    
        <p> Wazuh · Shuffle · TheHive · Kali Linux · Windows 10 · Sysmon · SMB Protocol · Azure </p>
);
const three = (
    <ul className="pinned-list">
        <li>Simulated brute-force attack (MITRE ATT&CK T1110) from Kali Linux using crackmapexec over SMB to the Windows VM.</li>
        <li>Attack generated multiple Event ID 4625 (failed login attempts), logged via Sysmon.</li>
    </ul>
);

const four = (
    <ul className="pinned-list">
        <li> Created a custom decoder and rule (rule ID 100100) triggered when the threshold was exceeded.</li>
        <li> Wazuh collected the logs and detected excessive login failures. </li>
    </ul>
);

const five = (
    <ul className="pinned-list">
        <li>Parsed and enriched alert data with AbuseIPDB. </li>
        <li>Sent an email alert to the SOC analyst. </li>
        <li>Created a new case in TheHive for further investigation. </li>
    </ul>
);


return (
    <div id="soc-lab">
    <div className="soc-title">
        <h1>At Home SOC Lab</h1>
    </div>
        <div className="soc-content">
        {one}
        </div>
        <div className="soc-subtitle">
            <h2>🛠️ Tech Stack</h2>
        </div>
        <div className="soc-content">
        {two}
        </div>
        <div className="soc-subtitle">
            <h2>🔍 Attack Simulation & Detection Pipeline </h2>
        </div>
        <div className="soc-subtitle">
            <h2> 1. Attack Execution </h2>
            {three}
        </div>
        <img src={"/assets/Kali_Linux_SMB_Attack.png"} alt="Kali Linux SMB Attack" className="soc-attack-image" />
        <p className="soc-attack-desc"> Simulated SMB brute-force attack using Kali Linux </p>
        <img src={"/assets/WindowsVM_4625_EventID.png"} alt="Windows VM Event ID 4625" className="soc-event-image" />
        <p className="soc-attack-desc"> Windows VM Event Viewer shows failed login attempts (Event ID 4625) </p>
        <img src={"/assets/Wazuh_Logs_4625.png"} alt="Wazuh Logs Event ID 4625" className="soc-wazuh-logs-image" />
        <p className="soc-attack-desc"> Wazuh logs showing Event ID 4625 for failed login attempts </p>
        <div className="soc-subtitle">
            <h2> 2. Detection via Wazuh </h2>
        </div>
        <div className="soc-content"> 
            {four}
        </div>
        <img src={"/assets/wazuh_custom_rule.png"} alt="Wazuh Custom Rule" className="soc-wazuh-rule-image" />
        <p className="soc-attack-desc"> Custom Wazuh rule to detect brute force attacks </p>
        <img src={"/assets/wazuh-rule-detected.png"} alt="Wazuh Rule Logs" className="soc-wazuh-detected-image" />
        <p className="soc-attack-desc"> Wazuh logs showing the custom rule (100100) triggered by the brute force attack </p>
        <div className="soc-subtitle">
            <h2> 3. Automated Response via Shuffle </h2>
             <p>The alert initiated a Shuffle workflow, which:</p>
        </div>
        <div className="soc-content">
            {five}
        </div>
        <img src={"/assets/Shuffle_Results.gif"} alt="Shuffle Results" className="soc-shuffle-results-gif" />
        <p className="soc-attack-desc"> Shuffle workflow results showing alert enrichment and incident creation </p>
        <img src={"/assets/Shuffle_Email_Alert.png"} alt="Shuffle Email Alert" className="soc-shuffle-email-image" />
        <p className="soc-attack-desc"> Shuffle sends an email alert to the analyst with incident details </p>
        <img src={"assets/thehive_case.png"} alt="TheHive Case" className="soc-thehive-case-image" />
        <p className="soc-attack-desc"> TheHive case created for further investigation </p>
        <div className="soc-subtitle">
        <h2>What I Learned </h2>
        <ul>
            <li>Built a complete detection-to-response pipeline using open-source tools</li>
            <li>Gained hands-on experience with Wazuh custom rules and decodersw</li>
            <li>Learned to design scalable SOAR workflows with Shuffle</li>
            <li>Improved understanding of log collection, correlation, and triage</li>
            <li>Strengthened my grasp of SOC processes and incident response</li>
            </ul>
            </div>
        </div>
    );
    }
}

export default SOCLab;