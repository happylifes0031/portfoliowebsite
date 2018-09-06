import * as React from 'react';
import classNames from 'classnames';

class Node extends React.Component{
  state = {
      frameWidth: 0,
      totalAmountOfMonths: 0
  };

  render() { 
    const {from, till, role, skills, left, width, isEven} = this.props;
    
    const nodeStyle = {
      left: left + '%',
      width: width + '%'
    };
    
    return (
      <div className={classNames('node', {'isEven': isEven})} style={nodeStyle}>
        <h3>hro</h3>
        <div className="circle" >
          <div className="infoBoxEmployer">
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
        <div className="verticalLine">
        </div>
      </div>
    )
  }
}

export default Node;