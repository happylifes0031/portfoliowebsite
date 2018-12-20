// src/js/actions/index.js
export function tick() {
    return { type: "TICK" }
};

function incrementAsync() {
    return dispatch => {
      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(tick());
      }, 1000);
    };
  }