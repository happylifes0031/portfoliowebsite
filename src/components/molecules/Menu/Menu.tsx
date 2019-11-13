import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSpring, animated, config } from "react-spring";

import { Trail } from "react-spring/renderprops";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 10%;
  padding-right: 4em;
  font-family: roboto-bold;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 60px;
    height: 1px;
    margin-top: -7px;
    background-color: #e06c02;
  }
`;

const StyledMenuItem = styled.div`
  border-radius: 0.2rem;
  overflow: hidden;
  transition: all 0.5s ease;
  margin: 0.3em 0;
  letter-spacing: 0.2em;
  &:hover {
    background-color: orange;
    cursor: pointer;
  }
`;

interface MenuProps {
    togglePortfolio?: () => void;
    marginLeft : number;
    opacity: number;
    transform: string;
}

const Menu = (props) => {
  const menuItems = [
      {title:"Portfolio", url:"#portfolio"},
      {title:"C.V.", url:"../../../data/blijlevens_cv_eng.pdf"},
      {title:"Contact", url:"mailto:e-postduif@blijlevens.nu"}
  ];

  return (
    <StyledNav>
      <Trail
        items={menuItems}
        from={{
          marginLeft: -80,
          opacity: 0,
          transform: "translate3d(-80,-0,0)"
        }}
        to={{ marginLeft: 0, opacity: 1, transform: "translate3d(0,0,0)" }}
      >
        { menuItems => (animStyle) => (
          <animated.div style={animStyle}>
              <a href={menuItems.url} onClick={ () => { if( menuItems.title ==="Portfolio") { props.togglePortfolio() } } }>
                <StyledMenuItem >{menuItems.title}</StyledMenuItem>
              </a>
          </animated.div>
        )}
      </Trail>
    </StyledNav>
  );
};

export default Menu;

/* <a href="#portfolio" onClick={props.togglePortfolio}>
        Portfolio
      </a>
      <a href="mailto:e-postduif@blijlevens.nu">Contact</a>
      <a
        href="../../../../data/blijlevens_cv_eng.pdf"
        title="Download CV in English"
      >
        C.V. <span className="download-note">(PDF | 1.1mb)</span>
      </a>*/
