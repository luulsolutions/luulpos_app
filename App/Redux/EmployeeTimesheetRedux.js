import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  employeeTimesheetRequest: ['employeeTimesheetId'],
  employeeTimesheetAllRequest: ['options'],
  employeeTimesheetUpdateRequest: ['employeeTimesheet'],
  employeeTimesheetCreate: ['employeeTimesheet'],
  employeeTimesheetSearchRequest: ['query'],
  employeeTimesheetDeleteRequest: ['employeeTimesheetId'],

  employeeTimesheetSuccess: ['employeeTimesheet'],
  employeeTimesheetAllSuccess: ['employeeTimesheets'],
  employeeTimesheetUpdateSuccess: ['employeeTimesheet'],
  employeeTimesheetCreateSuccess: ['employeeTimesheet'],

  employeeTimesheetSearchSuccess: ['employeeTimesheets'],
  employeeTimesheetDeleteSuccess: [],

  employeeTimesheetFailure: ['error'],
  employeeTimesheetAllFailure: ['error'],
  employeeTimesheetUpdateFailure: ['error'],
  employeeTimesheetCreateFailure: ['error'],
  employeeTimesheetSearchFailure: ['error'],
  employeeTimesheetDeleteFailure: ['error'],
});

export const EmployeeTimesheetTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  employeeTimesheet: null,
  employeeTimesheets: '',
  creatingEmployeeTimesheet:null,
  errorOne: null,
  errorAll: null,
  errorUpdating: null,
  errorSearching: null,
  errorDeleting: null,
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state =>
  state.merge({
    fetchingOne: true,
    employeeTimesheet: null,
  });

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    employeeTimesheets: null,
  });

// request to update from an api
export const updateRequest = state =>
  state.merge({
    updating: true,
  });

  export const employeeTimesheet = (state)=>
  state.merge({
    creatingEmployeeTimesheet: true
  })
// request to search from an api
export const searchRequest = state =>
  state.merge({
    searching: true,
  });
// request to delete from an api
export const deleteRequest = state =>
  state.merge({
    deleting: true,
  });

// successful api lookup for single entity
export const success = (state, action) => {
  const { employeeTimesheet } = action;
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    employeeTimesheet,
  });
};
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { employeeTimesheets } = action;
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    employeeTimesheets:employeeTimesheets,
  });
};
// successful api update
export const updateSuccess = (state, action) => {
  const { employeeTimesheet } = action;
  return state.merge({
    updating: false,
    errorUpdating: null,
    employeeTimesheet,
  });
};

export const employeeTimesheetCreateSuccess = (state,acton)=>{
  const { employeeTimesheet} = action
  return state.merge({
    creatingEmployeeTimesheet: false,
    errorOne:null,
    employeeTimesheet
  })
}



// successful api search
export const searchSuccess = (state, action) => {
  const { employeeTimesheets } = action;
  return state.merge({
    searching: false,
    errorSearching: null,
    employeeTimesheets,
  });
};
// successful api delete
export const deleteSuccess = state => state.merge({
  deleting: false,
  errorDeleting: null,
  employeeTimesheet: null,
});

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    employeeTimesheet: null,
  });
};
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    employeeTimesheets: null,
  });
};

export const employeeTimesheetCreateFailure = (state, action) =>{
    const {error} = action
    return state.merge({
      creatingEmployeeTimesheet:false,
      error,
      employeeTimesheet:null
    })


}
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    updating: false,
    errorUpdating: error,
    employeeTimesheet: state.employeeTimesheet,
  });
};
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    deleting: false,
    errorDeleting: error,
    employeeTimesheet: state.employeeTimesheet,
  });
};
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    searching: false,
    errorSearching: error,
    employeeTimesheets: null,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMPLOYEE_TIMESHEET_REQUEST]: request,
  [Types.EMPLOYEE_TIMESHEET_ALL_REQUEST]: allRequest,
  [Types.EMPLOYEE_TIMESHEET_UPDATE_REQUEST]: updateRequest,
  [Types.EMPLOYEE_TIMESHEET_CREATE]:employeeTimesheet,
  [Types.EMPLOYEE_TIMESHEET_SEARCH_REQUEST]: searchRequest,
  [Types.EMPLOYEE_TIMESHEET_DELETE_REQUEST]: deleteRequest,

  [Types.EMPLOYEE_TIMESHEET_SUCCESS]: success,
  [Types.EMPLOYEE_TIMESHEET_ALL_SUCCESS]: allSuccess,
  [Types.EMPLOYEE_TIMESHEET_UPDATE_SUCCESS]: updateSuccess,
  [Types.EMPLOYEE_TIMESHEET_CREATE_SUCCESS]:employeeTimesheetCreateSuccess,
  [Types.EMPLOYEE_TIMESHEET_SEARCH_SUCCESS]: searchSuccess,
  [Types.EMPLOYEE_TIMESHEET_DELETE_SUCCESS]: deleteSuccess,

  [Types.EMPLOYEE_TIMESHEET_FAILURE]: failure,
  [Types.EMPLOYEE_TIMESHEET_ALL_FAILURE]: allFailure,
  [Types.EMPLOYEE_TIMESHEET_UPDATE_FAILURE]: updateFailure,
  [Types.EMPLOYEE_TIMESHEET_CREATE_FAILURE]: employeeTimesheetCreateFailure,
  [Types.EMPLOYEE_TIMESHEET_SEARCH_FAILURE]: searchFailure,
  [Types.EMPLOYEE_TIMESHEET_DELETE_FAILURE]: deleteFailure,
});
