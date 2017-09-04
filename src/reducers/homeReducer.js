import {SEND_FORWARD_BACKWARD, SEND_LEFT_RIGHT} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function homeReducer(state = initialState.home, action) {
  let newState;

  switch (action.type) {
    case SEND_FORWARD_BACKWARD:
      return objectAssign({}, state, {forwardBackward: action.value});
    case SEND_LEFT_RIGHT:
      return objectAssign({}, state, {leftRight: action.value});

    default:
      return state;
  }
}
