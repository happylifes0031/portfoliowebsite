import React from "react";
import styled from "@emotion/styled";

import PortfolioRow from "./Portfolio-row";
const showCase = require("../../../../data/portfolioCases.json");


export interface PortfolioRowProps{
    client:string;
    description:string;
    projectTitle:string;
    imgName1:string;
    imgName2:string;
    imgName3:string;
}


const StyledPortfolio = styled.div`
  margin: 2em 0;
  h2 {
    margin: 1em 0 1.5em 0;
  }
`;

const StyledPortfolioContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  margin-bottom: 2em;
  &:after {
      content: '';
      height:2px;
      width: 45%;
      margin-top:1em;
      background-color: orange;
  }
`;

const StyledProjectInfo = styled.div`
  > div {
    font-family: roboto-bold;
    > span {
      font-size: 0.85em;
      font-family: roboto;
    }
  }
  &:last-child {
    margin: 0.5em 0;
  }
`;

const Portfolio = (): JSX.Element => {
  return (
    <StyledPortfolio id="portfolio">
      <h2>Portfolio</h2>
      {showCase.map((showCase:PortfolioRowProps) => {
        return (
          <StyledPortfolioContent>
            <StyledProjectInfo>
              <div>
                Client: <span>{showCase.client}</span>
              </div>
              <div>
                Project: <span>{showCase.projectTitle}</span>
              </div>
              <div>
                <span>{showCase.description}</span>
              </div>
            </StyledProjectInfo>
            <PortfolioRow {...showCase} />
          </StyledPortfolioContent>
        );
      })}
    </StyledPortfolio>
  );
};

export default Portfolio;
