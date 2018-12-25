import FixtureAPI from '../../App/Services/FixtureApi'
import { put } from 'redux-saga/effects'
import { getProfile, getProfiles, updateProfile, deleteProfile, searchProfiles } from '../../App/Sagas/ProfileSagas'
import ProfileActions from '../../App/Redux/ProfileRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('get success path', () => {
  const response = FixtureAPI.getProfile(1)
  const step = stepper(getProfile(FixtureAPI, { profileId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(ProfileActions.profileSuccess({id: 1})))
})

test('get failure path', () => {
  const response = {ok: false}
  const step = stepper(getProfile(FixtureAPI, { profileId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(ProfileActions.profileFailure()))
})

test('getAll success path', () => {
  const response = FixtureAPI.getProfiles()
  const step = stepper(getProfiles(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(ProfileActions.profileAllSuccess([{id: 1}, {id: 2}])))
})

test('getAll failure path', () => {
  const response = {ok: false}
  const step = stepper(getProfiles(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(ProfileActions.profileAllFailure()))
})

test('update success path', () => {
  const response = FixtureAPI.updateProfile({id: 1})
  const step = stepper(updateProfile(FixtureAPI, { profile: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(ProfileActions.profileUpdateSuccess({id: 1})))
})

test('update failure path', () => {
  const response = {ok: false}
  const step = stepper(updateProfile(FixtureAPI, { profile: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(ProfileActions.profileUpdateFailure()))
})

test('search success path', () => {
  const response = FixtureAPI.searchProfiles()
  const step = stepper(searchProfiles(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(ProfileActions.profileSearchSuccess([{id: 1}, {id: 2}])))
})

test('search failure path', () => {
  const response = {ok: false}
  const step = stepper(searchProfiles(FixtureAPI, '*'))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(ProfileActions.profileSearchFailure()))
})
test('delete success path', () => {
  const response = FixtureAPI.deleteProfile({id: 1})
  const step = stepper(deleteProfile(FixtureAPI, { profileId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(ProfileActions.profileDeleteSuccess({id: 1})))
})

test('delete failure path', () => {
  const response = {ok: false}
  const step = stepper(deleteProfile(FixtureAPI, { profileId: { id: 1 } }))
  // Step 1: Hit the api
  step()
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(ProfileActions.profileDeleteFailure()))
})
