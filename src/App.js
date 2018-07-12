import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          timeline
        </div>
        <div className="App-intro">
           intro blog
        </div>
        <div className="App-knowledge-stack">
          knowledge-stack
        </div>
        <div className="App-showcase">
          showcase
        </div>
        <div className="App-content">
          content
        </div>
      </div>
    );
  }
}


module.hot.accept();

export default App;
