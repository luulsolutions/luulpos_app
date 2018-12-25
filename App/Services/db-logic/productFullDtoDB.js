import _ from 'lodash'
import realm from './db'

export const storeProductFullDTOInDb = (object) =>
	new Promise((resolve, reject) => {
		try {
			realm.write(() => {
				for (let i = 0; i < object.length; i++) {
					const objectSave = {
						...object[i],
						shopId: object[i].productDTO.shopId,
						productId: object[i].productDTO.id,
						categoryId: object[i].productDTO.categoryId
					}
					realm.create('ProductDTOFull', objectSave, true)
					console.tron.log('Product successfly saved', objectSave)
				}
			})
			console.tron.log('Product successfly saved')
			resolve(object)
		} catch (e) {
			console.tron.log('Error on ProductFullDTO Store', e)
			resolve('error')
		}
	})

export const getProductFullDtoByShopIdInDb = (shopId) =>
	new Promise((resolve, reject) => {
		try {
			const object = realm.objects('ProductDTOFull').filtered(`shopId == "${shopId}"`)
			const array = _.values(object)
			resolve(array);
		} catch (e) {
			resolve('error')
			console.tron.log('Error on Find product BY shopID', e)
		}
	})

	export const getProductFullDtoByCategoryIdInDb = (categoryId) =>
	new Promise((resolve, reject) => {
		try {
			const object = realm.objects('ProductDTOFull').filtered(`categoryId == "${categoryId}"`)
			const array = _.values(object)
			console.tron.log(' Profile CategoryID', array);
			resolve(array)
		} catch (e) {
			resolve('error')
			console.tron.log('Error on Find Profile', e)
		}
	})
