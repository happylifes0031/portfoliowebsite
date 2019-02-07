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
                        <br/>I have a background in games development and moved towards Front-end Engineering.
                        Having a love for technology & design, tought myself 3D Design and programming!<br/>
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