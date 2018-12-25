export const CompanyDTO = {
	name: 'CompanyDTO',
	primaryKey:'id',
	properties: {
		active: { type: 'bool' ,optional: true },
		companyLogo: { type: 'string' ,optional: true },
		companyLogoContentType: { type: 'string' ,optional: true },
		companyLogoUrl: { type: 'string' ,optional: true },
		companyName: { type: 'string' ,optional: true },
		description: { type: 'string' ,optional: true },
		id: { type: 'int' ,optional: true },
		note: { type: 'string' ,optional: true }
	}
}
export const ProductCategoryDTO = {
	name: 'ProductCategoryDTO',
	primaryKey:'id',
	properties: {
		category: { type: 'string' ,optional: true },
		description: { type: 'string' ,optional: true },
		id: { type: 'int' ,optional: true },
		imageFull: { type: 'string' ,optional: true },
		imageFullContentType: { type: 'string' ,optional: true },
		imageFullUrl: { type: 'string' ,optional: true },
		imageThumb: { type: 'string' ,optional: true },
		imageThumbContentType: { type: 'string' ,optional: true },
		imageThumbUrl: { type: 'string' ,optional: true },
		shopId: { type: 'int' ,optional: true },
		shopShopName: { type: 'string' ,optional: true }
	}
}
export const ProfileDTO = {
	name: 'ProfileDTO',
	primaryKey:'id',
	properties: {
		active: { type: 'bool' ,optional: true },
		dateOfBirth: { type: 'string' ,optional: true },
		email: { type: 'string' ,optional: true },
		firstName: { type: 'string' ,optional: true },
		fullPhoto: { type: 'string' ,optional: true },
		fullPhotoContentType: { type: 'string' ,optional: true },
		fullPhotoUrl: { type: 'string' ,optional: true },
		gender: { type: 'string' ,optional: true },
		hourlyPayRate: { type: 'int' ,optional: true },
		id: { type: 'int' },
		lastAccess: { type: 'string' ,optional: true },
		lastName: { type: 'string' ,optional: true },
		mobile: { type: 'string' ,optional: true },
		profileStatus: { type: 'string' ,optional: true },
		registerationDate: { type: 'string' ,optional: true },
		shopId: { type: 'int' ,optional: true },
		shopShopName: { type: 'string' ,optional: true },
		telephone: { type: 'string' ,optional: true },
		thumbnailPhoto: { type: 'string' ,optional: true },
		thumbnailPhotoContentType: { type: 'string' ,optional: true },
		thumbnailPhotoUrl: { type: 'string' ,optional: true },
		userFirstName: { type: 'string' ,optional: true },
		userId: { type: 'int' ,optional: true },
		userType: { type: 'string' ,optional: true }
	}
}
export const SectionTableDTO = {
	
	name: 'SectionTableDTO',
	primaryKey:'id',
	properties: {
		description: { type: 'string' ,optional: true },
		id: { type: 'int'  },
		shopSectionsId: { type: 'int' ,optional: true },
		shopSectionsSectionName: { type: 'string' ,optional: true },
		tableNumber: { type: 'int' ,optional: true }
	}
}
export const ShopDTO = {
	name: 'ShopDTO',
	primaryKey:'id',
	properties: {
		active: { type: 'bool' ,optional: true },
		address: { type: 'string' ,optional: true },
		approvalDate: { type: 'string' ,optional: true },
		approvedByFirstName: { type: 'string', optional: true},
		approvedById: { type: 'int' ,optional: true },
		companyCompanyName: { type: 'string' ,optional: true },
		companyId: { type: 'int' ,optional: true },
		createdDate: { type: 'string' ,optional: true },
		currency: { type: 'string' ,optional: true },
		description: { type: 'string' ,optional: true },
		email: { type: 'string' ,optional: true },
		id: { type: 'int' },
		landland: { type: 'string' ,optional: true },
		mobile: { type: 'string' ,optional: true },
		note: { type: 'string' ,optional: true },
		shopAccountType: { type: 'string' ,optional: true },
		shopLogo: { type: 'string' ,optional: true },
		shopLogoContentType: { type: 'string' ,optional: true },
	//	shopLogoUrl: { type: 'string' ,optional: true },
		shopName: { type: 'string' ,optional: true }
	}
}
export const ShopSectionDTO = {
	name: 'ShopSectionDTO',
	primaryKey:'id',
	properties: {
		description: { type: 'string' ,optional: true },
		id: { type: 'int'  },
		sectionName: { type: 'string' ,optional: true },
		shopId: { type: 'int' ,optional: true },
		shopShopName: { type: 'string' ,optional: true },
		surchargeFlatAmount: { type: 'int' ,optional: true },
		surchargePercentage: { type: 'int' ,optional: true },
		usePercentage: { type: 'bool' ,optional: true }
	}
}
export const SystemConfigDTO = {
	name: 'SystemConfigDTO',
	primaryKey:'id',
	properties: {
		companyCompanyName: { type: 'string' ,optional: true },
		companyId: { type: 'int' ,optional: true },
		configurationType: { type: 'string' ,optional: true },
		enabled: { type: 'bool' ,optional: true },
		id: { type: 'int'  },
		key: { type: 'string' ,optional: true },
		note: { type: 'string' ,optional: true },
		value: { type: 'string' ,optional: true }
	}
}

export const UserDTO = {
	name: 'UserDTO',
	primaryKey:'id',
	properties: {
		activated: { type: 'bool' ,optional: true },
		authorities: { type: 'string?[]' ,optional: true },
		createdBy: { type: 'string' ,optional: true },
		createdDate: { type: 'string' ,optional: true },
		email: { type: 'string' ,optional: true },
		firstName: { type: 'string' ,optional: true },
		id: { type: 'int'  },
		imageUrl: { type: 'string' ,optional: true },
		langKey: { type: 'string' ,optional: true },
		lastModifiedBy: { type: 'string' ,optional: true },
		lastModifiedDate: { type: 'string' ,optional: true },
		lastName: { type: 'string' ,optional: true },
		login: { type: 'string' ,optional: true }
	}
}

export const ProfileDTOFull = {
	name: 'ProfileDTOFull',
	primaryKey:'username',
	properties: {
		companyDTO: { type: 'CompanyDTO'  },
		username:{type:'string',indexed: true },
		id: { type: 'int',indexed: true  },
		productCategoryDTOList: { type: 'list', objectType: 'ProductCategoryDTO'  },
		profileDTO: { type: 'ProfileDTO'  },
		sectionTableDTOList: { type: 'list', objectType: 'SectionTableDTO'  },
		shopDTOList: { type: 'list', objectType: 'ShopDTO' },
		shopSectionDTOList: { type: 'list', objectType: 'ShopSectionDTO'},
		systemConfigDTOList: { type: 'list', objectType: 'SystemConfigDTO' , },
		userDTO: { type: 'UserDTO' }
	}
}

