import React from "react";
import styled from "@emotion/styled";

interface IStyledTitles {
  children?: React.ReactChild;
}

const StyledTitleH2 = styled.h2`
  font-size: 1.5em;
  letter-spacing: 0.2em;
`;

export const TitlesH2 = ({ children }: IStyledTitles) => {
  return <StyledTitleH2>{children}</StyledTitleH2>;
};

const StyledTitleH1 = styled.h1`
  font-size: 3em;
  letter-spacing: 0.2em;
`;

export const TitlesH1 = ({ children }: IStyledTitles) => {
  return <StyledTitleH1>{children}</StyledTitleH1>;
};
