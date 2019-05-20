import React, { Component } from 'react';
import { TimelineFrame } from './components/timeline/timeline';

import Knowledgestack  from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';

import { TechColofon } from './components/techcolofon/colofon';

import { addArticle } from "./actions/action.js";

window.addArticle = addArticle;

class App extends Component {
  state = { 
    moveOverNode : undefined,
    hidePortfolio: true,
    isScrolling: false
  }

  onMouseOver = (value) => { 
    this.setState({
      moveOverNode : value
    });
  } 

  onMouseLeave = () => { 
    this.setState({
      moveOverNode : value
    });
  }

  togglePortfolio = () => { 
    this.setState({ 
      hidePortfolio:!this.state.hidePortfolio
    });
  }

  handleScroll = () => {
    let lastScrollY = window.scrollY;
    
    if(!this.state.hidePortfolio && lastScrollY <= 50) { 
      this.setState({ 
        hidePortfolio:!this.state.hidePortfolio
      });
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="App">
        <div className="empty-bar">
          <div className="avatar"> 
            <img src={"./images/avatar.png"} height="40px" width="45px"/> 
              <div>W Blijlevens</div>
          </div>
          <div className="socials"><a href="https://www.linkedin.com/in/wesley-blijlevens" title='View my Linkedin page.' target="_blank"><img src={"./images/linkedin.png"} height="20px" width="20px"/></a></div>
          <TechColofon />
        </div>
        <div className="breakout"></div>
          <div className="inbedTimeLine">
            <TimelineFrame onmouseOver={this.onMouseOver.bind(this)} onmouseLeave={this.onMouseLeave.bind(this)}/>
          </div>
        <div className="content">
          <div className="welcome">
            <article>
              <h2>Hello, i am a freelance</h2>
              <h1>front-end developer</h1>
              <h2>& hobby game developer</h2>
            </article>
          </div>
          <div className="midSection">
            <div className="menu">
            <nav>
              <a href="#portfolio" onClick={this.togglePortfolio}>Portfolio</a>
              <a href="mailto:e-postduif@blijlevens.nu">Contact</a>
              <a href="../../../data/blijlevens_cv_eng.pdf" title="Download CV in English">Download C.V. <span className="downloadNote">(PDF | 1.1mb)</span></a>
            </nav>
            </div>
            <div className="intro">
              <article>
                <p>Freelance front-end developer and hobby game developer.
                  Born and raised in Rotterdam, living in Amsterdam.
                  I have background in game development and currently do front-end development. With a love for technology and design, I have taught myself 3D design and programming!
                </p>
                <span>- Currently working for:</span> <span className='working-for'>DEVA</span>
              </article>
            </div>
          </div>
          
        </div>
        <Knowledgestack />
        { !this.state.hidePortfolio &&
          <Portfolio isScrolling={}/>
        } 
      </div>
    );
  }
}

export default App;
