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
        return (
            <div className='portfolio'>
                <div className='portfolio-title'><h2>Portfolio</h2></div>
                <div className='portfolio-content'>
                    <div className='portfolioContent'>
                        <div className='client'>Client: <b><i>Vertig Arcade</i></b></div>
                        <div className='project'>Project: <b><i>Haze</i></b></div>
                    </div>
                    <div className='images'>
                        <img src='../images/portfoliocases/haze_edit_play_space.jpg' width='300px' height='100%'/>
                        <img src='../images/portfoliocases/haze_edit_session.png' width='300px' height='100%'/>
                        <img src='../images/portfoliocases/haze_launcher_settings.png' width='300px' height='100%'/>
                    </div>
                </div>
            </div>   
        )
    }
}