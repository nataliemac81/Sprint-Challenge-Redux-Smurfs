/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURFS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF
} from '../actions';



//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: null,
   addingSmurf: false,
   error: null
 }

export default (state = initialState, action) => {
  switch(action.type) {
      case FETCH_SMURFS_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      case GET_SMURFS:
        return {
          ...state,
          smurfs: action.payload
        };
      case ADD_SMURF:
        return {
          ...state,
          smurfs: action.payload
        };
      default:
        return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
 export default reducer