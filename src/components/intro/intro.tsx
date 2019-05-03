import * as React from "react";


export class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <article id="intro-block">
                    <header><h2>About me:</h2></header>
                    <p>
                        Freelance front-end developer & part time teacher.
                        Born and raised in Rotterdam, currently living in Amsterdam.
                        <br/>I have background in game development and currently do front-end development. With a love for technology and design, I have taught myself 3D design and programming!<br/>
                    </p><br/>
                    <p>
                        Currently working on: <u>Arcade Launcher</u> for <a href="http://vertigo-games.com/" target="_blank">Vertigo Games</a>
                    </p><br/>
                    <p>Contact me at: <a href="mailto:e-postduif@blijlevens.nu">e-mail@blijlevens.nu</a>. Download my:
                     <a href="../../../data/wesleyblijlevensEng.pdf" title="Download CV in English">C.V. (pdf | 805kb)</a></p>
                </article>
            </div>
        )
    }
}