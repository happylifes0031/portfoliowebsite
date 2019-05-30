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

    public render():React.ReactNode {
        return (
            <div id='portfolio' className='portfolio'>
                <h2>Portfolio</h2>
                { 
                    showCase.map( (showcase, index) => { 
                        return ( 
                            <div className='portfolio-content'>
                                <div className='project-info'>
                                    <div>Client: <span>{showcase.client}</span></div>
                                    <div>Project: <span>{showcase.projectTitle}</span></div>
                                    <div><span>{showcase.description}</span></div>
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