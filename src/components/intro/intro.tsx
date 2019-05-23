import React from "react";

interface IntroProps { 
    togglePortfolio: () => void;
}

export const Intro = (props:IntroProps) => {
    return (
        <main>
            <div className="who-am-i">
                <h2>Hello, I am a freelance</h2>
                <h1>front-end developer</h1>
                <h2>& hobby game developer</h2>
            </div>
            <div className="background-story">
                <nav>
                    <a href="#portfolio" onClick={props.togglePortfolio}>Portfolio</a>
                    <a href="mailto:e-postduif@blijlevens.nu">Contact</a>
                    <a href="../../../data/blijlevens_cv_eng.pdf" title="Download CV in English">C.V. <span className="download-note">(PDF | 1.1mb)</span></a>
                </nav>                
                <article>
                    Freelance front-end developer and hobby game developer.
                    Born and raised in Rotterdam, living in Amsterdam.
                    I have background in game development and currently do front-end development. With a love for technology and design, I have taught myself 3D design and programming!
                    <span> Currently working for:</span> <span className='working-for'>deva</span>
                </article>
            </div>
        </main>
    )
}