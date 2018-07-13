import React, { Component } from 'react';
import IconsKnowledgeStack from './knowledgestack/icons-knowledgestack';

const IconKnowledgeStack = () => { 
    render() {
      let knowledgeStack = []
  
      for(var prop in compleetKnowledgeStack){
        for(var i=0; i<compleetKnowledgeStack[prop].length; i++){
          var iconName = compleetKnowledgeStack[prop][0]["icon"];
          var range  = compleetKnowledgeStack[prop][0]["range"];
          let at = new KnowledgeIcon(prop, iconName, range);
          
          knowledgeStack.push(
            <div className="iconTile" id={prop.toLowerCase()}>
              <img src={at.getUrl()} alt={at.getAltText()} align="center" height={at.getHeight()} width={at.getWidth()}/>
            </div>
          )
        }
      }
      
      return (
        <div>
          {knowledgeStack}
        </div>
      )
    }
}
  
export class Knowledgestack extends Component {
    render(){
        return (
            <div className="App-knowledge-stack">
                {IconsKnowledgeStack}
            </div>
        )
    }
}