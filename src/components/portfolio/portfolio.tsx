import * as React from 'react';
const showCase = require('../../../data/portfolioCases.json');

export interface Props {
    activeNode: any;
}


export class Portfolio extends React.Component<Props>{
    render() {
        const { activeNode } = this.props;
        let randomIndex = 0;
        
        return (
            showCase.reduce( (showCase:any, cum:any, index:number, arr:Array<any>) => { 
                
                let hoverShowCase = arr.find(function (obj:any) { return obj.company === activeNode });
                const selectedShowCase = (!hoverShowCase) ? arr[randomIndex] : hoverShowCase;
                
                const imageURL1 = `./images/portfoliocases/${selectedShowCase.imgName1}.png`;
                const imageURL2 = `./images/portfoliocases/${selectedShowCase.imgName2}.png`;
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