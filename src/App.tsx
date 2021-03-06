import React, {useState, useEffect} from "react";
import styled from '@emotion/styled';
import Context from "./context/Context";

import Header from "./components/organisms/Header/Header";
import Portfolio from "./components/pages/portfolio/Portfolio";
import KnowledgeStack from "./components/templates/Knowledgestack/KnowledgeStack";
import Intro from "./components/templates/Intro/Intro";
import TimeLine from "./components/templates/Timeline/Timeline";

const StyledContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  flex-direction: column;
  background-color: #D5d8d5;
  font-family: roboto;
  letter-spacing: 1px;
  color: #000;
  text-transform: uppercase;
`;

const App = () => {
  const [hidePortfolio, setHidePortfolio] = useState(true);
  const [skillSet, setSkillSet] = useState('');

  const onMouseOver = (skillSet: string): void => setSkillSet(skillSet);

  const togglePortfolio = (): void => setHidePortfolio(!hidePortfolio);

  const handleScroll = (): void => {
    let lastScrollY = window.scrollY;

    if (!hidePortfolio && lastScrollY <= 50) {
      setHidePortfolio(!hidePortfolio);
    }
  };

  useEffect( () => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <Context.Provider value={skillSet}>
      {
        <StyledContainer>
          <Header />
          <TimeLine onMouseOver={onMouseOver} />
          <Intro togglePortfolio={togglePortfolio} />
          <KnowledgeStack />
          {
            !hidePortfolio && <Portfolio />
          }
        </StyledContainer>
      }
    </Context.Provider>
  );
};

export default App;
