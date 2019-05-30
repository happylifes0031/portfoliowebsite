import React from "react";
const compleetKnowledgeStack = require('../../../data/knowledgeStack.json');

export const Icons:React.SFC = () => ( 
  compleetKnowledgeStack.map( (element, index) => (
    <span key={'iconName_'+index} className="icon" id={element.icon}>
      <img src={"./images/icons/"+element.icon+".png"} alt={element.icon + " icon"} />
    </span>
  ))
)

export const Knowledgestack:React.SFC = () => ( 
  <div className="knowledge-stack">
    <Icons/>
  </div>
)
