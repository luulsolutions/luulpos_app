import { call, put } from 'redux-saga/effects'
import ProfileActions from '../Redux/ProfileRedux'
import ProductActions from '../Redux/ProductRedux'
import { callApi } from './CallApiSaga'
import { localDateToJsDate } from '../Transforms/DateTransforms'
import { storeFullProfileDTOInDb, getFullProfileByUsernameInDb } from '../Services/db-logic'
export function* dbProfile(api, action) {
	const { username } = action
	// make the call to the api
	const response = yield call(getFullProfileByUsernameInDb, username)
	// success?
	if (response == 'error') {
		yield put(ProfileActions.fullProfileDbFailure(response))
	} else {
		console.tron.log(response);
		yield put(ProfileActions.fullProfileDbSuccess(response))
		yield put(ProductActions.productDbRequest(response.profileDTO.shopId))
	}
}

export function* apiProfile(api, action) {
	const { email } = action
	// make the call to the api

	const apiCall = call(api.getProfile, email)
	const response = yield call(callApi, apiCall)

	// success?
	if (response.ok) {
		
		const object = { ...response.data, username: response.data.userDTO.login }
		console.tron.log('profiles',object);
		yield put(ProfileActions.fullProfileApiSuccess(object))
		yield put(ProductActions.productApiRequest(response.data.profileDTO.shopId))
		yield call(storeFullProfileDTOInDb, object)
	
	} else {
		yield put(ProfileActions.fullProfileApiFailure('error'))
	}
}

export function* storeDbProfile(api, action) {
	const { profile } = action
	// make the call to the api
	const idIsNotNull = !!profile.id
	const apiCall = call(idIsNotNull ? api.updateProfile : api.createProfile, profile)
	const response = yield call(callApi, apiCall)

	// success?
	if (response.ok) {
		response.data = mapDateFields(response.data)
		yield put(ProfileActions.profileUpdateSuccess(response.data))
	} else {
		yield put(ProfileActions.profileUpdateFailure(response.data))
	}
}

function mapDateFields(data) {
	if (data.dateOfBirth) {
		data.dateOfBirth = localDateToJsDate(data.dateOfBirth)
	}
	if (data.registerationDate) {
		data.registerationDate = new Date(data.registerationDate)
	}
	if (data.lastAccess) {
		data.lastAccess = new Date(data.lastAccess)
	}
	return data
}
