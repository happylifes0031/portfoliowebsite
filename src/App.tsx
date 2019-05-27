import React from 'react';


import { Header } from './components/header/header';

import { Knowledgestack }  from './components/knowledgeStack/knowledgeStack';
import { Portfolio } from  './components/portfolio/portfolio';
import { Intro } from './components/intro/intro';
import { TimelineFrame } from './components/header/timeline/timeline';

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
      <div className="container">
        <Header />
        <div className='timeline-frame'>
          <TimelineFrame onmouseOver={this.onMouseOver}/>
          <div className="inbedded-timeline">
          </div>
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
