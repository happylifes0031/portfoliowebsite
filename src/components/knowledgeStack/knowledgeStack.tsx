import * as React from "react";
import compleetKnowledgeStack from '../../../data/knowledgeStack.json';

const ICON_WIDTH_IN_PIXELS:number = 70;
const ICON_HEIGHT_IN_PIXELS:number = 70;

const Knowledgestack = () => {
  let knowledgeStack:Array = []; 

  Object.keys(compleetKnowledgeStack).forEach( (stackName, index) => {
    knowledgeStack.push(compleetKnowledgeStack[stackName].icon);
  });

  return knowledgeStack.map( (element, index) => { 
      return (<div key={'iconName_'+index} className="iconTile" id={element}>
        <img src={"/images/img/"+element+".png"} alt={element + " icon"} data-align="center" height={ICON_HEIGHT_IN_PIXELS} width={ICON_WIDTH_IN_PIXELS}/>
      </div>
  });
};


export default Knowledgestack;