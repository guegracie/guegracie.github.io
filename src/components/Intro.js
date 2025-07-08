import React from 'react';
import "../styles/Intro.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Intro = () =>{
        const el = useRef(null);

        useEffect(() => {
            if (el.current) {
            const typed = new Typed(el.current, {
                strings: ["hi, welcome! i'm <span class='intro-name'> gracie.</span>"],
                typeSpeed: 100,
                startDelay: 300,
                showCursor: true, 
                cursorChar: "|",
                contentType: 'html',
            });
            return () => {
                typed.destroy();
            };
          }
        }, []);
        return (
            <div id="intro">
                <div className='intro-container'>
                <div>
                <img src={"/assets/blue-heart2.gif"} alt="blueheart" className="intro-img" />
                </div>
                <div className='intro-typed-wrapper'>
                <span ref={el} className="intro-title"></span>
                </div>
                <div className='intro-subtitle'>i try to create things sometimes.</div>
                <div className='intro-desc'> I’m passionate about technology and driven to grow across multiple domains, 
                    with a strong interest in contributing to mission-driven, collaborative teams. Whether through coding, problem-solving, or cross-functional teamwork, I'm eager to bring value to 
                    innovative projects while continuing to expand my technical and professional skill set.
                </div>
                <a
                    href="mailto:gracielaguev7@gmail.com"
                    className='intro-contact'
                >
                    <MailOutlineIcon style={{ fontSize: 30,}} />
                    {" Say hi! "}
                </a>
                </div>
            </div>
        );
}

export default Intro;
