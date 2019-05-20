import * as React from 'react';
const showCase = require('../../../data/portfolioCases.json');
import {PortfolioRow} from './portfolio-row';

export interface Props {
    activeNode: any;
}


export class Portfolio extends React.Component<Props>{
    state = { 
        selectedIndex: 0,
        fadeIn: false,
        hover: false,
        image: '',
        topImage: 10,
        leftImage: 20,
        offset: 0,
        scrollPosition: 0,
        imagePosition: 0,
        listOfRows: []
    }

    private handleScroll = ():void => {
        let lastScrollY = window.scrollY;
        let offset = this.state.offset;
        let scrollCorrection = (offset - lastScrollY);
        
        this.setState(scrollCorrection)
    }

    public componentDidMount():void {
        window.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount():void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    private listOfRows = (rowId:string):void => { }

    public render() {
        return (
            <div id='portfolio' className='portfolio'>
                <div className='portfolio-title'><h2>Portfolio</h2></div>
                { 
                    showCase.map( (showcase, index) => { 
                        this.listOfRows( ('row_'+index) )
                        return ( 
                            <div className='portfolio-content'>
                                <div className='portfolioContent'>
                                    <div className='client'>Client: <span className="client-title">{showcase.client}</span></div>
                                    <div className='project'>Project: <span className="client-project">{showcase.projectTitle}</span></div>
                                    <div className='description'><span className="client-project">{showcase.description}</span></div>
                                </div>
                            <PortfolioRow showcase={showcase} index={index}/>
                        </div>
                        )
                    })
                }
            </div>   
        )
    }
}