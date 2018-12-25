import { call, put } from 'redux-saga/effects';
import ProductCategoryActions from '../Redux/ProductCategoryRedux';
import { callApi } from './CallApiSaga';

export function* getProductCategory(api, action) {
  const { productCategoryId } = action;
  // make the call to the api
  const apiCall = call(api.getProductCategory, productCategoryId);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductCategoryActions.productCategorySuccess(response.data));
  } else {
    yield put(ProductCategoryActions.productCategoryFailure(response.data));
  }
}

export function* getProductCategories(api, action) {
  console.log('saga debug', action);
  const { options } = action;
  // make the call to the api
  const apiCall = call(api.getProductCategories, options);
  const response = yield call(callApi, apiCall);
  // success?
  if (response.ok) {
    yield put(ProductCategoryActions.productCategoryAllSuccess(response.data));
  } else {
    yield put(ProductCategoryActions.productCategoryAllFailure(response.data));
  }
}

export function* updateProductCategory(api, action) {
  const { productCategory } = action;
  // make the call to the api
  const idIsNotNull = !!productCategory.id;
  const apiCall = call(
    idIsNotNull ? api.updateProductCategory : api.createProductCategory,
    productCategory,
  );
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductCategoryActions.productCategoryUpdateSuccess(response.data));
  } else {
    yield put(ProductCategoryActions.productCategoryUpdateFailure(response.data));
  }
}

export function* searchProductCategories(api, action) {
  const { query } = action;
  // make the call to the api
  const apiCall = call(api.searchProductCategories, query);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductCategoryActions.productCategorySearchSuccess(response.data));
  } else {
    yield put(ProductCategoryActions.productCategorySearchFailure(response.data));
  }
}
export function* deleteProductCategory(api, action) {
  const { productCategoryId } = action;
  // make the call to the api
  const apiCall = call(api.deleteProductCategory, productCategoryId);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductCategoryActions.productCategoryDeleteSuccess());
  } else {
    yield put(ProductCategoryActions.productCategoryDeleteFailure(response.data));
  }
}
