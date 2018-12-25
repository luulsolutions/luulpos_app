export const ProductDTOFull = {
	name: 'ProductDTOFull',
	primaryKey: 'productId',
	properties: {
		discountDTOList: { type: 'list', objectType: 'DiscountDTO' },
		productDTO: { type: 'ProductDTO' },
		productExtraDTOList: { type: 'list', objectType: 'ProductExtraDTO' },
		productVariantsDTOList: { type: 'list', objectType: 'ProductVariantDTO' },
		taxDTOList: { type: 'list', objectType: 'TaxDTO' },
		categoryId: { type: 'int' ,optional:true},
		productId: { type: 'int', optional:true },
		shopId: { type: 'int', optional: true }
	}
}
export const DiscountDTO = {
	name: 'DiscountDTO',
	primaryKey:'id',
	properties: {
		active: { type: 'bool', optional: true },
		amount: { type: 'double' },
		description: { type: 'string' },
		id: { type: 'int', indexed: true },
		percentage: { type: 'double' },
		shopId: { type: 'int', optional: true },
		shopShopName: { type: 'string', optional: true }
	}
}
export const ProductDTO = {
	name: 'ProductDTO',
	primaryKey:'id',
	properties: {
		active: { type: 'bool', optional: true },
		barcode: { type: 'string', optional: true },
		categoryCategory: { type: 'string', optional: true },
		categoryId: { type: 'int', optional: true },
		dateCreated: { type: 'string', optional: true },
		discountsDescription: { type: 'string', optional: true },
		discountsId: { type: 'int', optional: true },
		id: { type: 'int', indexed: true },
		isVariantProduct: { type: 'bool', optional: true },
		price: { type: 'double', optional: true },
		priorityPosition: { type: 'int', optional: true },
		productDescription: { type: 'string', optional: true },
		productImageFull: { type: 'string', optional: true },
		productImageFullContentType: { type: 'string', optional: true },
		productImageFullUrl: { type: 'string', optional: true },
		productImageThumb: { type: 'string', optional: true },
		productImageThumbContentType: { type: 'string', optional: true },
		productImageThumbUrl: { type: 'string', optional: true },
		productName: { type: 'string' },
		productTypesId: { type: 'int', optional: true },
		productTypesProductType: { type: 'string', optional: true },
		quantity: { type: 'int' },
		serialCode: { type: 'string', optional: true },
		shopId: { type: 'int', optional: true },
		shopShopName: { type: 'string', optional: true },
		taxesDescription: { type: 'string', optional: true },
		taxesId: { type: 'int', optional: true }
	}
}
export const ProductExtraDTO = {
	name: 'ProductExtraDTO',
	primaryKey:'id',
	properties: {
		description: { type: 'string', optional: true },
		extraName: { type: 'string', optional: true },
		extraValue: { type: 'double', optional: true },
		fullPhoto: { type: 'string', optional: true },
		fullPhotoContentType: { type: 'string', optional: true },
		fullPhotoUrl: { type: 'string', optional: true },
		id: { type: 'int', indexed: true },
		productId: { type: 'int', optional: true },
		productProductName: { type: 'string', optional: true },
		thumbnailPhoto: { type: 'string', optional: true },
		thumbnailPhotoContentType: { type: 'string', optional: true },
		thumbnailPhotoUrl: { type: 'string', optional: true }
	}
}
export const ProductVariantDTO = {
	name: 'ProductVariantDTO',
	primaryKey:'id',
	properties: {
		description: { type: 'string', optional: true },
		fullPhoto: { type: 'string', optional: true },
		fullPhotoContentType: { type: 'string', optional: true },
		fullPhotoUrl: { type: 'string', optional: true },
		id: { type: 'int', indexed: true },
		percentage: { type: 'double', optional: true },
		price: { type: 'double' },
		productId: { type: 'int', optional: true },
		productProductName: { type: 'string', optional: true },
		thumbnailPhoto: { type: 'string', optional: true },
		thumbnailPhotoContentType: { type: 'string', optional: true },
		thumbnailPhotoUrl: { type: 'string', optional: true },
		variantName: { type: 'string', optional: true }
	}
}
export const TaxDTO = {
	name: 'TaxDTO',
	primaryKey:'id',
	properties: {
		active: { type: 'bool', optional: true },
		amount: { type: 'double' },
		description: { type: 'string' },
		id: { type: 'int', indexed: true },
		percentage: { type: 'double' },
		shopId: { type: 'int', optional: true },
		shopShopName: { type: 'string', optional: true }
	}
}

