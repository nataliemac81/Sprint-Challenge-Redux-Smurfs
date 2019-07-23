import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_BEGIN = 'FETCH_SMURFS_BEGIN';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const fetchSmurfsBegin = () => ({
  type: FETCH_SMURFS_BEGIN
})

export const fetchSmurfsSuccess = (smurfs) => ({
  type: FETCH_SMURFS_SUCCESS,
  payload: { smurfs }
})

export const fetchSmurfsFailure = (error) => ({
  type: FETCH_SMURFS_FAILURE,
  payload: { error }
})

export const addSmurf = (name, age, height) => ({
  type: ADD_SMURF,
  payload: {
    name,
    age,
    height
  }
})

export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch({type: FETCH_SMURFS_BEGIN})
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.data })
      })
  }

}


