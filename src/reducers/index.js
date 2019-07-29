import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer.js';
import { errorReducer } from './errorReducer';
import { gifReducer } from './gifReducer'

export const rootReducer = combineReducers({
  headlines: newsReducer,
  error: errorReducer,
  gif: gifReducer
})