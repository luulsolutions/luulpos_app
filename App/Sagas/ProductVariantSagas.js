import { call, put } from 'redux-saga/effects';
import ProductVariantActions from '../Redux/ProductVariantRedux';
import { callApi } from './CallApiSaga';

export function* getProductVariant(api, action) {
  const { productVariantId } = action;
  // make the call to the api
  const apiCall = call(api.getProductVariant, productVariantId);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductVariantActions.productVariantSuccess(response.data));
  } else {
    yield put(ProductVariantActions.productVariantFailure(response.data));
  }
}

export function* getProductVariants(api, action) {
  const { options } = action;
  // make the call to the api
  const apiCall = call(api.getProductVariants, options);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductVariantActions.productVariantAllSuccess(response.data));
  } else {
    yield put(ProductVariantActions.productVariantAllFailure(response.data));
  }
}

export function* updateProductVariant(api, action) {
  const { productVariant } = action;
  // make the call to the api
  const idIsNotNull = !!productVariant.id;
  const apiCall = call(idIsNotNull ? api.updateProductVariant : api.createProductVariant, productVariant);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductVariantActions.productVariantUpdateSuccess(response.data));
  } else {
    yield put(ProductVariantActions.productVariantUpdateFailure(response.data));
  }
}

export function* searchProductVariants(api, action) {
  const { query } = action;
  // make the call to the api
  const apiCall = call(api.searchProductVariants, query);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductVariantActions.productVariantSearchSuccess(response.data));
  } else {
    yield put(ProductVariantActions.productVariantSearchFailure(response.data));
  }
}
export function* deleteProductVariant(api, action) {
  const { productVariantId } = action;
  // make the call to the api
  const apiCall = call(api.deleteProductVariant, productVariantId);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(ProductVariantActions.productVariantDeleteSuccess());
  } else {
    yield put(ProductVariantActions.productVariantDeleteFailure(response.data));
  }
}
