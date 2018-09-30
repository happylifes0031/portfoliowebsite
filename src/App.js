import React, { Component } from 'react';
import { TimelineFrame } from './components/timeline/timeline';
import { Intro } from './components/intro/intro';
import Knowledgestack  from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';
import { Content } from './components/content/content';
import { TechColofon } from './components/techcolofon/colofon';

class App extends Component {
  state = { 
    moveOverNode : undefined
  }

  onMouseOver = (value) => { 
    console.log('value', value)
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
        <Portfolio activeNode={this.state.moveOverNode} />
        <Content />
      </div>
    );
  }
}

export default App;
