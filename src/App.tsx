import React from 'react';

import { TimelineFrame } from './components/timeline/timeline';
import { Knowledgestack }  from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';
import { TechColofon } from './components/techcolofon/colofon';
import { Intro } from './components/intro/intro';


export default class App extends React.Component {
  state = { 
    moveOverNode : '',
    hidePortfolio: true,
    isScrolling: false
  }

  private onMouseOver = (companyName:string):void => { 
    this.setState({
      moveOverNode: companyName
    });
  } 

  private togglePortfolio = ():void => { 
    this.setState({hidePortfolio:!this.state.hidePortfolio});
  }

  private handleScroll = ():void => {
    let lastScrollY = window.scrollY;
    
    if(!this.state.hidePortfolio && lastScrollY <= 50) { 
      this.setState({ 
        hidePortfolio:!this.state.hidePortfolio
      });
    }
  }

  public componentDidMount():void {
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount():void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  public render() {
    return (
      <div className="App">
        
        <div className="avatar-bar">
          <div className="avatar"> 
            <img src={"./images/avatar.png"} height="40px" width="45px"/> 
              <div>W Blijlevens</div>
          </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/wesley-blijlevens" title='View my Linkedin page.' target="_blank">
            <img src={"./images/linkedin.png"} height="20px" width="20px"/></a>
          </div>
          <TechColofon />
        </div>
        
        <div className="outer-timeline"></div>
          <div className="inbedded-timeline">
            <TimelineFrame onmouseOver={this.onMouseOver}/>
          </div>
        <Intro togglePortfolio={this.togglePortfolio} />
        <Knowledgestack />
        { 
          !this.state.hidePortfolio &&
          <Portfolio />
        } 
      </div>
    );
  }
}