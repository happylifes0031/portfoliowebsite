import * as React from 'react';
import classNames from 'classnames';
const showCase = require('../../../data/portfolioCases.json');

export interface Props {
    activeNode: any;
    hidePortfolio: boolean;
}

export class Portfolio extends React.Component<Props>{
    state = { 
        selectedIndex: 0,
        fadeIn: false,
    }

    render() {
        return (
            <div id='portfolio' className={classNames('portfolio', {'hidden':this.props.hidePortfolio})} >
                <div className='portfolio-title'><h2>Portfolio</h2></div>
                { 
                    showCase.map( showcase => { return ( 
                            <div className='portfolio-content'>
                                <div className='portfolioContent'>
                                    <div className='client'>Client: <span className="client-title">{showcase.client}</span></div>
                                    <div className='project'>Project: <span className="client-project">{showcase.projectTitle}</span></div>
                                    <div className='description'><span className="client-project">{showcase.description}</span></div>
                                </div>
                                <div className='images'>
                                    <img src={`../images/portfoliocases/${showcase.imgName1}.png`} width='300px' height='100%'/>
                                    <img src={`../images/portfoliocases/${showcase.imgName2}.png`} width='300px' height='100%'/>
                                    <img src={`../images/portfoliocases/${showcase.imgName3}.png`} width='300px' height='100%'/>
                                </div>
                        </div>
                        )
                    })
                }
            </div>   
        )
    }
}