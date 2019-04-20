import {
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY
} from '../actions/index';

export default function(state = "Active", action) {
  switch(action.type) {
    case ADD_TO_HISTORY:
      return state
    case REMOVE_FROM_HISTORY:
      return state
      
    default:
      return state;
  }
}