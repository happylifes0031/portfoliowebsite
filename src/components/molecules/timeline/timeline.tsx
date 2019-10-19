import React from 'react';

import TimeLineNode from '../../atoms/node/node';
import TimeLineUtil from '../../../utils/timeline-util';
const timeline = require('../../../../data/timeline.json');

export interface TimelineFrameProps {
    onMouseOver: (companyName:string) => void;
}

export class TimelineFrame extends React.Component<TimelineFrameProps> {
    state = {
        frameWidth: 0,
        startTimeLine: timeline[0].from,
        endTimeLine: timeline[timeline.length -1].till,
        hoverOver: ''
    };

    getWidth = ():void => {
        this.setState({ 
          frameWidth: (!document.getElementById("timeLine").offsetWidth)
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.getWidth);
    }

    onCompanyName = (name:string) => {
        console.log('target node', name);
        this.setState({hoverOver:name});
        this.props.onMouseOver(name);
    }

    public render():React.ReactElement {
        const totalAmountOfMonths = TimeLineUtil.calculateAmountOfTotalMonths(this.state.startTimeLine, this.state.endTimeLine);
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

                            let startYear = TimeLineUtil.getYearFromDateString(companies.from);
                            let startMonth = TimeLineUtil.getMonthFromDateString(companies.from);
                            let endYear = TimeLineUtil.getYearFromDateString(companies.till);
                            let endMonth = TimeLineUtil.getMonthFromDateString(companies.till);

                            let startTimeLineYear = TimeLineUtil.getYearFromDateString(this.state.startTimeLine);
                            let startTimeLineMonth = TimeLineUtil.getMonthFromDateString(this.state.startTimeLine);

                            let totalMonths = ((endYear-startYear)*12) + ((12 - startMonth) + endMonth);

                            let percentagePerMonth = (100 / (totalAmountOfMonths + 2));
                            let start = ((startYear - startTimeLineYear) * 12) + (startMonth - startTimeLineMonth);
                            let left = (percentagePerMonth * start);
                            let width = (percentagePerMonth * totalMonths);

                            return (
                                <TimeLineNode
                                    key={index}
                                    index={index}
                                    {...companies}
                                    onMouseOver={this.onCompanyName}
                                    companyName={this.state.hoverOver}
                                    isEven={isEven}
                                    toggleAbove={toggleAbove}
                                    toggleUnder={toggleUnder}
                                    isHigher={isHigher}
                                    width={width}
                                    left={left}
                                    totalAmountOfMonths={totalAmountOfMonths}
                                />
                            )
                        })
                    }
                    <div className="end-date">{this.state.endTimeLine.slice(3, 7)}</div>
                </div>
        )
    }
}