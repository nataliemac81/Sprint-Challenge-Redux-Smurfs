/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  ADD_SMURF,
  FETCH_SMURFS,
  FETCH_SMURFS_BEGIN,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
} from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   error: null,
   name: '',
   age: '',
   height: ''
 }

export default (state = initialState, action) => {
  switch(action.type) {
      case FETCH_SMURFS_BEGIN:
        return {
          ...state,
          fetchingSmurfs: true,
          error: null
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: action.payload
        };
      case FETCH_SMURFS_FAILURE:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload.error,
          smurfs: []
        }
      case FETCH_SMURFS:
        const { smurfs } = action.payload
        return {
          ...state,
          fetchingSmurfs: false,
          error: null,
          smurfs
        };
      case ADD_SMURF:
        return {
          ...state,
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height
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