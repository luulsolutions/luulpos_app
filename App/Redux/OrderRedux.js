import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
	orderRequest: [ 'orderId' ],
	orderAllRequest: [ 'options' ],
	customerOrderAllRequest: [ 'options' ],
	customerOrderSave: [ 'customerOrders' ],
	orderUpdateRequest: [ 'order' ],
	orderSearchRequest: [ 'query' ],
	orderDeleteRequest: [ 'orderId' ],

	orderSuccess: [ 'order' ],
	orderAllSuccess: [ 'orders' ],
	customerOrderAllSuccess: [ 'customerOrders' ],
	customerOrderSaveSuccess: [ 'customerOrderSave' ],
	orderUpdateSuccess: [ 'order' ],
	orderSearchSuccess: [ 'orders' ],
	orderDeleteSuccess: [],

	orderFailure: [ 'error' ],
	orderAllFailure: [ 'error' ],
	orderUpdateFailure: [ 'error' ],
	customerOrderAllFailure: [ 'error' ],
	customerOrderSaveFailure: [ 'error' ],
	orderSearchFailure: [ 'error' ],
	orderDeleteFailure: [ 'error' ]
})

export const OrderTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
	fetchingOne: null,
	fetchingAll: null,
	fetchingAllCustomerOrders: null,
	savingCustomerOrder: null,
	updating: null,
	searching: null,
	deleting: null,
	order: null,
	orders: null,
	customerOrders: null,
	errorOne: null,
	errorAll: null,
	errorAllCustomerOrders: null,
	errorSaveCustomerOrders: null,
	errorUpdating: null,
	errorSearching: null,
	errorDeleting: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) =>
	state.merge({
		fetchingOne: true,
		order: null
	})

// request the data from an api
export const allRequest = (state) =>
	state.merge({
		fetchingAll: true,
		orders: null
	})

// request the Date of Customer Requested from ProductLIst
export const customerAllRequest = (state) =>
	state.merge({
		fetchingAllCustomerOrders: true,
		customerOrders: null
	})
export const customerSaveRequest = (state) =>
	state.merge({
		savingCustomerOrder: true
	})

// request to update from an api
export const updateRequest = (state) =>
	state.merge({
		updating: true
	})
// request to search from an api
export const searchRequest = (state) =>
	state.merge({
		searching: true
	})
// request to delete from an api
export const deleteRequest = (state) =>
	state.merge({
		deleting: true
	})

// successful api lookup for single entity
export const success = (state, action) => {
	const { order } = action
	return state.merge({
		fetchingOne: false,
		errorOne: null,
		order
	})
}
// successful api lookup for all entities
export const allSuccess = (state, action) => {
	const { orders } = action
	return state.merge({
		fetchingAll: false,
		errorAll: null,
		orders
	})
}
//  customer  Orders Requested from Product succesfull
export const customerAllSuccess = (state, action) => {
	const { customerOrders } = action
	return state.merge({
		fetchingAllCustomerOrders: false,
		errorAllCustomerOrders: null,
		customerOrders
	})
}
export const customerSaveSuccess = (state, action) => {
	const { customerOrderSave } = action
	if (state.customerOrders == null) {
		return state.merge({
			savingCustomerOrder: false,
			errorSaveCustomerOrders: null,
			customerOrders: customerOrderSave
		})
	} else {
    let oldOrders = state.customerOrders;
    let order = customerOrderSave;
        order.orderDTO.description= oldOrders.orderDTO.description+ 'and '+ order.orderDTO.description
        order.orderDTO.totalPrice += oldOrders.orderDTO.totalPrice;
        order.ordersLineDTOFullList = [].concat(oldOrders.ordersLineDTOFullList,order.ordersLineDTOFullList);
		return state.merge({
			savingCustomerOrder: false,
			errorSaveCustomerOrders: null,
			customerOrders: order
		})
	}
}
// successful api update
export const updateSuccess = (state, action) => {
	const { order } = action
	return state.merge({
		updating: false,
		errorUpdating: null,
		order
	})
}
// successful api search
export const searchSuccess = (state, action) => {
	const { orders } = action
	return state.merge({
		searching: false,
		errorSearching: null,
		orders
	})
}
// successful api delete
export const deleteSuccess = (state) =>
	state.merge({
		deleting: false,
		errorDeleting: null,
		customerOrders: null
	})

// Something went wrong fetching a single entity.
export const failure = (state, action) => {
	const { error } = action
	return state.merge({
		fetchingOne: false,
		errorOne: error,
		order: null
	})
}
// Something went wrong fetching all entities.
export const allFailure = (state, action) => {
	const { error } = action
	return state.merge({
		fetchingAll: false,
		errorAll: error,
		orders: null
	})
}
export const customerSaveFailure = (state, action) => {
	const { error } = action
	return state.merge({
		savingCustomerOrder: false,
		errorSaveCustomerOrders: error,
		customerOrders: null
	})
}
export const customerAllFailure = (state, action) => {
	const { error } = action
	return state.merge({
		fetchingAllCustomer: false,
		errorAllCustomer: error,
		customerOrders: null
	})
}
// Something went wrong updating.
export const updateFailure = (state, action) => {
	const { error } = action
	return state.merge({
		updating: false,
		errorUpdating: error,
		order: state.order
	})
}
// Something went wrong deleting.
export const deleteFailure = (state, action) => {
	const { error } = action
	return state.merge({
		deleting: false,
		errorDeleting: error,
		customerOrders: state.customerOrders
	})
}
// Something went wrong searching the entities.
export const searchFailure = (state, action) => {
	const { error } = action
	return state.merge({
		searching: false,
		errorSearching: error,
		orders: null
	})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
	[Types.ORDER_REQUEST]: request,
	[Types.ORDER_ALL_REQUEST]: allRequest,
	[Types.CUSTOMER_ORDER_ALL_REQUEST]: customerAllRequest,
	[Types.CUSTOMER_ORDER_SAVE]: customerSaveRequest,
	[Types.ORDER_UPDATE_REQUEST]: updateRequest,
	[Types.ORDER_SEARCH_REQUEST]: searchRequest,
	[Types.ORDER_DELETE_REQUEST]: deleteRequest,

	[Types.ORDER_SUCCESS]: success,
	[Types.ORDER_ALL_SUCCESS]: allSuccess,
	[Types.CUSTOMER_ORDER_ALL_SUCCESS]: customerAllSuccess,
	[Types.CUSTOMER_ORDER_SAVE_SUCCESS]: customerSaveSuccess,
	[Types.ORDER_UPDATE_SUCCESS]: updateSuccess,
	[Types.ORDER_SEARCH_SUCCESS]: searchSuccess,
	[Types.ORDER_DELETE_SUCCESS]: deleteSuccess,

	[Types.ORDER_FAILURE]: failure,
	[Types.ORDER_ALL_FAILURE]: allFailure,
	[Types.CUSTOMER_ORDER_ALL_FAILURE]: customerAllFailure,
	[Types.CUSTOMER_ORDER_SAVE_FAILURE]: customerSaveFailure,
	[Types.ORDER_UPDATE_FAILURE]: updateFailure,
	[Types.ORDER_SEARCH_FAILURE]: searchFailure,
	[Types.ORDER_DELETE_FAILURE]: deleteFailure
})
