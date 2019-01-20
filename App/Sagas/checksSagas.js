import { call, put } from 'redux-saga/effects'
import EmployeeTimeSheetActions from '../Redux/checkRedux'
import { callApi } from './CallApiSaga'
import { getFullProfileByUsernameInDb } from '../Services/db-logic'

 


export function* employeTimesheet(api, action) {
  console.tron.log('wuu gaadeh')
    const { profileId } = action;
    // make the call to the api
    const apiCall = call(api.employeTimesheet, profileId);
    const response = yield call(callApi, apiCall);
  
    // success?
    if (response.ok) {
      response.data = mapDateFields(response.data);
      yield put(EmployeeTimeSheetActions.employeTimesheetSuccess(response.data));
      console.tron.log('timesheet', response.data);
    } else {
      yield put(EmployeeTimeSheetActions.employeTimesheetFailure('error'));
    }
  }
