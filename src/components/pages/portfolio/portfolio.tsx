import React from "react";
import styled from "@emotion/styled";

import { PortfolioRow } from "./portfolio-row";
const showCase = require("../../../../data/portfolioCases.json");

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
      {showCase.map((showcase, index) => {
        return (
          <StyledPortfolioContent>
            <StyledProjectInfo>
              <div>
                Client: <span>{showcase.client}</span>
              </div>
              <div>
                Project: <span>{showcase.projectTitle}</span>
              </div>
              <div>
                <span>{showcase.description}</span>
              </div>
            </StyledProjectInfo>
            <PortfolioRow showcase={showcase} index={index} />
          </StyledPortfolioContent>
        );
      })}
    </StyledPortfolio>
  );
};

export default Portfolio;
