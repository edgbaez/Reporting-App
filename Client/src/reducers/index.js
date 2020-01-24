import { combineReducers } from 'redux';

import allfiles from './readReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  allfiles
});

export default rootReducer;