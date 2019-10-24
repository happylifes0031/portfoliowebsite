import React from "react";
import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";
import { css, SerializedStyles } from "@emotion/core";

interface ResumeTableProps {
  from: string;
  till: string;
  role: string;
  skills: string;
  isVisible: boolean;
  top: number;
}

interface StyledResumeTableProps {
  top: number;
}

const StyledResumeTable = styled.div( ({top}:StyledResumeTableProps):SerializedStyles => { return css`
  position: absolute;
  width: 250px;
  background-color: orange;
  left: 23px;
  top: ${top}px;
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
    padding: 3px;
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
`});

const NodeDetails = ({
  from,
  till,
  role,
  skills,
  isVisible,
    top
}: ResumeTableProps): React.ReactElement => {
  const transition = useSpring({
    opacity: isVisible ? 1 : 0
  });

  return (
    <>
      {isVisible && (
        <StyledResumeTable top={top}>
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
      )}
    </>
  );
};

export default NodeDetails;
