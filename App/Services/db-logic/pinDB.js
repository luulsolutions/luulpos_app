import realm from './db';
export const storePinCodeInDb = (newPinObject) =>
	new Promise((resolve, reject) => {
		try {
			realm.write(() => {
				realm.create('PinCode', newPinObject, true)
			})
			resolve(newPinObject)
		} catch (e) {
			resolve(e)
			console.log('Error on creation', e)
		}
	})
export const checkPinByUsernameInDb = (userName) =>
	new Promise((resolve, reject) => {
		try {
			const object = realm.objectForPrimaryKey('PinCode', userName)
			console.log('pinobject', object)
			resolve(object)
		} catch (e) {
			resolve('error')
			console.log('Error on creation')
		}
	})
export const deleteAllPInCodeInDb = () =>
	new Promise((resolve, reject) => {
		try {
			realm.write(() => {
				const allPinCode = realm.objects('PinCode')
				realm.delete(allPinCode) // delete All PIN Code
			})

			resolve('Deleted All PinCode')
		} catch (e) {
			resolve('error')
			console.log('Error on creation')
		}
	})
export const veriFyPinInDb = (pin) =>
	new Promise((resolve, reject) => {
		try {
			const pinObject = realm.objects('PinCode').filtered(`pin == ${pin}`)
			const array = Array.from(pinObject)
			resolve(array[0])
		} catch (e) {
			resolve(e)
			console.log('ERROR Checking PIn', e)
		}
	})
