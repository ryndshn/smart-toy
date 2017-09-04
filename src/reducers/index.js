import { combineReducers } from 'redux';
import home from './homeReducer';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  home,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
