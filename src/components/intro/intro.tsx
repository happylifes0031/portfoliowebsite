import * as React from "react";


export class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <article id="intro-block">
                    <header><h2>Portfolio website van: <br/> Wesley Blijlevens</h2></header>
                    <p>
                        Fulltime front-end engineer at <a href="https://rotterdam.luminis.eu/" target="_blank">Luminis Rotterdam</a><br />
                        Born and raised in Rotterdam, currently living in Amsterdam.<br/>
                        I have a background in games development and moved towards Front-end Engineering.<br/>
                        Having a love for technology & design, tought myself 3D Design and programming!<br/>
                        Beside all of this working as a teacher at the <a href="https://www.ncoi.nl/" target="_blank">NCOI-group</a> and <a href="https://www.hogeschoolrotterdam.nl/" target="_blank">School of Applied Science in Rotterdam</a>.
                    </p>
                    <p>Contact me at: <a href="mailto:e-postduif@blijlevens.nu">e-mail@blijlevens.nu</a></p>
                    <p><a href="../../../data/wesleyblijlevensEng.pdf" title="Download CV in English">C.V. (pdf | 805kb)</a></p>
                    <p>Currently working for:<br/>
                    <i>Luminins on Protrader by Bink Bank</i></p>
                </article>
            </div>
        )
    }
}