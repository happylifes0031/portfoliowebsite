import React from 'react';
import { Header } from './components/organisms/header/header';
import KnowledgeStack from './components/organisms/knowledgeStack/knowledgeStack';
import { Portfolio } from './components/pages/portfolio/portfolio';
import { Intro } from './components/templates/intro/intro';
import TimelineWrapper from './components/organisms/Timeline/Timeline';
import { ThemeProvider } from 'emotion-theming';
import Context from "./context/Context";
import TimeLine from './components/templates/Timeline/Timeline';


const theme = {
  color: 'red'
}

export default class App extends React.Component {
  state = {
    skillSet : [],
    hidePortfolio: true,
    isScrolling: false
  }

  private onMouseOver = (skillSet:string):void => {
    this.setState({
      skillSet: skillSet
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
        <Context.Provider value={this.state.skillSet} > {
          <div className="container">
            <Header />
            <TimeLine />
            <Intro togglePortfolio={this.togglePortfolio} />
            <KnowledgeStack />
            {
              !this.state.hidePortfolio &&
              <Portfolio />
            }
          </div> }
        </Context.Provider>
    );
  }
}
