import * as React from 'react';
import classNames from 'classnames';

class Node extends React.Component{
  state = {
      frameWidth: 0,
      totalAmountOfMonths: 0
  };

  removeClass(){
    let skillName = this.props.skills;
    var skills = skillName.toLowerCase().split(" ");
    
    for(let i in skills) { 
      let idName = (skills[i].search(',') !== -1) ? skills[i].slice(0, -1) : skills[i];
      console.log(idName);
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
      console.log(idName);
      let element = document.getElementById(idName);
      console.log(element);
      if(element) { 
        if (!element.className.match("addShadow")) {
          element.className += " " + "addShadow";
        }
      }
    }
  }

  render() { 
    const {from, till, role, skills, left, width, isEven, companyName, toggleUnder, toggleAbove} = this.props;
    
    const nodeStyle = {
      left: left + '%',
      width: width + '%'
    };
    
    return (
      <div className={classNames('node', {'isEven': isEven}, {'isHigher': (!isEven && toggleAbove) || (isEven && toggleUnder) })} style={nodeStyle}>
          <h5>{companyName}</h5>
          <div className='stickNode'>
            <div className={classNames('verticalLine', {'isEven': isEven})}>
              <div className="circle" onMouseOver={this.addShadowToTile.bind(this)} onMouseLeave={this.removeClass.bind(this)}>
                <div className='infoBoxEmployer'>
                  <ul>
                    <li>Tijdsperiode:</li>
                    <li>{from} | {till}</li>
                    <li>Rol:</li>
                    <li>{role}</li>
                    <li>Skills:</li>
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