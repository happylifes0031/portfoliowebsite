import React from "react";
import styled from "@emotion/styled";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 20%;
`;

const Menu = props => (
  <StyledNav>
    <a href="#portfolio" onClick={props.togglePortfolio}>
      Portfolio
    </a>
    <a href="mailto:e-postduif@blijlevens.nu">Contact</a>
    <a
      href="../../../../data/blijlevens_cv_eng.pdf"
      title="Download CV in English"
    >
      C.V. <span className="download-note">(PDF | 1.1mb)</span>
    </a>
  </StyledNav>
);

export default Menu;
