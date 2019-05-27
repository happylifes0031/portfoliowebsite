import React from 'react';
import {Node} from './node/node';
const timeline = require('../../../../data/timeline.json');

export interface TimelineFrameProps {
    onmouseOver: (companyName:string) => void;
}

export class TimelineFrame extends React.Component<TimelineFrameProps> {
    state = {
        frameWidth: 0,
        startTimeLine: timeline[0].from,
        endTimeLine: timeline[timeline.length -1].till    
    };
    
    private getNumberValueFromDateString(stringValue:string, beginIndex:number, endIndex:number):number {
       return parseInt(stringValue.substring(beginIndex, endIndex));
    }

    private calculateAmountOfTotalMonths = ():number => {
        const startYear = this.getNumberValueFromDateString(this.state.startTimeLine, 3, 7);
        const startMonth = this.getNumberValueFromDateString(this.state.startTimeLine, 0, 2);
        const endYear = this.getNumberValueFromDateString(this.state.endTimeLine, 3, 7);
        const endMonth = this.getNumberValueFromDateString(this.state.endTimeLine, 0, 2);
        
        return ((endYear-startYear)*12) - startMonth + endMonth;
    }
     
    private getWidth = ():void => { 
        this.setState({ 
          frameWidth: (!document.getElementById("timeLine").offsetWidth)
        });
    }

    public componentDidMount() {
        window.addEventListener('resize', this.getWidth);
    }

    public render() {
        const totalAmountOfMonths = this.calculateAmountOfTotalMonths();
        let isEven = false;
        let isHigher = false;
        let toggleAbove = true;
        let toggleUnder = true;

        return (
            <div className="timeline">
                <div className="start-date">{this.state.startTimeLine.slice(3, 7)}</div>
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

                        return <Node 
                                key={index} 
                                index={index} 
                                {...companies} 
                                onmouseOver={this.props.onmouseOver} 
                                isEven={isEven} 
                                toggleAbove={toggleAbove} 
                                toggleUnder={toggleUnder} 
                                isHigher={isHigher}
                                width={width} 
                                left={left} 
                                totalAmountOfMonths={totalAmountOfMonths} 
                            />;
                    })
                }
                <div className="end-date">{this.state.endTimeLine.slice(3, 7)}</div>
            </div>
        )
    }
}