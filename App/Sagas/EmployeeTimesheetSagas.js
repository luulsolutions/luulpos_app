import { call, put } from 'redux-saga/effects';
import EmployeeTimesheetActions from '../Redux/EmployeeTimesheetRedux';
import { callApi } from './CallApiSaga';

export function* getEmployeeTimesheet(api, action) {
  const { employeeTimesheetId } = action;
  // make the call to the api
  const apiCall = call(api.getEmployeeTimesheet, employeeTimesheetId);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    console.tron.log("result of success",response.data)
    yield put(EmployeeTimesheetActions.employeeTimesheetSuccess(response.data));
  } else {
    yield put(EmployeeTimesheetActions.employeeTimesheetFailure(response.data));
  }
}


export function* createEmployeeTimesheet(api, action) {
  const { employeeTimesheet } = action;
  // make the call to the api
  console.tron.log("done",employeeTimesheet)
  const apiCall = call(api.createEmployeeTimesheet, employeeTimesheet);
  const response = yield call(callApi, apiCall);

  if (response.ok) {
    console.tron.log(employeeTimesheet)
    yield put(EmployeeTimesheetActions.employeeTimesheetAllSuccess(response.data));
  } else {
    yield put(EmployeeTimesheetActions.employeeTimesheetAllFailure(response.data));
  }
}

export function* getEmployeeTimesheets(api, action) {
  const { options } = action;
  // make the call to the api
  const apiCall = call(api.getEmployeeTimesheets, options);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(EmployeeTimesheetActions.employeeTimesheetAllSuccess(response.data));
  } else {
    yield put(EmployeeTimesheetActions.employeeTimesheetAllFailure(response.data));
  }
}

export function* updateEmployeeTimesheet(api, action) {
  const { employeeTimesheet } = action;
  // make the call to the api
  const idIsNotNull = !!employeeTimesheet.id;
  const apiCall = call(idIsNotNull ? api.updateEmployeeTimesheet : api.createEmployeeTimesheet, employeeTimesheet);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(EmployeeTimesheetActions.employeeTimesheetUpdateSuccess(response.data));
  } else {
    yield put(EmployeeTimesheetActions.employeeTimesheetUpdateFailure(response.data));
  }
}

export function* searchEmployeeTimesheets(api, action) {
  const { query } = action;
  // make the call to the api
  const apiCall = call(api.searchEmployeeTimesheets, query);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(EmployeeTimesheetActions.employeeTimesheetSearchSuccess(response.data));
  } else {
    yield put(EmployeeTimesheetActions.employeeTimesheetSearchFailure(response.data));
  }
}
export function* deleteEmployeeTimesheet(api, action) {
  const { employeeTimesheetId } = action;
  // make the call to the api
  const apiCall = call(api.deleteEmployeeTimesheet, employeeTimesheetId);
  const response = yield call(callApi, apiCall);

  // success?
  if (response.ok) {
    yield put(EmployeeTimesheetActions.employeeTimesheetDeleteSuccess());
  } else {
    yield put(EmployeeTimesheetActions.employeeTimesheetDeleteFailure(response.data));
  }
}
