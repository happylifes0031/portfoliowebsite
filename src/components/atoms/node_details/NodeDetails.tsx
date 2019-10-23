import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";

interface ResumeTableProps {
  from: string;
  till: string;
  role: string;
  skills: string;
  isVisible: boolean;
}

const StyledResumeTable = styled(`div`)`
  position: absolute;
  width: 220px;
  background-color: orange;
  left: 23px;
  top: 71px;
  font-size: 0.7rem;
  padding: 1px;
  border-radius: 5px;
  z-index: 999;
  animation: fadein 1.5s;
  display: block;
  ul {
    display: flex;
    flex-wrap: wrap;
    background-color: #efefef;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    li {
      padding: 6px 0 3px 2px;
      border-bottom: 1px black dashed;
      &:last-of-type,
      &:nth-child(5) {
        border-bottom: none;
      }
      &:nth-child(odd) {
        width: 30%;
      }
      &:nth-child(even) {
        width: 68%;
      }
    }
  }
`;

const NodeDetails = ({
  from,
  till,
  role,
  skills,
  isVisible
}: ResumeTableProps): React.ReactElement => {
  const transition = useSpring({
    opacity: isVisible ? 1 : 0
  });

  return (
    <animated.div style={transition}>
      <StyledResumeTable>
        <ul>
          <li>
            <b>Timetable:</b>
          </li>
          <li>
            {from} | {till}
          </li>
          <li>
            <b>Rol:</b>
          </li>
          <li>{role}</li>
          <li>
            <b>Skills:</b>
          </li>
          <li>{skills}</li>
        </ul>
      </StyledResumeTable>
    </animated.div>
  );
};

export default NodeDetails;
