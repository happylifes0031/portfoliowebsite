import React from "react";
const compleetKnowledgeStack = require('../../../data/knowledgeStack.json');

export const Icons = () => {
  return compleetKnowledgeStack.map( (element, index) => { 
    return (
      <span key={'iconName_'+index} className="icon" id={element.icon}>
        <img src={"./images/icons/"+element.icon+".png"} alt={element.icon + " icon"} />
      </span>
  )})
}

export const Knowledgestack = () => {  
  return ( 
    <div className="knowledge-stack">
      <Icons/>
    </div>
  )
}
