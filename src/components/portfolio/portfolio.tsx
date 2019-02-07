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
        let hoverShowCase = null;

        console.log('hover show case', activeNode);

        return (
            showCase.reduce( (showCase:any, cum:any, index:number, arr:Array<any>) => { 
                
                if(activeNode !== undefined) { 
                    hoverShowCase = arr.findIndex( (obj:any, index:any) => { 
                        if( obj.company === activeNode ) {
                            return index;
                        } else {
                            return null;
                        }
                    });
                } 
                
                const selectedShowCase = (activeNode && hoverShowCase !== -1) ? arr[hoverShowCase] : arr[randomIndex] ;
                const imageURL1 = `./images/portfoliocases/${selectedShowCase.imgName1}.png`;

                return (
                    <div className="portfolioCase">
                        <header><h2 className="portfolioTitle">Portfolio:</h2></header>
                        <div className={(fadeIn) ? "fadeIn" : "fadeOut"}>
                            <div className="showcase">
                                <figure>
                                    <img width="250px" height="200px;" src={imageURL1} />
                                </figure>
                                <ul className="showcase-info">
                                    <li>
                                        <h4>{selectedShowCase.projectTitle}</h4>
                                    </li>
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