import {SEND_FORWARD_BACKWARD, SEND_LEFT_RIGHT, SEND_START, SEND_STOP, SEND_PLAY} from '../constants/actionTypes';
import {defaultValue} from '../constants/marks';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case SEND_FORWARD_BACKWARD:
      return objectAssign({}, state, {forwardBackward: action.value});
    case SEND_LEFT_RIGHT:
      return objectAssign({}, state, {leftRight: action.value});
    case SEND_START:
      return objectAssign({}, state, {forwardBackward: defaultValue, leftRight: defaultValue});
    case SEND_STOP:
      return objectAssign({}, state, {forwardBackward: defaultValue, leftRight: defaultValue});
    case SEND_PLAY:
      return objectAssign({}, state, {forwardBackward: defaultValue, leftRight: defaultValue});
    default:
      return state;
  }
}
