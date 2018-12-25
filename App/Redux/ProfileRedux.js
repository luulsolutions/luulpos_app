import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fullProfileDbRequest: ['username'],
  fullProfileApiRequest: ['email'],
  fullProfileStoreDbRequest: ['fullProfile'],

  fullProfileDbSuccess: ['fullProfile'],
  fullProfileApiSuccess: ['fullProfile'],
  fullProfileStoreDbSuccess: ['fullProfile'],


  fullProfileDbFailure: ['error'],
  fullProfileApiFailure: ['error'],
  fullProfileStoreDbFailure: ['error'],

})

export const ProfileTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  storing:null,
  fullProfile: null,
  error:null
})

/* ------------- Reducers ------------- */

// request the fullProfile data from an DB
export const dbRequest = (state) =>
  state.merge({
    fetching: true,
    fullProfile: null
  })

// request the fullProfile data  from an api
export const apiRequest = (state) =>
  state.merge({
    fetching: true,
    fullProfile: null
  })

// request to store  fullProfile from Api  data to DB 
export const storeDbRequest = (state) =>
  state.merge({
    storing: true,
    fullProfile:null

  })

// successful retrieve fullProfile from DB
export const dbSuccess = (state, action) => {
  const { fullProfile } = action
  return state.merge({
    fetching: false,
    error: null,
    fullProfile
  })
}
// successful api lookup for all entities
export const apiSuccess = (state, action) => {
  const { fullProfile } = action
  return state.merge({
    fetching: false,
    error: null,
    fullProfile
  })
}
// successful store fullProfile to Store
export const storeDbSuccess = (state, action) => {
  const { fullProfile } = action
  return state.merge({
    storing: false,
    error: null,
    fullProfile
  })
}

// Something went wrong fetching a single entity.
export const dbFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetching: false,
    error: error,
    fullProfile: null
  })
}
// Something went wrong fetching all entities.
export const apiFailure = (state, action) => {
  const { error } = action
  return state.merge({
    fetching: false,
    error: error,
    fullProfile: null
  })
}
// Something went wrong updating.
export const storeDbFailure = (state, action) => {
  const { error } = action
  return state.merge({
    storing: false,
    error: error,
    fullProfile: null
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FULL_PROFILE_DB_REQUEST]: dbRequest,
  [Types.FULL_PROFILE_API_REQUEST]: apiRequest,
  [Types.FULL_PROFILE_STORE_DB_REQUEST]: storeDbRequest,

  [Types.FULL_PROFILE_DB_SUCCESS]: dbSuccess,
  [Types.FULL_PROFILE_API_SUCCESS]: apiSuccess,
  [Types.FULL_PROFILE_STORE_DB_SUCCESS]: storeDbSuccess,


  [Types.FULL_PROFILE_DB_FAILURE]: dbFailure,
  [Types.FULL_PROFILE_API_FAILURE]: apiFailure,
  [Types.FULL_PROFILE_STORE_DB_FAILURE]: storeDbFailure,

})
