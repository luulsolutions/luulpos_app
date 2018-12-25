import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  productVariantRequest: ['productVariantId'],
  productVariantAllRequest: ['options'],
  productVariantUpdateRequest: ['productVariant'],
  productVariantSearchRequest: ['query'],
  productVariantDeleteRequest: ['productVariantId'],

  productVariantSuccess: ['productVariant'],
  productVariantAllSuccess: ['productVariants'],
  productVariantUpdateSuccess: ['productVariant'],
  productVariantSearchSuccess: ['productVariants'],
  productVariantDeleteSuccess: [],

  productVariantFailure: ['error'],
  productVariantAllFailure: ['error'],
  productVariantUpdateFailure: ['error'],
  productVariantSearchFailure: ['error'],
  productVariantDeleteFailure: ['error'],
});

export const ProductVariantTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  productVariant: null,
  productVariants: null,
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
    productVariant: null,
  });

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    productVariants: null,
  });

// request to update from an api
export const updateRequest = state =>
  state.merge({
    updating: true,
  });
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
  const { productVariant } = action;
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    productVariant,
  });
};
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { productVariants } = action;
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    productVariants,
  });
};
// successful api update
export const updateSuccess = (state, action) => {
  const { productVariant } = action;
  return state.merge({
    updating: false,
    errorUpdating: null,
    productVariant,
  });
};
// successful api search
export const searchSuccess = (state, action) => {
  const { productVariants } = action;
  return state.merge({
    searching: false,
    errorSearching: null,
    productVariants,
  });
};
// successful api delete
export const deleteSuccess = state => state.merge({
  deleting: false,
  errorDeleting: null,
  productVariant: null,
});

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    productVariant: null,
  });
};
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    productVariants: null,
  });
};
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    updating: false,
    errorUpdating: error,
    productVariant: state.productVariant,
  });
};
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    deleting: false,
    errorDeleting: error,
    productVariant: state.productVariant,
  });
};
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    searching: false,
    errorSearching: error,
    productVariants: null,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCT_VARIANT_REQUEST]: request,
  [Types.PRODUCT_VARIANT_ALL_REQUEST]: allRequest,
  [Types.PRODUCT_VARIANT_UPDATE_REQUEST]: updateRequest,
  [Types.PRODUCT_VARIANT_SEARCH_REQUEST]: searchRequest,
  [Types.PRODUCT_VARIANT_DELETE_REQUEST]: deleteRequest,

  [Types.PRODUCT_VARIANT_SUCCESS]: success,
  [Types.PRODUCT_VARIANT_ALL_SUCCESS]: allSuccess,
  [Types.PRODUCT_VARIANT_UPDATE_SUCCESS]: updateSuccess,
  [Types.PRODUCT_VARIANT_SEARCH_SUCCESS]: searchSuccess,
  [Types.PRODUCT_VARIANT_DELETE_SUCCESS]: deleteSuccess,

  [Types.PRODUCT_VARIANT_FAILURE]: failure,
  [Types.PRODUCT_VARIANT_ALL_FAILURE]: allFailure,
  [Types.PRODUCT_VARIANT_UPDATE_FAILURE]: updateFailure,
  [Types.PRODUCT_VARIANT_SEARCH_FAILURE]: searchFailure,
  [Types.PRODUCT_VARIANT_DELETE_FAILURE]: deleteFailure,
});
