import React from 'react';
const showCase = require('../../../data/portfolioCases.json');
import {PortfolioRow} from './portfolio-row';


export class Portfolio extends React.Component {
    state = { 
        offset: 0,
        scrollPosition: 0,
        pos: 0
    }

    private handleScroll = ():void => {}

    public componentDidMount():void {
        window.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount():void {
        window.removeEventListener('scroll', this.handleScroll);
    }

    public render() {
        return (
            <div id='portfolio' className='portfolio'>
                <div className='portfolio-title'><h2>Portfolio</h2></div>
                { 
                    showCase.map( (showcase, index) => { 
                        return ( 
                            <div className='portfolio-content'>
                                <div className='portfolio-info'>
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