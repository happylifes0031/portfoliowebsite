import React from "react";
import styled from '@emotion/styled';

import Context from "../../../context/Context";
import Icon from "../../atoms/Icon/Icon";
const compleetKnowledgeStack = require('../../../../data/knowledgeStack.json');

const StyledKnowLedgeStack = styled.div(`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`);

interface ListOfIconsProps {
    skillSet:string;
}

const ListOfIcons = ({skillSet}:ListOfIconsProps):JSX.Element => (
  compleetKnowledgeStack.map( (icon, index) => {
    return ( <Icon element={icon} key={icon.icon+'_'+index} active={skillSet.includes(icon.icon)} /> )
  })
);

const KnowledgeStack = ():React.ReactElement => (
    <StyledKnowLedgeStack>
      <Context.Consumer>
          { skillSet =>
               <ListOfIcons skillSet={skillSet}  />
          }
      </Context.Consumer>
    </StyledKnowLedgeStack>
);

export default KnowledgeStack;