import React from "react";
import styled from "@emotion/styled";

import TechColophon from "../../atoms/TechColophon/TechColophon";

const StyledHeader = styled.header`
  display: flex;
  height: 80px;
  padding: 0;
`;

const StyledLibris = styled.div`
  height: 50px;
  max-width: 300px;
  > span { 
    font-size: 0.9em;
    margin-left: 1em;
  }
`;

const StyledLinkedIn = styled.div`
  margin-left: auto;
  margin-right: 1em;
`;

const Header = (): JSX.Element => (
  <StyledHeader>
    <StyledLibris>
      <img src={"./images/avatar.png"} alt="Avatar picture" height="40px" width="45px" />
      <span>W Blijlevens</span>
    </StyledLibris>
    <StyledLinkedIn>
      <a
        href="https://www.linkedin.com/in/wesley-blijlevens"
        title="View my LinkedIn page."
        target="_blank"
      >
        <img src={"./images/linkedin.png"} alt="LinkedIn icon" height="20px" width="20px" />
      </a>
    </StyledLinkedIn>
    <TechColophon />
  </StyledHeader>
);

export default Header;
