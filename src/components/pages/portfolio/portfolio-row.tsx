import React from "react";
import styled from "@emotion/styled";

import PortfolioColumn from "./portfolio-column";
import {PortfolioRowProps} from "./portfolio";

const StyledPortfolioRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PortfolioRow = ({imgName1, imgName2, imgName3}:PortfolioRowProps) => {
  return (
    <StyledPortfolioRow>
      <PortfolioColumn showCase={imgName1} />
      <PortfolioColumn showCase={imgName2} />
      {imgName3 && (
        <PortfolioColumn showCase={imgName3} />
      )}
    </StyledPortfolioRow>
  );
};

export default PortfolioRow;
