import React, { useState } from "react";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";

import NodeCircle from "../../atoms/Node_circle/NodeCircle";
import NodeDetails from "../../atoms/Node_details/NodeDetails";

export interface TimeLineNodeProps {
  skills: string;
  onMouseOver: (skills: Array<string>) => void;
  from: string;
  till: string;
  role: string;
  left: number;
  width: number;
  isEven: boolean;
  isLower: boolean;
  companyName: string;
}

interface StyledNodeProps {
  left: number;
  width: number;
  isEven: boolean;
  isLower: boolean;
}

const StyledNode = styled.div(
  (props: StyledNodeProps): SerializedStyles => {
    return css(`
    position: absolute;
    height: ${props.isLower ? 30 : 50}px;
    width: ${props.width}px;
    padding: 1px;
    display: inline-block;    
    top: ${props.isEven ? (props.isLower ? 67 : 47) : 98}px;
    left: ${props.left}px;
    animation-name: fadeIn;
    animation-duration: 1s;
    cursor: pointer;
    border-left: 1px solid black;
    h5 { 
      left: 15px;
    }
`);
  }
);

const TimeLineNode = (props: TimeLineNodeProps): JSX.Element => {
  const [isHoveringOver, setIsHoveringOver] = useState(false);

  const hoverOverNode = (): void => {
    const stringOfSkills = props.skills.toLowerCase().split(" ");
    const listOfSkillNames = stringOfSkills.map((skillName: string) => {
      return skillName.replace(/[, ]+/g, " ").trim();
    });

    props.onMouseOver(listOfSkillNames);
    setIsHoveringOver(true);
  };

  const onMouseLeave = (): void => {
    setIsHoveringOver(false);
  };

  return (
    <StyledNode
      isEven={props.isEven}
      isLower={props.isLower}
      left={props.left}
      width={props.width}
    >
      <NodeCircle
        companyName={props.companyName}
        isEven={props.isEven}
        isLower={props.isLower}
        onMouseOver={() => {
          hoverOverNode();
        }}
        onMouseLeave={() => {
          onMouseLeave();
          props.onMouseOver([]);
        }}
      />
      <NodeDetails
        {...props}
        isVisible={isHoveringOver}
        top={props.isEven ? 10 : 80}
      />
    </StyledNode>
  );
};

export default TimeLineNode;
