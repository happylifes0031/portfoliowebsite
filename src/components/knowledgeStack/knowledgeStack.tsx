import React from "react";
import styled from '@emotion/styled';

import Icon from "../atoms/Icon/Icon";
const compleetKnowledgeStack = require('../../../data/knowledgeStack.json');

const StyledKnowLedgeStack = styled.div(`
    margin: 0 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`);

const KnowledgeStack = ():React.ReactElement => (
  <StyledKnowLedgeStack>
      {
          compleetKnowledgeStack.map( (element, index) => (
              <Icon element={element} key={element.icon+index} />
          ))
      }
  </StyledKnowLedgeStack>
);

export default KnowledgeStack;