import {SET_CURRENT_CARD} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function fuelSavingsReducer(state = initialState.currCardIcons, action) {

  switch (action.type) {
    case SET_CURRENT_CARD:
      return objectAssign({}, state, {dateModified: action.dateModified});

    default:
      return state;
  }
}
