import React, { Component } from 'react';
import { TimelineFrame } from './components/timeline/timeline';
import { Intro } from './components/intro/intro';
import Knowledgestack  from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';
import { Content } from './components/content/content';

class App extends Component {
  render() {
    return (
      <div className="App" id="timeLine">
        <div className="inbedTimeLine">
          <TimelineFrame />
        </div>
        <Intro />
        <div className="App-knowledge-stack"><Knowledgestack /></div>
        <Portfolio />
        <Content />
      </div>
    );
  }
}


module.hot.accept();

export default App;
