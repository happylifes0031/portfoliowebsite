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
  

  render() {
    return (
      <div className="App" id="timeLine">
        <div className="inbedTimeLine">
          <TimelineFrame onmouseOver={this.onMouseOver.bind(this)} />
        </div>
        <TechColofon />
        <Intro />
        <div className="App-knowledge-stack"><Knowledgestack /></div>
        <Portfolio activeNode={this.state.moveOverNode} count={this.state.count} />
        <Content />
      </div>
    );
  }
}

export default App;
