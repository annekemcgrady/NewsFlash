import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer.js';
import { errorReducer } from './errorReducer'

export const rootReducer = combineReducers({
  headlines: newsReducer,
  error: errorReducer
})