import { FEATURE_FETCHED } from '../actions/types';

export default (state = {message: ''}, action) => {
  switch(action.type) {
    case FEATURE_FETCHED:
      return { ...state, message: action.payload.message };
  }
  return state;
}
