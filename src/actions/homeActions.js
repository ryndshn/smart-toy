import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function sendForwardBackward(value) {
  return function(dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    console.log("SEND_FORWARD_BACKWARD " + value);
    return dispatch({
      type: types.SEND_FORWARD_BACKWARD,
      value
    });
  };
}

export function sendLeftRight(value) {
  return function(dispatch) {
    console.log("SEND_LEFT_RIGHT " + value);
    return dispatch( {
      type: types.SEND_LEFT_RIGHT,
      value
    });
  };
}
