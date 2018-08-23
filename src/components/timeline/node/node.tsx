import * as React from 'react';

class Node extends React.Component{
  state = {
      frameWidth: 0
  };

  render() { 
    return (
      <div className="node">
        <div className="circle">
        </div>
        <div className="verticalLine">
        </div>
      </div>
    )
  }
}

export default Node;