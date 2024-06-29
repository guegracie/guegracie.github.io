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
                <div>
                <img src={"/assets/blue-heart2.gif"} alt="blueheart" className="intro-img" />
                </div>
                <span ref={el} className="intro-title"></span>
                <div className='intro-subtitle'>i try to create things sometimes.</div>
                <div className='intro-desc'>I'm deeply interested in product management, cloud computing, artificial intelligence, data analysis, and machine learning. I’m constantly seeking ways to expand my skills and contribute to innovative projects.</div>
                <a
                    href="mailto:gracielaguev7@gmail.com"
                    className='intro-contact'
                >
                    <MailOutlineIcon style={{ fontSize: 30,}} />
                    {" Say hi! "}
                </a>
            </div>
        );
}

export default Intro;
