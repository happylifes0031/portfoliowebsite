import React from "react";
// @ts-ignore
import styled from "@emotion/styled";
// @ts-ignore
import { css, SerializedStyles } from "@emotion/core";

interface StyledIconProps {
  active: boolean;
}

const StyledIcon = styled.span(
  (props: StyledIconProps): SerializedStyles => {
    return css([
      css`
        margin-right: 0.8em;
        margin-top: 0.8em;
        transition-property: all;
        transition-duration: 1s;
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-filter: grayscale(90%);
        -moz-filter: grayscale(90%);
        -o-filter: grayscale(90%);
        -ms-filter: grayscale(90%);
        filter: grayscale(90%);
      `,
      props.active &&
        css`
          display: block;
          height: inherit;
          border-radius: 5px;
          -webkit-filter: grayscale(0%);
          -moz-filter: grayscale(0%);
          -o-filter: grayscale(0%);
          -ms-filter: grayscale(0%);
          filter: grayscale(0%);
        `
    ]);
  }
);

const StyledImage = styled.img(
  (props: StyledIconProps): SerializedStyles => {
    return css([
      `
        width: 40px;
       height: 40px;
      transition-property: all;
      transition-duration: 1s;
    `,
      props.active &&
        `    
        width: 50px;
        height: 50px;
        border-radius:5px;
        
          -webkit-box-shadow: 1px 1px 12px 0px rgba(0,0,0,0.35);
            -moz-box-shadow: 1px 1px 12px 0px rgba(0,0,0,0.35);
            box-shadow: 1px 1px 12px 0px rgba(0,0,0,0.35);
    `
    ]);
  }
);

const Icon = ({ element, active }) => (
  <StyledIcon className="icon" id={element.icon} active={active}>
    <StyledImage
      src={"./images/icons/" + element.icon + ".png"}
      alt={element.icon + " icon"}
      active={active}
    />
  </StyledIcon>
);

export default Icon;
