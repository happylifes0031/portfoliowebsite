import * as React from 'react';

class Node extends React.Component{
  state = {
      frameWidth: 0
  };

  render() { 
    return (
      <div className="node">
        <h3>hro</h3>
        <div className="circle">
          <div className="infoBoxEmployer">
            <ul>
              <li>Tijdsperiode:</li>
              <li>09-2012 | 04-2016</li>
              <li>Rol:</li>
              <li>Parttime docent informatica</li>
              <li>Skills:</li>
              <li>Assessor</li>
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