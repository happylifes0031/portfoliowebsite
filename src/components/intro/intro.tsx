import * as React from "react";
import TechColofon from '../techcolofon/colofon';

export class Intro extends React.Component {
    render() {
        return (
            <div>
                <article id="intro-block" className="intro">
                    <header><h2>Portfolio website van: <br/> W Blijlevens</h2></header>
                    <p>Fulltime front-end engineer bij <a href="">Luminis Rotterdam</a></p>
                    <p>E-mail: <a href="mailto:e-postduif@blijlevens.nu">e-mail@blijlevens.nu</a></p>
                </article>
                <TechColofon />
            </div>
        )
    }
}