import * as React from "react";
import {compleetKnowledgeStack} from './knowledgeStack.json';

class KnowledgeIcon {
    name:string;
    iconName:string;
    range:number;
    width:number;
    height:number;
 
   constructor(name:any, iconName:any, range:any){
     this.name = name; 
     this.iconName = iconName;
     this.range = Number(range);
   }
 
   getWidth(){
     return 70;
   }
   getHeight(){
     return 70;
   }
   getAltText(){
     return this.iconName + " icon";
   }
   getUrl(){
     return "/images/img/"+this.iconName+".png";
   }
   toString(){
     console.log(this.name + " " + this.iconName + " " + this.range);
   }
 }

const Icon = ( ) =>  {
    let knowledgeStack = []
  
      for(var prop in compleetKnowledgeStack){
        for(var i=0; i<compleetKnowledgeStack[prop].length; i++){
          var iconName = compleetKnowledgeStack[prop][0]["icon"];
          var range  = compleetKnowledgeStack[prop][0]["range"];
          let at = new KnowledgeIcon(prop, iconName, range);
          
          knowledgeStack.push(
            <div className="iconTile" id={prop.toLowerCase()}>
              <img src={at.getUrl()} alt={at.getAltText()} data-align="center" height={at.getHeight()} width={at.getWidth()}/>
            </div>
          )
        }
        return knowledgeStack;
    }  
}

export class Icons extends React.Component {
  render(){
      return (
          <div>
             {Icon}
          </div>
      )
  }
}

export class Knowledgestack extends React.Component {
    render(){
        return (
            <div className="App-knowledge-stack">
                <Icons />
            </div>
        )
    }
}