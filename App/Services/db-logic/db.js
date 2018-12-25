import Realm from 'realm' // Define your models and their properties
import {
	//pincode
	PinCode,
	//for profileDTO
	ProfileDTOFull,
	UserDTO,
	ProfileDTO,
	SystemConfigDTO,
	ShopSectionDTO,
	SectionTableDTO,
	ShopDTO,
	ProductCategoryDTO,
	CompanyDTO,
	//all from Product DTO
	TaxDTO,
	ProductVariantDTO,
	ProductExtraDTO,
	ProductDTO,
	DiscountDTO,
	ProductDTOFull
} from '../db-shema/'

const databaseOption = {
	path: 'easyPOS.realm',
	schema: [
		PinCode,
		ProfileDTOFull,
		UserDTO,
		ProfileDTO,
		SystemConfigDTO,
		SectionTableDTO,
		ShopSectionDTO,
		ShopDTO,
		ProductCategoryDTO,
		CompanyDTO,
		TaxDTO,
		ProductVariantDTO,
		ProductExtraDTO,
		ProductDTO,
		DiscountDTO,
		ProductDTOFull
	],
	schemaVersion: 5
}
/**
 * Create Realm objects and write to local storage
 */
//Realm.deleteFile(databaseOption);
const realm = new Realm(databaseOption)

export default realm
