import * as React from 'react';
import classNames from 'classnames';

export interface Props {
  skills: string;
  onmouseOver: any;
  company: string;
  from: string;
  till: string;
  role: string;
  left: number;
  width: number;
  isEven: boolean;
  companyName: string;
  toggleUnder: boolean;
  toggleAbove: boolean;
}

class Node extends React.Component<Props>{
  state = {
      frameWidth: 0,
      totalAmountOfMonths: 0
  };

  removeClass(){
    let skillName = this.props.skills;
    var skills = skillName.toLowerCase().split(" ");
    
    for(let i in skills) { 
      let idName = (skills[i].search(',') !== -1) ? skills[i].slice(0, -1) : skills[i];
      let element = document.getElementById(idName);

      if(element) { 
        if (element.className.match("iconTile addShadow")) {
          element.className = "iconTile";
        }
      }
    }
  }

  addShadowToTile( ){
    let skillName = this.props.skills;
    var skills = skillName.toLowerCase().split(" ");
    
    for(let i in skills) { 
      let idName = (skills[i].search(',') !== -1) ? skills[i].slice(0, -1) : skills[i];
      let element = document.getElementById(idName);
      
      if(element) { 
        if (!element.className.match("addShadow")) {
          element.className += " " + "addShadow";
        }
      }
    }
    this.props.onmouseOver(this.props.company);
  }

  render() { 
    const {from, till, role, skills, left, width, isEven, companyName, toggleUnder, toggleAbove} = this.props;
    
    const nodeStyle = {
      left: left + '%',
      width: width + '%'
    };
    /*
    className={classNames('verticalLine', {'isEven': isEven})}
    */
    return (
      <div className={classNames('node', {'isEven': isEven}, {'isHigher': (!isEven && toggleAbove) || (isEven && toggleUnder) })} style={nodeStyle}>
          <h5>{companyName}</h5>
          <div className='stickNode'>
            <div>
              <div className="circle" onMouseOver={this.addShadowToTile.bind(this)} onMouseLeave={this.removeClass.bind(this)}>
                <div className='infoBoxEmployer'>
                  <ul>
                    <li><b>Timetable:</b></li>
                    <li>{from} | {till}</li>
                    <li><b>Rol:</b></li>
                    <li>{role}</li>
                    <li><b>Skills:</b></li>
                    <li>{skills}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Node;