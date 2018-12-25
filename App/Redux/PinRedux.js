import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	// for Save
  pinSaveRequest: ['pinObject'],
  pinSaveSuccess: ['pinObject'],
  pinSaveFailure: ['error'],

	// for Checking Availabilty of Pin
  pinCheckingRequest: ['pin'],
  pinCheckingSuccess: ['pinObject'],
  pinCheckingFailure: ['error'],
	// for Checking Availabilty of Pin
  pinCheckByUserNameRequest: ['userName'],
  pinCheckByUserNameSuccess: ['pinObject'],
  pinCheckByUserNameFailure: ['error'],
});

export const PinTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  pinObject: null,
  error: null,
  fetching: false,
});

/* ------------- Reducers ------------- */

// we're attempting to Save Pin and along userName and Password
export const SaveRequest = state =>
	state.merge({
  fetching: true,
  pinObject: null,
});
// we've successfully Saved Pin and along userName and Password
export const SaveSuccess = (state, action) => {
  const { pinObject } = action;
  return state.merge({
    fetching: false,
    error: null,
    pinObject,
  });
};
// we've had a problem Saving Pin
export const SaveFailure = (state, { error }) => state.merge({ fetching: false, error, pinObject: null });

// we're attempting to retrieve  Pin and along userName and Password
export const ChekingRequest = state =>
	state.merge({
  fetching: true,
  pinObject: null,
});

// we've successfully Saved Pin and along userName and Password
export const ChekingSuccess = (state, action) => {
  const { pinObject } = action;
  return state.merge({
    fetching: false,
    error: null,
    pinObject,
  });
};

// we've had a problem Saving
export const ChekingFailure = (state, { error }) => state.merge({ fetching: false, error, pinObject: null });

// we're attempting to retrieve  Pin and along userName and Password
export const CheckByUserNameRequest = state =>
	state.merge({
  fetching: true,
  pinObject: null,
});

// we've successfully Saved Pin and along userName and Password
export const CheckByUserNameSuccess = (state, action) => {
  const { pinObject } = action;
  return state.merge({
    fetching: false,
    error: null,
    pinObject,

  });
};

// we've had a problem Saving
export const CheckByUserNameFailure = (state, { error }) => state.merge({ fetching: false, error, pinObject: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	// storing PIn to DB
  [Types.PIN_SAVE_REQUEST]: SaveRequest,
  [Types.PIN_SAVE_SUCCESS]: SaveSuccess,
  [Types.PIN_SAVE_FAILURE]: SaveFailure,

	// for reducers for checking pin is stored and reterieving username and passowrd
  [Types.PIN_CHECKING_REQUEST]: ChekingRequest,
  [Types.PIN_CHECKING_SUCCESS]: ChekingSuccess,
  [Types.PIN_CHECKING_FAILURE]: ChekingFailure,

	// for reducesr in checking by Username
  [Types.PIN_CHECK_BY_USER_NAME_REQUEST]: CheckByUserNameRequest,
  [Types.PIN_CHECK_BY_USER_NAME_SUCCESS]: CheckByUserNameSuccess,
  [Types.PIN_CHECK_BY_USER_NAME_FAILURE]: CheckByUserNameFailure,
});

/* ------------- Selectors ------------- */
