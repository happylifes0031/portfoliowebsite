import * as React from 'react';

export class TimelineFrame extends React.Component {
    state = {
        frameWidth: 0
    };
     
    getWidth = () => { 
        this.setState({ 
          frameWidth: document.getElementById("timeLine").offsetWidth
        }); 
    }

    componentDidMount() {
        window.addEventListener('resize', this.getWidth);
    }

    render() {
        //<TimeLineNodes frameWidth={this.state.frameWidth}/>
        return (
            <div id="timeLine" className="timeline">
                {this.state.frameWidth}
            </div>
        )
    }
}