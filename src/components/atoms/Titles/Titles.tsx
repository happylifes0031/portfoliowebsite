import React from "react";
import styled from "@emotion/styled";

interface IStyledTitles {
  children?: React.ReactChild;
}

const StyledTitleH2 = styled.h2`
  font-size: 1.5em;
  letter-spacing: 0.2em;
  margin:0;
`;

export const TitlesH2 = ({ children }: IStyledTitles): JSX.Element =>
    (<StyledTitleH2>{children}</StyledTitleH2>);

const StyledTitleH1 = styled.h1`
  font-size: 5em;
  font-family: roboto-bold;
  letter-spacing: 0.2em;
  margin:0;
`;

export const TitlesH1 = ({ children }: IStyledTitles): JSX.Element =>
  (<StyledTitleH1>{children}</StyledTitleH1>);
