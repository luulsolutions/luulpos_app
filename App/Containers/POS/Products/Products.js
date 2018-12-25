import React from 'react'
import { View, ScrollView, Text, Modal } from 'react-native'
import { connect } from 'react-redux'
import ProductActions from '../../../Redux/ProductRedux'
import GridView from 'react-native-super-grid'
import LoadingProducts from '../../../base_components/LoadingProducts'
import Breadcrumb from 'react-native-breadcrumb'
import ProductItem from '../../../Components/POS/Products/ProductItem'
import { Colars } from '../../../Themes'
// For empty lists
import AlertMessage from '../../../Components/AlertMessage'
import ProductVariety from './ProductModifiers/ProductVariety'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html
import PosContext from '../PosContext'
import TableIdModal from '../../../Components/POS/Products/TableIdModal'
import { goProductModifierScreen } from '../../../Navigation/Layouts'
import {_} from 'lodash'
// Styles
import styles from '../Styles/ProductStyle'

class Product extends React.PureComponent {
	static contextType = PosContext
	constructor(props) {
		super(props)

		this.onSetTableId = this.onSetTableId.bind(this)
		this.onSave = this.onSave.bind(this)
		this.getVariant = this.getVariant.bind(this)
		this.onCancel = this.onCancel.bind(this)
	}

	/** **********************************************************
   * STEP 1
   * This is an array of objects with the properties you desire
   * Usually this should come from Redux mapStateToProps
   ************************************************************ */
	state = {
		status: 'info',
		tableId: null,
		product: null,
		dataObjects: [],
		isModalVisible: false,
		index: 1
	}
	// render Products

	//all functions
	showModel() {
		console.tron.log('whyTableIs Null',this.state.tableId);
		if (this.state.tableId) {
			this.getVariant()
			
		} else {
			this.setState({ isModalVisible: true })
		}
	}
	onCancel() {
		this.setState({ isModalVisible: false })
	}
	onSetTableId(tableId) {
		const sectionTableDTOList  = _.values(this.props.fullProfile.sectionTableDTOList)
		console.tron.log(parseInt(tableId), 'error',sectionTableDTOList)
		if (parseInt(tableId) <= sectionTableDTOList.length) {
			this.setState({ status: 'success', tableId: parseInt(tableId) - 1 })
			console.tron.log(sectionTableDTOList[parseInt(tableId - 1)], 'fully success')
		} else {
			this.setState({ status: 'error', tableId: null })
		}
	}
	onSave() {
		if (this.state.tableId) {
			this.onCancel()
		}
	}
	getVariant(from) {
		if (this.state.tableId) {
			let table = this.props.fullProfile.sectionTableDTOList[this.state.tableId];
			let shop = this.props.fullProfile.shopSectionDTOList[table.shopSectionsId]
			let options = { ...this.state.product, options: {...table,surchargePercentage:shop.surchargePercentage,shopSectionName:shop.sectionName} }
			console.tron.log(options)
			goProductModifierScreen(options)
		}
	}

	_renderProduct(item) {
		return (
			<View style={styles.itemContainer}>
				<ProductItem
					food={item.productDTO}
					onPress={() => {
						this.setState({ product: item }, () => this.showModel())
					}}
				/>
			</View>
		)
	}

	// Render a footer?
	// renderFooter = () =>
	//  <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

	// Show this when data is empty
	renderEmptyProduct = () => <AlertMessage title="No Products Found" show={!this.props.fetching} />
	// The default function if no Key is provided is index
	// an identifiable key is important if you plan on
	// item reordering.  Otherwise index is fine
	keyExtractor = (item, index) => String(index)

	// How many items should be kept im memory as we scroll?
	oneScreensWorth = 20

	componentWillReceiveProps(newProps) {
		console.tron.log('whynot', newProps)
		if (newProps && !newProps.fetching && !this.state.done) {
			const products = newProps.products ? newProps.products : []
			this.setState({ dataObjects: products, done: true, loading: false }, () => {
				console.tron.log('products UI', products)
			})
		}
		if (newProps.order) {
			this.setState({ tableId: newProps.order.orderDTO.sectionTableId }, () =>
				console.tron.log('tableId', this.state.tableId)
			)
		}
		else if (newProps.order==null){
			this.setState({ tableId: null })
		}
	}

	fetchAllProductsById = async (shopId) => {
		this.setState({ loading: true })
		await this.props.getAllProductsByShopId(shopId)
	}

	componentDidMount() {
		if (this.context.categoryId) {
			this.props.getAllProductBYCategoryId(this.context.categoryId)
		} else {
			if (this.props.fullProfile) {
				const shopId = this.props.fullProfile.profileDTO.shopId
				this.fetchAllProductsById(shopId)
			}
		}
	}

	render() {
		if (this.state.true) {
			return <LoadingProducts />
		}
		return (
			<ScrollView style={styles.container}>
				<GridView
					style={styles.gridView}
					items={this.state.dataObjects}
					renderItem={(item) => this._renderProduct(item)}
					onEndReached={this.handleLoadMore}
					keyExtractor={this.keyExtractor}
					initialNumToRender={this.oneScreensWorth}
					onEndReached={this.handleLoadMore}
					onEndThreshold={100}
					itemDimension={150}
					// ListHeaderComponent={this.renderProductHeader}
					/* ListFooterComponent={this.renderFooter} */
					itemContainerStyle={styles.itemContainer}
					ListEmptyComponent={() => this.renderEmptyProduct()}
					ItemSeparatorComponent={this.renderSeparator}
				/>
				<TableIdModal
					status={this.state.status}
					onSetTableId={this.onSetTableId}
					isModalVisible={this.state.isModalVisible}
					getVariant={this.getVariant}
					onSave={this.onSave}
					onCancel={this.onCancel}
				/>
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => ({
	// ...redux state to props here
	fullProfile: state.profiles.fullProfile,
	order: state.orders.customerOrders,
	products: state.products.products,
	fetching: state.products.fetching,
	error: state.products.error
})

const mapDispatchToProps = (dispatch) => ({
	getAllProductsByShopId: (shopId) => dispatch(ProductActions.productDbRequest(shopId)),
	getAllProductBYCategoryId: (categoryId) => dispatch(ProductActions.productByCategoryDbRequest(categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
