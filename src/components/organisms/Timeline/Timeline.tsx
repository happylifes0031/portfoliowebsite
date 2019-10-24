import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import TimeLineNode from "../../molecules/Node/node";
import TimeLineUtil from "../../../utils/timeline-util";


export interface TimelineFrameProps {
  onMouseOver: (companyName: string) => void;
  timeline: any;
}

interface CompanyProps {
  from: string;
  till: string;
  skills: string;
  role: string;
  companyName: string;
  companyLogo: string;
}

const TimeLine = ({ startTimeLine, endTimeLine, onHoverGetName, timeline} ) => {
  const [frameWidth, setFrameWidth] = useState(0);
  const totalAmountOfMonths = TimeLineUtil.calculateAmountOfTotalMonths(
    startTimeLine,
    endTimeLine
  );
  const startTimeLineYear = TimeLineUtil.getYearFromDateString(startTimeLine);
  const startTimeLineMonth = TimeLineUtil.getMonthFromDateString(startTimeLine);
  const percentagePerMonth = frameWidth / (totalAmountOfMonths + 2);
  let nodePairItt = 0;

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

  useEffect(() => {
    setFrameWidth(document.getElementById("timeLine").offsetWidth);
  }, []);

  return timeline.map((company: CompanyProps, index: number) => {
    const [left, width] = calculatePosition(company);
    if (index % 2 === 0) { nodePairItt++ }

    return (
      <TimeLineNode
        key={company.companyName + "_" + index}
        onMouseOver={onHoverGetName}
        isEven={index % 2 === 0}
        isLower={nodePairItt % 2 === 0}
        width={width}
        left={left}
        {...company}
      />
    );
  });
};

const TimelineWrapper = (props: TimelineFrameProps) => {
  const startTimeLine = props.timeline[0].from;
  const endTimeLine = props.timeline[props.timeline.length - 1].till;

  const onHoverGetName = (name: string) => {
    props.onMouseOver(name);
  };

  return (
      <TimeLine
        startTimeLine={startTimeLine}
        endTimeLine={endTimeLine}
        timeline={props.timeline}
        onHoverGetName={onHoverGetName}
      />
  );
};

export default TimelineWrapper;