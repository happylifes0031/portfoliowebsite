import * as React from 'react';
import Node from './node/node';
import timeline from '../../../data/timeline.json';


export class TimelineFrame extends React.Component {
    state = {
        frameWidth: 0,
        startTimeLine: timeline[0].from,
        endTimeLine: timeline[timeline.length -1].till    
    };
    
    getNumberValueFromDateString(stringValue, beginIndex, endIndex){
       return parseInt(stringValue.substring(beginIndex, endIndex));
    }

    calculateAmountOfTotalMonths = () => {
        const startYear = this.getNumberValueFromDateString(this.state.startTimeLine, 3, 7);
        const startMonth = this.getNumberValueFromDateString(this.state.startTimeLine, 0, 2);
        const endYear = this.getNumberValueFromDateString(this.state.endTimeLine, 3, 7);
        const endMonth = this.getNumberValueFromDateString(this.state.endTimeLine, 0, 2);
        
        return ((endYear-startYear)*12) - startMonth + endMonth;
    }
     
    getWidth = () => { 
        this.setState({ 
          frameWidth: document.getElementById("timeLine").offsetWidth
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.getWidth);
    }

    render() {
        const totalAmountOfMonths = this.calculateAmountOfTotalMonths();
        let isEven = false;
        
        return (
            <div className="timeline">
                {this.state.startTimeLine}
                { 
                    timeline.map( (companies, index) => {
                        if( index % 2 !== 0) { 
                            isEven = true;
                        } else { 
                            isEven = false;
                        }
                        let startYear = this.getNumberValueFromDateString(companies.from, 3, 7);
                        let startMonth = this.getNumberValueFromDateString(companies.from, 0, 2);
                        let endYear = this.getNumberValueFromDateString(companies.till, 3, 7);
                        let endMonth = this.getNumberValueFromDateString(companies.till, 0, 2);
                        
                        let startTimeLineYear = this.getNumberValueFromDateString(this.state.startTimeLine, 3, 7);
                        let startTimeLineMonth = this.getNumberValueFromDateString(this.state.startTimeLine, 0, 2);

                        let totalMonths = ((endYear-startYear)*12) + ((12 - startMonth) + endMonth);
                        
                        let percentagePerMonth = (100 / (totalAmountOfMonths + 2));
                        let start = ((startYear - startTimeLineYear) * 12) + (startMonth - startTimeLineMonth);
                        let left = (percentagePerMonth * start);
                        let width = (percentagePerMonth * totalMonths);

                        return <Node key={index} {...companies} isEven={isEven}
                         width={width} left={left} totalAmountOfMonths={totalAmountOfMonths} />;
                    })
                }
                {this.state.endTimeLine}
            </div>
        )
    }
}