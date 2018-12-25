import { put } from 'redux-saga/effects'
import { startup } from '../../App/Sagas/StartupSagas'
import LoginActions from '../../App/Redux/LoginRedux'
import AccountActions from '../../App/Redux/AccountRedux'
import AppStateActions from '../../App/Redux/AppStateRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('calls the right actions on startup', () => {
  const step = stepper(startup())
  expect(step()).toEqual(put(LoginActions.loginLoad()))
  expect(step()).toEqual(put(AccountActions.accountRequest()))
  expect(step()).toEqual(put(AppStateActions.setRehydrationComplete()))
})

test('calls the right actions when console.tron is null', () => {
  console.tron = null
  const step = stepper(startup())
  expect(step()).toEqual(put(LoginActions.loginLoad()))
  expect(step()).toEqual(put(AccountActions.accountRequest()))
  expect(step()).toEqual(put(AppStateActions.setRehydrationComplete()))
})
