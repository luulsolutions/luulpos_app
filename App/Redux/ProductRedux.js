import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	productDbRequest: [ 'shopId' ],
	productApiRequest: [ 'shopId' ],
	productByCategoryDbRequest: [ 'categoryId' ],
	productApiSearchRequest: [ 'query' ],

	productDbSuccess: [ 'products' ],
	productApiSuccess: [ 'products' ],
	productByCategoryDbSuccess: [ 'products' ],
	productApiSearchSuccess: [ 'products' ],

	productDbFailure: [ 'error' ],
	productApiFailure: [ 'error' ],
	productByCategoryDbFailure: [ 'error' ],
	productApiSearchFailure: [ 'error' ]
})

export const ProductTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
	fetching: null,
	error: null,
	products: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const dbRequest = (state) =>
	state.merge({
		fetching: true,
		products: null
	})

// request the data from an api
export const apiRequest = (state) =>
	state.merge({
		fetching: true,
		products: null
	})

// request to update from an api
export const byCategoryDbRequest = (state) =>
	state.merge({
		fetching: true,
		products: null
	})
export const searchRequest = (state) =>
	state.merge({
		fetching: true,
		products: null
	})

// successful api lookup for single entity
export const dbSuccess = (state, action) => {
	const { products } = action
	return state.merge({
		fetching: false,
		error: null,
		products
	})
}
// successful api lookup for all entities
export const apiSuccess = (state, action) => {
	const { products } = action
	return state.merge({
		fetching: false,
		error: null,
		products
	})
}
// successful get Product By Id
export const byCategoryDbSuccess = (state, action) => {
	const { products } = action
	return state.merge({
		fetching: false,
		error: null,
		products
	})
}
// successful get Product search query
export const searchSuccess = (state, action) => {
	const { products } = action
	return state.merge({
		fetching: false,
		error: null,
		products
	})
}

// Something went wrong fetching a single entity.
export const dbFailure = (state, action) => {
	const { error } = action
	return state.merge({
		fetching: false,
		error: error,
		products: null
	})
}
// Something went wrong fetching all entities.
export const apiFailure = (state, action) => {
	const { error } = action
	return state.merge({
		fetching: false,
		error: error,
		products: null
	})
}
// Something went wrong updating.
export const byCategoryDbFailure = (state, action) => {
	const { error } = action
	return state.merge({
		fetching: false,
		error: error,
		products: null
	})
}

// Something went wrong updating.
export const searchFailure = (state, action) => {
	const { error } = action
	return state.merge({
		fetching: false,
		error: error,
		products: null
	})
}
// Something went wrong deleting.

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.PRODUCT_DB_REQUEST]: dbRequest,
	[Types.PRODUCT_API_REQUEST]: apiRequest,
	[Types.PRODUCT_BY_CATEGORY_DB_REQUEST]: byCategoryDbRequest,
	[Types.PRODUCT_API_SEARCH_REQUEST]: searchRequest,

	[Types.PRODUCT_DB_SUCCESS]: dbSuccess,
	[Types.PRODUCT_API_SUCCESS]: apiSuccess,
	[Types.PRODUCT_BY_CATEGORY_DB_SUCCESS]: byCategoryDbSuccess,
	[Types.PRODUCT_API_SEARCH_SUCCESS]: searchSuccess,

	[Types.PRODUCT_DB_FAILURE]: dbFailure,
	[Types.PRODUCT_API_FAILURE]: apiFailure,
	[Types.PRODUCT_BY_CATEGORY_DB_FAILURE]: byCategoryDbFailure,
	[Types.PRODUCT_API_SEARCH_FAILURE]: searchFailure
})
