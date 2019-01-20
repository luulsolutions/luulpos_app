import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  employeTimesheetRequest: [''],
  employeTimesheetSuccess: ['profileId'],
  employeTimesheetFailure: ['error'],

   

})

export const EmployeTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  employe: null,
  error:null
})

/* ------------- Reducers ------------- */

 

// request the employee data  from an api
export const employeTimesheetRequest = (state) =>
  state.merge({
    fetching: true,
    employe: null
  })

 

// successful retrieve employe from api
export const employeTimesheetSuccess = (state, action) => {
  const { employe } = action
  return state.merge({
    fetching: false,
    error: null,
    employe
  })
}
  


// Something went wrong fetching employe.
export const employeTimesheetFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetching: false,
    error: error,
    employe: null
  })
}
 

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMPLOYE_TIMESHEET_REQUEST]: employeTimesheetRequest,
  [Types.EMPLOYE_TIMESHEET_SUCCESS]: employeTimesheetSuccess,
  [Types.EMPLOYE_TIMESHEET_FAILURE]: employeTimesheetFailure,

  

})
