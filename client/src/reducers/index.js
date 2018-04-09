import { combineReducers } from 'redux';
import balanceReducer from './balanceReducer';
import estimateReducer from './estimateReducer';
import tradeReducer from './tradeReducer';

export default combineReducers({
  balance: balanceReducer,
  estimate: estimateReducer,
  trade: tradeReducer
});