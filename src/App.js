import React, { Component } from 'react';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           get started you dont know what your doing Welcom To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


module.hot.accept();

export default App;
