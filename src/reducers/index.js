import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer.js';

export const rootReducer = combineReducers({
  headlines: newsReducer
})