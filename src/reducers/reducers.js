import TICK from '../constants/action-types';

const initialState = {
    count: 10
};

function rootReducer(state = initialState, action) {
    if (action.type === TICK) {
        console.log('tikkie takke');
        return Object.assign({}, state, {
            count: state.count -= 1
        });
    }
    return state;
};

export default rootReducer;