import _ from 'lodash'
import realm from './db'
export const storeFullProfileDTOInDb = (object) =>
	new Promise((resolve, reject) => {
		try {
			realm.write(() => {
				realm.create('ProfileDTOFull', object, true)
			})
			resolve(object)
		} catch (e) {
			console.log('error', e)
			resolve('error')
			console.log('Error on creation')
		}
	})

export const getFullProfileByUsernameInDb = (userName) =>
	new Promise((resolve, reject) => {
		try {
			const object = realm.objects('ProfileDTOFull').filtered(`username == "${userName}"`)
			const array = _.values(object)
			resolve(array[0])
		} catch (e) {
			resolve('error')
			console.log('Error on Find Profile', e)
		}
	})
