import React from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";

import TimelineWrapper from "../../organisms/Timeline/Timeline";
import TimeLineUtil from "../../../utils/timeline-util";
const timeline = require("../../../../data/timeline.json");

interface StyledTimeLineProps {
  startYear: number;
  endYear: number;
}

interface TimeLineProps {
    onMouseOver(skillSet:string):void;
}

const StyledTimeLine = styled.div(
  (props: StyledTimeLineProps): SerializedStyles => {
    return css`
      display: flex;
      position: relative;
      align-items: center;
      background-color: #fff;
      height: 196px;
      background-image: url(../images/blackline.png);
      background-repeat: repeat-x;
      background-position: center;
      &:before {
        position: absolute;
        content: "${props.startYear}";
        display: block;
        left: -54px;
        width: 63px;
          background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25'><circle cx='15' cy='15' r='6' /></svg>")  no-repeat;
          background-position-y: -6px;
          background-position-x: right;
      }
      &:after{
        position: absolute;
        content: "${props.endYear}";
        display: flex;
        justify-content: flex-end;
        right: -53px;
        width: 68px;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25'><circle cx='15' cy='15' r='6' /></svg>")  no-repeat;
      background-position-y: -6px;
      background-position-x: left;
    }`;
  }
);

const StyledTimeLineBackground = styled("div")`
  display: block;
  position: absolute;
  margin-left: calc(-50vw + 50%);
  width: 100vw;
  height: 196px;
  background-color: #fff;
  z-index: -1;
`;

const TimeLine = ({onMouseOver}:TimeLineProps): JSX.Element => {
  const startYear = TimeLineUtil.getYearFromDateString(timeline[0].from);
  const endYear = TimeLineUtil.getYearFromDateString(
    timeline[timeline.length - 1].till
  );

  return (
    <StyledTimeLine id="timeLine" startYear={startYear} endYear={endYear}>
      <StyledTimeLineBackground />
      <TimelineWrapper onMouseOver={onMouseOver} timeline={timeline} />
    </StyledTimeLine>
  );
};

export default TimeLine;
