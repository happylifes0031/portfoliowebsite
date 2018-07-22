import React, { Component } from 'react';
import { Timeline } from './components/timeline';
import { Intro } from './components/intro/intro';
import { Knowledgestack } from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';
import { Content } from './components/content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline />
        <Intro />
        <Knowledgestack />
        <Portfolio />
        <Content />
      </div>
    );
  }
}


module.hot.accept();

export default App;
