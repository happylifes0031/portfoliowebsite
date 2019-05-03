import React, { Component } from 'react';
import { TimelineFrame } from './components/timeline/timeline';
import { Intro } from './components/intro/intro';
import Knowledgestack  from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';
import { Content } from './components/content/content';
import { TechColofon } from './components/techcolofon/colofon';
import  List from './components/List';
import store from "./stores/index";
import { addArticle } from "./actions/action.js";

window.store = store;
window.addArticle = addArticle;

class App extends Component {
  state = { 
    moveOverNode : undefined,
  }

  onMouseOver = (value) => { 
    console.log('store.getState()', store.getState()  )
    this.setState({
      moveOverNode : value
    });
  } 

  onMouseLeave = () => { 
    this.setState({
      moveOverNode : value
    });
  }

  /*

        <div className="App-knowledge-stack">
          
        </div>
        <Content />
        <TimelineFrame onmouseOver={this.onMouseOver.bind(this)} onmouseLeave={this.onMouseLeave.bind(this)}/>
        <Portfolio activeNode={this.state.moveOverNode} count={this.state.count} />
              <TimelineFrame onmouseOver={this.onMouseOver.bind(this)} onmouseLeave={this.onMouseLeave.bind(this)}/>
  */
  

  render() {
    return (
      <div className="App">
        <div className="empty-bar">
          <div className="avatar"> 
            <img src={"./images/avatar.png"} height="40px" width="45px"/> <div>W Blijlevens</div>
          </div>
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
              <a href="../../../data/wesleyblijlevensEng.pdf" title="Download CV in English">Download C.V.</a>
              <a href="mailto:e-postduif@blijlevens.nu">Contact</a>
              <a> Portfolio </a>
            </nav>
            </div>
            <div className="intro">
              <article>
                <p>Freelance front-end developer and hobby game developer.
                  Born and raised in Rotterdam, living in Amsterdam.
                  I have background in game development and currently do front-end development. With a love for technology and design, I have taught myself 3D design and programming!
                </p>
                <p>- Currently working for: <b>nobody ;-)</b></p>
              </article>
            </div>
          </div>
          
        </div>
        <Knowledgestack />
        <Portfolio />
      </div>
    );
  }
}

export default App;
