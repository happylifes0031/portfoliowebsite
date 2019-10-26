import React from "react";
import styled from "@emotion/styled";

import Menu from "../../molecules/Menu/Menu";

const StyledContent = styled.div`
  display: flex;
  padding-top: 3em;
`;

const StyledArticle = styled.article`
  color: #0a354d;
  text-transform: initial;
  line-height: 1.5em;
  text-align: justify;
`;

const Content = () => (
  <StyledContent>
    <Menu />
    <StyledArticle>
      Freelance front-end developer and hobby game developer. Born and raised in
      Rotterdam, living in Amsterdam. I have background in game development and
      currently do front-end development. With a love for technology and design,
      I have taught myself 3D design and programming!
      <span> Currently working for:</span>{" "}
      <span className="working-for">deva</span>
    </StyledArticle>
  </StyledContent>
);

export default Content;
