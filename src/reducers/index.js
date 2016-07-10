import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import feature from './feature';
import auth from './auth';

const rootReducer = combineReducers({
  form,
  auth,
  feature
});

export default rootReducer;
