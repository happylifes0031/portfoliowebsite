import React, { useState } from "react";
import styled from "@emotion/styled";

import { useSpring, animated } from "react-spring";

const StyledTechColophon = styled(`div`)`
  display: none;
  position: relative;
  flex-direction: column;
  width: 150px;
  height: 140px;
  background-color: #fff;
  z-index: 999;
  padding: 0 0.5em;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  div {
    text-align: center;
    letter-spacing: 2px;
    font-size: 0.7em;
  }
  ul {
    background-color: #fff;
    font-size: 0.8em;
    margin-bottom: 1.5em;
    li {
      margin: 0.2em 0;
    }
  }
  @media (min-width: 960px) {
    display: block;
  }
`;

const TechColophon = (): JSX.Element => {
  const [onHover, setOnHover] = useState(false);
  const transitions = useSpring({
    marginTop: onHover ? 0 : -120
  });
  return (
    <animated.div
      onMouseOver={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      style={transitions}
    >
      <StyledTechColophon>
        <ul>
          <li>HTML5 & SASS</li>
          <li>React</li>
          <li>Webpack</li>
          <li>ES6</li>
          <li>Version: 3.0</li>
          <li>14/05/2019</li>
        </ul>
        <div>Colophon</div>
      </StyledTechColophon>
    </animated.div>
  );
};

export default TechColophon;
