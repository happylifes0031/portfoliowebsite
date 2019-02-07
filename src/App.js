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
          
        </div>
        <div>
          <div className="welcome">
            <article>
              <h2>Hello, i am a freelance</h2>
              <h1>front-end developer</h1>
              <h2>& part time teacher</h2>
            </article>
          </div>
          <div className="midSection">
            <div className="menu">
            <nav>
              <a href="../../../data/wesleyblijlevensEng.pdf" title="Download CV in English">Download C.V.</a>
              <a href="mailto:e-postduif@blijlevens.nu">contact</a>
            </nav>
            </div>
            <div className="intro">
              <article>
                <p>Freelance front-end developer & part time teacher.
                Born and raised in Rotterdam, living in Amsterdam.
                I have a background in games development and moved towards Front-end Engineering.
                Having a love for technology & design, tought myself 3D Design and programming!</p>

                <p>-Currently working for: <a href="http://vertigo-games.com/" target="_blank">Vertigo Arcade</a></p>
              </article>
            </div>
          </div>
          
        </div>
        <Knowledgestack />
      </div>
    );
  }
}

export default App;
