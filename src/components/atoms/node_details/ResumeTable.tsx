import React from "react";
import styled from "@emotion/styled";

interface ResumeTableProps {
  from: string;
  till: string;
  role: string;
  skills: string;
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
  display: "block";
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

const ResumeTable = ({ from, till, role, skills}: ResumeTableProps) => (
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
);

export default ResumeTable;
