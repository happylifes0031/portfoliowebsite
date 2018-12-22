import * as React from 'react';
const showCase = require('../../../data/portfolioCases.json');

export interface Props {
    activeNode: any;
}

export class Portfolio extends React.Component<Props>{
    constructor(props) {
        super(props); 
    }
    state = { 
        selectedIndex: 0,
        fadeIn: false
    }

    increment = () => { 
            setTimeout( ()=> { 
                this.setState({fadeIn:true})
                setTimeout( ()=> { 
                    this.setState({fadeIn:false});
                }, 9500);
                setTimeout( ()=> { 
                    this.setState({selectedIndex:  Math.floor(Math.random() * showCase.length) });
                    this.increment()
                }, 10000);
        }, 0);
    }

    componentDidMount() {
        this.increment();
    }

    render() {
        const { activeNode } = this.props;
        const { selectedIndex, fadeIn } = this.state;
        let randomIndex = selectedIndex;
    
        console.log('nextShowcase', randomIndex, fadeIn);
        console.log('activeNode', activeNode);
        console.log(showCase)

        let hoverShowCase = null;

        return (
            showCase.reduce( (showCase:any, cum:any, index:number, arr:Array<any>) => { 
                
                if(!activeNode) { 
                    hoverShowCase = arr.find(function (obj:any) { 
                        return obj.company === activeNode 
                    });
                } 
                
                const selectedShowCase = (hoverShowCase) ? arr[randomIndex] : hoverShowCase;
                const imageURL1 = `./images/portfoliocases/${selectedShowCase.imgName1}.png`;
                const imageURL2 = `./images/portfoliocases/${selectedShowCase.imgName2}.png`;

                return (
                    <div className="portfolioCase">
                        <header><h2>Showcase</h2></header>
                        <div className={(fadeIn) ? "fadeIn" : "fadeOut"}>
                            <div className="showcase">
                                <figure>
                                    <img width="250px" height="200px;" src={imageURL1} />
                                </figure>
                                <h4>{selectedShowCase.projectTitle}</h4>
                                <ul className="showcase-info">
                                    <li>
                                        <b>Client:</b> <a href={selectedShowCase.clientUrl} target="_blank">{selectedShowCase.client}</a>
                                    </li>
                                    <li>
                                        <b>{selectedShowCase.description}</b>
                                    </li>
                                    <li>
                                        <a href={selectedShowCase.url} target="_blank">{selectedShowCase.website}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }
}