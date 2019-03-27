import * as React from 'react';
import Node from './node/node';
const timeline = require('../../../data/timeline.json');

export interface Props {
    stringValue: string;
    beginIndex: number;
    endIndex: number;
    onmouseOver:any;
}

export class TimelineFrame extends React.Component<Props> {
    state = {
        frameWidth: 0,
        startTimeLine: timeline[0].from,
        endTimeLine: timeline[timeline.length -1].till    
    };
    
    getNumberValueFromDateString(stringValue:string, beginIndex:number, endIndex:number){
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
          frameWidth: (!document.getElementById("timeLine").offsetWidth)
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.getWidth);
    }

    render() {
        const totalAmountOfMonths = this.calculateAmountOfTotalMonths();
        let isEven = false;
        let isHigher = false;
        let toggleAbove = true;
        let toggleUnder = true;

        return (
            <div className="timeline">
                <div className="startDate">{this.state.startTimeLine.slice(3, 7)}</div>
                { 
                    
                    timeline.map( (companies:any, index:number) => {
                        index++;

                        if (index % 2 === 0) { 
                            isEven = true;
                            toggleUnder = !toggleUnder;
                        }  else  {
                            toggleAbove = !toggleAbove;
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

                        return <Node key={index} index={index} {...companies} onmouseOver={this.props.onmouseOver} isEven={isEven} toggleAbove={toggleAbove} 
                            toggleUnder={toggleUnder} isHigher={isHigher}
                            width={width} left={left} totalAmountOfMonths={totalAmountOfMonths} />;
                    })
                }
                <div className="endDate">{this.state.endTimeLine.slice(3, 7)}</div>
            </div>
        )
    }
}