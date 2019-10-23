import React, { useState } from "react";
import classNames from "classnames";
import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/core";
import { useSpring, animated } from "react-spring";

import NodeDetails from "../node_details/NodeDetails";

export interface TimeLineNodeProps {
  skills: string;
  onMouseOver: (skills: Array<string>) => void;
  from: string;
  till: string;
  role: string;
  left: number;
  width: number;
  isEven: boolean;
  companyName: string;
}

interface StyledNodeProps {
  isEven: boolean;
  left: number;
  width: number;
}

interface StyledCircleProps {
  companyName: string;
}

const StyledCircle = styled.div( (props:StyledCircleProps):SerializedStyles => {
    return css`
      position: absolute;
      height: 14px;
      width: 14px;
      border-radius: 50%;
      display: block;
      border: 1px dashed #0a354d;
      top: -15px;
      left: -8px;
      &:after{
        position:absolute;
        font-size: 0.7em;
        left: 20px;
        top: 1px;
        content: "${props.companyName}";
      }
      &:hover{
        background-color: #5d89a1;
      }
    `
});

const StyledNode = styled.div(  (props: StyledNodeProps): SerializedStyles => {
  return css(`
    position: absolute;
    height: 50px;
    width: ${props.width}px;
    padding: 1px;
    display: inline-block;    
    top: 35px;
    left: ${props.left}px;
    animation-name: fadeIn;
    animation-duration: 1s;
    cursor: pointer;
    border-left: 1px solid black;
    h5 { 
      left: 15px;
    }
`)
});

const TimeLineNode = (props: TimeLineNodeProps): React.ReactElement => {
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
        left={props.left}
        width={props.width}
    >
      <StyledCircle
          companyName={props.companyName}
          onMouseOver={() => {
            hoverOverNode();
          }}
          onMouseLeave={() => {
            onMouseLeave();
            props.onMouseOver([]);
          }}
      />
      <NodeDetails {...props} isVisible={isHoveringOver} />
    </StyledNode>
  );
};

export default TimeLineNode;
