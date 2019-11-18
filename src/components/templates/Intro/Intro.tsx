import React from "react";
import styled from "@emotion/styled";

import { TitlesH1, TitlesH2 } from "../../atoms/Titles/Titles";
import Content from "../../organisms/Content/Content";

const StyledIntro = styled.main`
  padding-top: 3em;
`;

const Intro = (props): JSX.Element => (
  <StyledIntro>
    <TitlesH2>Hello, I am a freelance</TitlesH2>
    <TitlesH1>front-end developer</TitlesH1>
    <TitlesH2>& hobby game developer</TitlesH2>
    <Content togglePortfolio={props.togglePortfolio} />
  </StyledIntro>
);

export default Intro;