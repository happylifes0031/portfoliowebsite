import * as React from "react";
import { TechColofon } from '../techcolofon/colofon';

export class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <article id="intro-block">
                    <header><h2>Portfolio website van: <br/> Wesley Blijlevens</h2></header>
                    <p>Fulltime front-end engineer bij <a href="">Luminis Rotterdam</a></p>
                    <p>E-mail: <a href="mailto:e-postduif@blijlevens.nu">e-mail@blijlevens.nu</a></p>
                </article>
                <TechColofon />
            </div>
        )
    }
}