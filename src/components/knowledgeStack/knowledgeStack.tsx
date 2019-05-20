import React from "react";

const compleetKnowledgeStack = require('../../../data/knowledgeStack.json');
const ICON_WIDTH_IN_PIXELS:number = 50;
const ICON_HEIGHT_IN_PIXELS:number = 50;
const UNIT_TYPE = 'px';

export const Icons = () => {
  return compleetKnowledgeStack.map( (element, index) => { 
    return (
        <div key={'iconName_'+index} className="outerIcon" >
          <div className="iconTile" id={element}>
            <img src={"./images/img/"+element.icon+".png"} alt={element.icon + " icon"} 
            data-align="center" height={`${ICON_HEIGHT_IN_PIXELS}`+UNIT_TYPE} width={`${ICON_WIDTH_IN_PIXELS}`+UNIT_TYPE}/>
          </div>
        </div>
  )})
}

export const Knowledgestack = () => {  
  return ( 
    <div className="App-knowledge-stack">
      <div className="displayStack">  
        <Icons/>
      </div>
    </div>
)
