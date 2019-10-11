import React from 'react';
import styled from "@emotion/styled";

const StyledIcon = styled.span(`
    margin-right: 0.8em;
      margin-top: 0.8em;
      transition-property: all;
      transition-duration: 1s;
      display:flex;
      justify-content: center;
      align-items: center;
`);

const StyledImage = styled.img(`
    width: 40px;
    height: 40px;
`)

const Icon = ({element}) => (
    <StyledIcon className="icon" id={element.icon} >
      <StyledImage src={"./images/icons/"+element.icon+".png"} alt={element.icon + " icon"} />
    </StyledIcon>
);

export default Icon;