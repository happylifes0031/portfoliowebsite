import * as React from "react";


const compleetKnowledgeStack = require('../../../data/knowledgeStack.json');
const ICON_WIDTH_IN_PIXELS:number = 50;
const ICON_HEIGHT_IN_PIXELS:number = 50;

class Knowledgestack extends React.Component {  
  render() {
    let knowledgeStack:any[] = []; 

    Object.keys(compleetKnowledgeStack).forEach( (stackName, index) => {
      knowledgeStack.push(compleetKnowledgeStack[stackName].icon);
    });

    knowledgeStack = knowledgeStack.map( (element, index) => { 
      return (
        <div  key={'iconName_'+index} className="outerIcon" >
          <div className="iconTile" id={element}>
            <img src={"./images/img/"+element+".png"} alt={element + " icon"} 
            data-align="center" height={`${ICON_HEIGHT_IN_PIXELS}`+'px'} width={`${ICON_WIDTH_IN_PIXELS}`+'px'}/>
          </div>
        </div>
    )})

    return ( 
      <div className="App-knowledge-stack">
        <div className="displayStack">  
          {knowledgeStack}
        </div>
      </div>
    )
  }
      
};


export default Knowledgestack;