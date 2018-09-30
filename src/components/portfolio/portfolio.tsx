import * as React from 'react';
import showCase from '../../../data/portfolioCases.json';

export class Portfolio extends React.Component{
    render() {
        const { activeNode } = this.props;
        let randomIndex = 0;
        
        return (
            showCase.reduce( (showCase, cum, index, arr) => { 
                
                let hoverShowCase = arr.find(function (obj) { return obj.company === activeNode });
                const selectedShowCase = (!hoverShowCase) ? arr[randomIndex] : hoverShowCase;
                
                const imageURL1 = `../images/portfoliocases/${selectedShowCase.imgName1}.png`;
                const imageURL2 = `../images/portfoliocases/${selectedShowCase.imgName2}.png`;
                return (<div className="portfolioCase">
                    <header><h2>Showcase</h2></header>
                    <h4>{selectedShowCase.projectTitle}</h4>
                    <figure>
                        <img width="160px" height="140px;" src={imageURL1} />
                    </figure>
                    <figure>
                        <img width="160px" height="140px;" src={imageURL2} />
                    </figure>
                    <ul>
                        <li>
                            Client: <a href={selectedShowCase.clientUrl} target="_blank">{selectedShowCase.client}</a>
                        </li>
                        <li>
                            <a href={selectedShowCase.url} target="_blank">{selectedShowCase.website}</a>
                        </li>
                        <li>
                            {selectedShowCase.description}
                        </li>
                    </ul>
                </div>)
            })
        );
    }
}