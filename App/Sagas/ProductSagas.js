import { call, put } from 'redux-saga/effects'
import ProductActions from '../Redux/ProductRedux'
import { callApi } from './CallApiSaga'
import { storeProductFullDTOInDb , getProductFullDtoByShopIdInDb,getProductFullDtoByCategoryIdInDb} from '../Services/db-logic'
export function* getDbProducts(api, action) {
	const { shopId } = action
	const response = yield call(getProductFullDtoByShopIdInDb, shopId);
	// success?
	if (response !=='error') {
            console.tron.display('products By SHop Id',response)
	  yield put(ProductActions.productDbSuccess(response));
	} else {
	 yield put(ProductActions.productDbFailure(response));
	}
}

export function* getApiProducts(api, action) {
	const { shopId } = action
	const apiCall = call(api.getProducts, { shopId: shopId })
	const response = yield call(callApi, apiCall)
	console.tron.log('response', response)
	///success?
	if (response.ok) {
		console.tron.log('Profiles - OK')
		yield put(ProductActions.productApiSuccess(response.data))
		yield call(storeProductFullDTOInDb, response.data)
	} else {
		console.tron.log('Profiles - Fail')
		yield put(ProductActions.productApiFailure(response.data))
	}
}

export function* getProductByCategoryId(api, action) {
	const { categoryId } = action
	// fetch Product by Category Id  
	const response =yield call(getProductFullDtoByCategoryIdInDb, categoryId)
	// success?
	if (response!=='error') {
		yield put(ProductActions.productByCategoryDbSuccess(response))
	} else {
		yield put(ProductActions.productByCategoryDbFailure(response))
	}
}

export function* searchProducts(api, action) {
	const { query } = action
	// make the call to the api
	const apiCall = call(api.searchProducts, query)
	const response = yield call(callApi, apiCall)
	console.log(query)
	// success?
	if (response.ok) {
		yield put(ProductActions.productSearchSuccess(response.data))
	} else {
		yield put(ProductActions.productSearchFailure(response.data))
	}
}
