import React from "react";
import { connect } from "react-redux";
import tick from '../actions/action.js';

const mapDispatchToProps = (dispatch) => ({
  tick(count) { 
     dispatch(tick(count))
    }
});

const ConnectedList = (props, {count} ) => (
setTimeout( () => props.tick({count}), 1000),
  <ul className="list-group list-group-flush">
    {count}
  </ul>
);

const List = connect(null, mapDispatchToProps)(ConnectedList);

export default List;