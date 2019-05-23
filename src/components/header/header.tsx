import React from "react";
import { TechColofon } from './techcolofon/colofon';
import { TimelineFrame } from './timeline/timeline';
 
export const Header = () => {
    return (
        <header>
            <div className='exlibris'>
                <img src={"./images/avatar.png"} height="40px" width="45px"/>
                <span className='my-name'>W Blijlevens</span>
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/wesley-blijlevens" title='View my Linkedin page.' target="_blank">
                    <img src={"./images/linkedin.png"} height="20px" width="20px"/>
                </a>
            </div>
            <TechColofon />
      </header>
    )}