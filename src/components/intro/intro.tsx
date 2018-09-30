import * as React from "react";


export class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <article id="intro-block">
                    <header><h2>Portfolio website van: <br/> Wesley Blijlevens</h2></header>
                    <p>
                        Fulltime front-end engineer at <a href="https://rotterdam.luminis.eu/" target="_blank">Luminis Rotterdam</a><br />
                        Born and raised in Rotterdam but currently living in Amsterdam.<br/>
                        Having a background in games development and moved towards software engineering.<br/>
                        I love technology & design, tought myself 3D Designing and programming.<br/>
                        Beside all of this i work as a teacher at the <a href="https://www.ncoi.nl/" target="_blank">NCOI-group</a> and <a href="https://www.hogeschoolrotterdam.nl/" target="_blank">School of Applied Science in Rotterdam</a>.
                    </p>
                    <p>Contact me at: <a href="mailto:e-postduif@blijlevens.nu">e-mail@blijlevens.nu</a></p>
                    <p><a href="../../../data/wesleyblijlevensEng.pdf" title="Download CV in English">C.V. (pdf | 805kb)</a></p>
                </article>
            </div>
        )
    }
}