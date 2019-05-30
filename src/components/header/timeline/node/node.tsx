import React from 'react';
import classNames from 'classnames';

export interface NodeProps {
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

export class Node extends React.Component<NodeProps>{
  state = {
      frameWidth: 0,
      totalAmountOfMonths: 0
  };

  private modifyClassName = (element:HTMLElement, add:boolean) => {
    if(element) { 
      //add class or reset to normal
      (add) ? element.className += " " + "add-shadow" : element.className = "icon";
    }
  }

  private toggleIconShadow = (add:boolean):void => {
    let skillName = this.props.skills;
    let skills = skillName.toLowerCase().split(" ");
  
    skills.map( (icon) => { 
        let idName = (icon.search(',') !== -1) ? icon.slice(0, -1) : icon;
        let element = document.getElementById(idName);
        this.modifyClassName(element, add);
    })
    
    this.props.onmouseOver(this.props.company);
  }

  public render():React.ReactNode { 
    const {from, till, role, skills, left, width, isEven, companyName, toggleUnder, toggleAbove} = this.props;
    
    const nodeStyle = {
      left: left + '%',
      width: width + '%'
    };

    return (
      <div className={classNames('node', {'isEven': isEven}, {'isHigher': (!isEven && toggleAbove) || (isEven && toggleUnder) })} style={nodeStyle}>
          <h5>{companyName}</h5>
          <div className='stick-node'>
            <div>
              <div className="circle" onMouseOver={ () => { this.toggleIconShadow(true)} } onMouseLeave={ () => { this.toggleIconShadow(false)} }>
                <div className='info-box-employer'>
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