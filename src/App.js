import React, { Component } from 'react';
import { TimelineFrame } from './components/timeline/timeline';

import Knowledgestack  from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';
import { TechColofon } from './components/techcolofon/colofon';
import { Intro } from './components/intro/intro';

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
        <Intro togglePortfolio={this.togglePortfolio} />
        <Knowledgestack />
        { !this.state.hidePortfolio &&
          <Portfolio isScrolling={}/>
        } 
      </div>
    );
  }
}

export default App;
