import { call, put } from 'redux-saga/effects';
import PinActions from '../Redux/PinRedux';
import { checkPinByUsernameInDb, storePinCodeInDb, veriFyPinInDb } from '../Services/db-logic';
// attempts to register
export function* pinSave(api, action) {
  const { pinObject } = action;

  const response = yield call(storePinCodeInDb, pinObject);
  console.log('Saved ', response,pinObject);
  if (response === 'error') {
    console.tron.log('PinCode - FAIL');
    yield put(PinActions.pinSaveFailure('WRONG'));
  } else {
    console.tron.log('PinCode - OK');
    yield put(PinActions.pinSaveSuccess(pinObject));
  }


}

// attempts to register
export function* pinCheck(api, actions) {
  const { pin } = actions;

  const response = yield call(veriFyPinInDb, parseInt(pin));

  console.log(response);
	//  success?
  if (response === 'error') {
    console.tron.log('PinCode - FAIL');
    yield put(PinActions.pinCheckingFailure('WRONG'));
  } else {
    console.tron.log('PinCode - OK');
    yield put(PinActions.pinCheckingSuccess(response));
  }
}

export function* pinCheckByUsername(api, actions) {
  const { userName } = actions;

  const response = yield call(checkPinByUsernameInDb, userName);
  console.log(response);
	//  success?
  if (response === 'error' || response === undefined) {
    console.tron.log('PinCode - FAIL');
    yield put(PinActions.pinCheckByUserNameFailure('WRONG'));
  } else {
    console.tron.log('PinCode - OK');
    yield put(PinActions.pinCheckByUserNameSuccess(response));
  }
}
