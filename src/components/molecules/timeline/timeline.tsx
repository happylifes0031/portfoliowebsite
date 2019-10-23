import React, { useState, useEffect } from "react";

import TimeLineNode, { TimeLineNodeProps } from "../../atoms/node/node";
import TimeLineUtil from "../../../utils/timeline-util";
const timeline = require("../../../../data/timeline.json");

export interface TimelineFrameProps {
  onMouseOver: (companyName: string) => void;
}

interface CompanyProps {
  from: string;
  till: string;
  skills: string;
  role: string;
  companyName: string;
  companyLogo: string;
}

const TimeLine = ({ startTimeLine, endTimeLine, onHoverGetName }) => {
  const [frameWidth, setFrameWidth] = useState(0);
  const totalAmountOfMonths = TimeLineUtil.calculateAmountOfTotalMonths(
    startTimeLine,
    endTimeLine
  );
  const startTimeLineYear = TimeLineUtil.getYearFromDateString(startTimeLine);
  const startTimeLineMonth = TimeLineUtil.getMonthFromDateString(startTimeLine);
  const percentagePerMonth =  frameWidth / (totalAmountOfMonths + 2);

  const calculatePosition = (company: CompanyProps) => {
    const startYear = TimeLineUtil.getYearFromDateString(company.from);
    const startMonth = TimeLineUtil.getMonthFromDateString(company.from);
    const endYear = TimeLineUtil.getYearFromDateString(company.till);
    const endMonth = TimeLineUtil.getMonthFromDateString(company.till);

    const totalMonths =
      (endYear - startYear) * 12 + (12 - startMonth + endMonth);

    const start =
      (startYear - startTimeLineYear) * 12 + (startMonth - startTimeLineMonth);

    const left = Math.floor(percentagePerMonth * start);
    const width = Math.floor(percentagePerMonth * totalMonths);
    return [left, width];
  };

  useEffect( () => {
    setFrameWidth(document.getElementById("timeLine").offsetWidth)
  }, []);

  return timeline.map((company: CompanyProps, index: number) => {
    const [left, width] = calculatePosition(company);

    return (
      <TimeLineNode
        key={company.companyName + "_" + index}
        onMouseOver={onHoverGetName}
        isEven={index % 2 === 0}
        width={width}
        left={left}
        {...company}
      />
    );
  });
};

const TimelineWrapper = (props:TimelineFrameProps) => {
  const startTimeLine = timeline[0].from;
  const endTimeLine = timeline[timeline.length - 1].till;

  const startYear = TimeLineUtil.getYearFromDateString(startTimeLine);
  const endYear = TimeLineUtil.getYearFromDateString(endTimeLine);

  const onHoverGetName = (name: string) => {
    props.onMouseOver(name);
  };

  return (
    <div className="timeline" id="timeLine">
      <div className="start-date">{startYear}</div>
      <TimeLine
        startTimeLine={startTimeLine}
        endTimeLine={endTimeLine}
        onHoverGetName={onHoverGetName}
      />
      <div className="end-date">{endYear}</div>
    </div>
  );
};

export default TimelineWrapper;
