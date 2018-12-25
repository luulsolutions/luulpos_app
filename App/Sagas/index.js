import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { LoginTypes } from '../Redux/LoginRedux'
import { PinTypes } from '../Redux/PinRedux'
import { PasswordTypes } from '../Redux/PasswordRedux'
import { AccountTypes } from '../Redux/AccountRedux'
import { UserTypes } from '../Redux/UserRedux'
import { OrderTypes } from '../Redux/OrderRedux'
import { ProductTypes } from '../Redux/ProductRedux'
import { ProductCategoryTypes } from '../Redux/ProductCategoryRedux'
import { ProductVariantTypes } from '../Redux/ProductVariantRedux'
import { ProfileTypes } from '../Redux/ProfileRedux'
// ignite-jhipster-saga-redux-import-needle

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login, logout, loginLoad } from './LoginSagas'

import { forgotPassword, changePassword } from './PasswordSagas'
import { getAccount, updateAccount } from './AccountSagas'
import { getUser, getUsers, updateUser, deleteUser } from './UserSagas'
import {
	getOrder,
	getOrders,
	updateOrder,
	deleteOrder,
	searchOrders,
	saveCustomerOrders,
	getAllCustomerOrders
} from './OrderSagas'
import { getDbProducts, getApiProducts, getProductByCategoryId, searchProducts } from './ProductSagas'
import {
	getProductCategory,
	getProductCategories,
	updateProductCategory,
	deleteProductCategory,
	searchProductCategories
} from './ProductCategorySagas'
import {
	getProductVariant,
	getProductVariants,
	updateProductVariant,
	deleteProductVariant,
	searchProductVariants
} from './ProductVariantSagas'
import { pinSave, pinCheck, pinCheckByUsername } from './PinSagas'
import { dbProfile, apiProfile, storeDbProfile } from './ProfileSagas'
// ignite-jhipster-saga-method-import-needle

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
	yield all([
		// some sagas only receive an action
		takeLatest(StartupTypes.STARTUP, startup),

		// JHipster accounts
		takeLatest(LoginTypes.LOGIN_LOAD, loginLoad, api),
		takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
		takeLatest(LoginTypes.LOGOUT_REQUEST, logout, api),
		takeLatest(PasswordTypes.FORGOT_PASSWORD_REQUEST, forgotPassword, api),
		takeLatest(PasswordTypes.CHANGE_PASSWORD_REQUEST, changePassword, api),

		takeLatest(UserTypes.USER_REQUEST, getUser, api),
		takeLatest(UserTypes.USER_ALL_REQUEST, getUsers, api),
		takeLatest(UserTypes.USER_UPDATE_REQUEST, updateUser, api),
		takeLatest(UserTypes.USER_DELETE_REQUEST, deleteUser, api),

		takeLatest(OrderTypes.ORDER_REQUEST, getOrder, api),
		takeLatest(OrderTypes.ORDER_ALL_REQUEST, getOrders, api),
		takeLatest(OrderTypes.ORDER_UPDATE_REQUEST, updateOrder, api),
		takeLatest(OrderTypes.ORDER_DELETE_REQUEST, deleteOrder, api),
		takeLatest(OrderTypes.ORDER_SEARCH_REQUEST, searchOrders, api),
		takeLatest(OrderTypes.CUSTOMER_ORDER_SAVE, saveCustomerOrders, api),
		takeLatest(OrderTypes.CUSTOMER_ORDER_ALL_REQUEST, getAllCustomerOrders, api),

		takeLatest(ProductTypes.PRODUCT_DB_REQUEST, getDbProducts, api),
		takeLatest(ProductTypes.PRODUCT_API_REQUEST, getApiProducts, api),
		takeLatest(ProductTypes.PRODUCT_BY_CATEGORY_DB_REQUEST, getProductByCategoryId, api),
		takeLatest(ProductTypes.PRODUCT_API_SEARCH_REQUEST, searchProducts, api),

		takeLatest(ProductCategoryTypes.PRODUCT_CATEGORY_REQUEST, getProductCategory, api),
		takeLatest(ProductCategoryTypes.PRODUCT_CATEGORY_ALL_REQUEST, getProductCategories, api),
		takeLatest(ProductCategoryTypes.PRODUCT_CATEGORY_UPDATE_REQUEST, updateProductCategory, api),
		takeLatest(ProductCategoryTypes.PRODUCT_CATEGORY_DELETE_REQUEST, deleteProductCategory, api),
		takeLatest(ProductCategoryTypes.PRODUCT_CATEGORY_SEARCH_REQUEST, searchProductCategories, api),

		takeLatest(ProductVariantTypes.PRODUCT_VARIANT_REQUEST, getProductVariant, api),
		takeLatest(ProductVariantTypes.PRODUCT_VARIANT_ALL_REQUEST, getProductVariants, api),
		takeLatest(ProductVariantTypes.PRODUCT_VARIANT_UPDATE_REQUEST, updateProductVariant, api),
		takeLatest(ProductVariantTypes.PRODUCT_VARIANT_DELETE_REQUEST, deleteProductVariant, api),
		takeLatest(ProductVariantTypes.PRODUCT_VARIANT_SEARCH_REQUEST, searchProductVariants, api),

		takeLatest(ProfileTypes.FULL_PROFILE_DB_REQUEST, dbProfile, api),
		takeLatest(ProfileTypes.FULL_PROFILE_API_REQUEST, apiProfile, api),
		takeLatest(ProfileTypes.FULL_PROFILE_STORE_DB_REQUEST, storeDbProfile, api),
		// ignite-jhipster-saga-redux-connect-needle

		takeLatest(AccountTypes.ACCOUNT_REQUEST, getAccount, api),
		takeLatest(AccountTypes.ACCOUNT_UPDATE_REQUEST, updateAccount, api),

		// this saga is for PINCODE
		takeLatest(PinTypes.PIN_SAVE_REQUEST, pinSave, api),
		takeLatest(PinTypes.PIN_CHECKING_REQUEST, pinCheck, api),
		takeLatest(PinTypes.PIN_CHECK_BY_USER_NAME_REQUEST, pinCheckByUsername, api)
	])
}
