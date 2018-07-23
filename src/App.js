import React, { Component } from 'react';
import { TimelineFrame } from './components/timeline/timeline';
import { Intro } from './components/intro/intro';
import Knowledgestack  from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';
import { Content } from './components/content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimelineFrame />
        <Intro />
        <div><Knowledgestack /></div>
        <Portfolio />
        <Content />
      </div>
    );
  }
}


module.hot.accept();

export default App;
