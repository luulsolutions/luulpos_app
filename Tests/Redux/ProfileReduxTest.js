import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/ProfileRedux'

test('attempt retrieving a single profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileRequest({id: 1}))

  expect(state.fetchingOne).toBe(true)
  expect(state.profile).toBe(null)
})

test('attempt retrieving a list of profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileAllRequest({id: 1}))

  expect(state.fetchingAll).toBe(true)
  expect(state.profiles).toBe(null)
})

test('attempt updating a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileUpdateRequest({id: 1}))

  expect(state.updating).toBe(true)
})
test('attempt searching a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileSearchRequest(1))

  expect(state.searching).toBe(true)
})
test('attempt to deleting a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileDeleteRequest({id: 1}))

  expect(state.deleting).toBe(true)
})

test('success retrieving a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileSuccess({id: 1}))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toBe(null)
  expect(state.profile).toEqual({id: 1})
})

test('success retrieving a list of profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileAllSuccess([{id: 1}, {id: 2}]))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toBe(null)
  expect(state.profiles).toEqual([{id: 1}, {id: 2}])
})

test('success updating a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileUpdateSuccess({id: 1}))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toBe(null)
  expect(state.profile).toEqual({id: 1})
})
test('success searching a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileSearchSuccess({id: 1}))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toBe(null)
  expect(state.profiles).toEqual({id: 1})
})
test('success deleting a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileDeleteSuccess())

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toBe(null)
  expect(state.profile).toEqual(null)
})

test('failure retrieving a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileFailure({error: 'Not found'}))

  expect(state.fetchingOne).toBe(false)
  expect(state.errorOne).toEqual({error: 'Not found'})
  expect(state.profile).toEqual(null)
})

test('failure retrieving a list of profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileAllFailure({error: 'Not found'}))

  expect(state.fetchingAll).toBe(false)
  expect(state.errorAll).toEqual({error: 'Not found'})
  expect(state.profiles).toEqual(null)
})

test('failure updating a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileUpdateFailure({error: 'Not found'}))

  expect(state.updating).toBe(false)
  expect(state.errorUpdating).toEqual({error: 'Not found'})
  expect(state.profile).toEqual(INITIAL_STATE.profile)
})
test('failure searching a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileSearchFailure({error: 'Not found'}))

  expect(state.searching).toBe(false)
  expect(state.errorSearching).toEqual({error: 'Not found'})
  expect(state.profiles).toEqual(null)
})
test('failure deleting a profile', () => {
  const state = reducer(INITIAL_STATE, Actions.profileDeleteFailure({error: 'Not found'}))

  expect(state.deleting).toBe(false)
  expect(state.errorDeleting).toEqual({error: 'Not found'})
  expect(state.profile).toEqual(INITIAL_STATE.profile)
})
