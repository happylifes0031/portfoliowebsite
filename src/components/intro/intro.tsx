import * as React from "react";
import { TechColofon } from '../techcolofon/colofon';

export class Intro extends React.Component {
    render() {
        return (
            <div className="intro">
                <article id="intro-block">
                    <header><h2>Portfolio website van: <br/> Wesley Blijlevens</h2></header>
                    <p>Fulltime front-end engineer at <a href="">Luminis Rotterdam</a></p>
                    <p>Born and raised in Rotterdam but currently living in Amsterdam.</p>
                    <p>Having a background in games development and moved towards software engineering.</p>
                    <p>I love technology & design, tought myself 3D Designing and programming.</p>
                    <p>Beside all of this i work as a teacher at the <a href="">NCOI-group</a> and <a href="">School of Applied Science in Rotterdam</a>.</p>
                    <p>Contact me @ <a href="mailto:e-postduif@blijlevens.nu">e-mail@blijlevens.nu</a></p>
                </article>
                <TechColofon />
            </div>
        )
    }
}