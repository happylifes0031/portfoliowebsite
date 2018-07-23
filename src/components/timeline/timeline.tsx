import * as React from 'react';

export class TimelineFrame extends React.Component { 
    constructor(props) {
        super(props)
            this.state = { 
                frameWidth: this.getWidth || 0, 
        }
    }
  
    getWidth = () => { return document.getElementById("timeLine").offsetWidth; }

    componentDidMount() {
        let newSize = window.addEventListener('resize', this.getWidth);
        console.log('newSIze', newSize);
        this.setState({ 
          frameWidth: newSize
        });
    }

    render() {
        //<TimeLineNodes frameWidth={this.state.frameWidth}/>
        return (
            <div className="timeline">
            </div>
        )
    }
}