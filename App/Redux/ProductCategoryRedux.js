import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  productCategoryRequest: ['productCategoryId'],
  productCategoryAllRequest: ['options'],
  productCategoryUpdateRequest: ['productCategory'],
  productCategorySearchRequest: ['query'],
  productCategoryDeleteRequest: ['productCategoryId'],

  productCategorySuccess: ['productCategory'],
  productCategoryAllSuccess: ['productCategories'],
  productCategoryUpdateSuccess: ['productCategory'],
  productCategorySearchSuccess: ['productCategories'],
  productCategoryDeleteSuccess: [],

  productCategoryFailure: ['error'],
  productCategoryAllFailure: ['error'],
  productCategoryUpdateFailure: ['error'],
  productCategorySearchFailure: ['error'],
  productCategoryDeleteFailure: ['error'],
});

export const ProductCategoryTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetchingOne: null,
  fetchingAll: null,
  updating: null,
  searching: null,
  deleting: null,
  productCategory: null,
  productCategories: null,
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
    productCategory: null,
  });

// request the data from an api
export const allRequest = state =>
  state.merge({
    fetchingAll: true,
    productCategories: null,
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
  const { productCategory } = action;
  return state.merge({
    fetchingOne: false,
    errorOne: null,
    productCategory,
  });
};
// successful api lookup for all entities
export const allSuccess = (state, action) => {
  const { productCategories } = action;
  return state.merge({
    fetchingAll: false,
    errorAll: null,
    productCategories,
  });
};
// successful api update
export const updateSuccess = (state, action) => {
  const { productCategory } = action;
  return state.merge({
    updating: false,
    errorUpdating: null,
    productCategory,
  });
};
// successful api search
export const searchSuccess = (state, action) => {
  const { productCategories } = action;
  return state.merge({
    searching: false,
    errorSearching: null,
    productCategories,
  });
};
// successful api delete
export const deleteSuccess = state =>
  state.merge({
    deleting: false,
    errorDeleting: null,
    productCategory: null,
  });

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({
    fetchingOne: false,
    errorOne: error,
    productCategory: null,
  });
};
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    fetchingAll: false,
    errorAll: error,
    productCategories: null,
  });
};
// Something went wrong updating.
export const updateFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    updating: false,
    errorUpdating: error,
    productCategory: state.productCategory,
  });
};
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    deleting: false,
    errorDeleting: error,
    productCategory: state.productCategory,
  });
};
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
  const { error } = action;
  return state.merge({
    searching: false,
    errorSearching: error,
    productCategories: null,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCT_CATEGORY_REQUEST]: request,
  [Types.PRODUCT_CATEGORY_ALL_REQUEST]: allRequest,
  [Types.PRODUCT_CATEGORY_UPDATE_REQUEST]: updateRequest,
  [Types.PRODUCT_CATEGORY_SEARCH_REQUEST]: searchRequest,
  [Types.PRODUCT_CATEGORY_DELETE_REQUEST]: deleteRequest,

  [Types.PRODUCT_CATEGORY_SUCCESS]: success,
  [Types.PRODUCT_CATEGORY_ALL_SUCCESS]: allSuccess,
  [Types.PRODUCT_CATEGORY_UPDATE_SUCCESS]: updateSuccess,
  [Types.PRODUCT_CATEGORY_SEARCH_SUCCESS]: searchSuccess,
  [Types.PRODUCT_CATEGORY_DELETE_SUCCESS]: deleteSuccess,

  [Types.PRODUCT_CATEGORY_FAILURE]: failure,
  [Types.PRODUCT_CATEGORY_ALL_FAILURE]: allFailure,
  [Types.PRODUCT_CATEGORY_UPDATE_FAILURE]: updateFailure,
  [Types.PRODUCT_CATEGORY_SEARCH_FAILURE]: searchFailure,
  [Types.PRODUCT_CATEGORY_DELETE_FAILURE]: deleteFailure,
});
