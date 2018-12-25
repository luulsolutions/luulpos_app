import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { connect } from 'react-redux'
import GridView from 'react-native-super-grid'
// For empty lists
import AlertMessage from '../../../../Components/AlertMessage'
import ProductVarietyItem from '../../../../Components/POS/Products/ProductVarietyItem'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html
import { moderateScale } from 'react-native-size-matters'
// Styles
import styles from '../../Styles/ProductVariantStyle'
import ModifiersContext from './ModifiersContext'
import LoadingProducts from '../../../../base_components/LoadingProducts'
import OrderActions from '../../../../Redux/OrderRedux'
import _ from 'lodash'
import ProductMultiVariant from '../../../../Components/POS/Products/ProductMultiVariant'
import { Navigation } from 'react-native-navigation'
class ProductVariant extends React.PureComponent {
	static contextType = ModifiersContext
	static onEnter() {
		NavigationActions.refresh({
			rightTitle: 'Create',
			onRight: () => {
				NavigationActions.productVariantEntityEdit({ entityId: null })
			}
		})
	}
	constructor(props) {
		super(props)
		this._onChangePercentage = this._onChangePercentage.bind(this)
		this._onSingleVarientyToggle = this._onSingleVarientyToggle.bind(this)
		this.state = {
			dataObjects: [],
			productDTO: null,
			varianId: null,
			orderDone: false,
			order: null
		}
	}
	// all functions
	_onChangePercentage(p, id) {
		var array = this.state.dataObjects
		_.set(_.find(array, { id: id }), 'percentage', parseInt(p))
		this._prepareOrderDTO(array)
		this.setState({ dataObjects: array }, () => console.tron.log('called', this.state.dataObjects))
		this.forceUpdate()
	}

	_prepareOrderDTO = (product) => {
		let price = 0
		const { productDTO, discountDTOList, taxDTOList, options } = this.props.product

		let discountPercentage = _.sumBy(discountDTOList, 'percentage')
		let taxPercentage = _.sumBy(taxDTOList, 'percentage')

		var discountAmount,
			taxAmount = 0

		if (this.props.product.productDTO.isVariantProduct) {
			price = _.sumBy(product, 'price')
		} else {
			price = product.price
		}
		let nPrice = price;
         price = price+price*(options.surchargePercentage/100);
		var orderDTO = {
			orderDTO: {
				description: productDTO.productName,
				customerName: 'unKnown',
				totalPrice: price,
				quantity: 1,
				discountPercentage: discountPercentage,
				discountAmount: 0,
				taxPercentage: taxPercentage,
				taxAmount: 0,
				orderStatus: 'PENDING',
				paymentMethodId: 1,
				paymentMethodPaymentMethod: 'Cash',
				soldById: this.props.account.id,
				soldByFirstName: this.props.account.firstName,
				preparedById: this.props.account.id,
				preparedByFirstName: this.props.account.firstName,
				shopDeviceId: 1,
				shopDeviceDeviceName: 'iPad Number 1',
				sectionTableId: options.id,
				sectionTableTableNumber: options.tableNumber,
				shopSectionId: options.shopSectionsId,
				surchargePercentage:options.surchargePercentage,
				shopSectionName:options.shopSectionName,
				shopId: productDTO.shopId,
				shopShopName: productDTO.shopShopName
			},
			ordersLineDTOFullList: [
				{
					ordersLineDTO: {
						ordersLineName: productDTO.productName,
						ordersLineValue: productDTO.productName,
						ordersLinePrice: price,
						orderLineNormalPrice:nPrice,
						ordersLineDescription: productDTO.productName,
						fullPhotoUrl: productDTO.productImageFullUrl,
						thumbnailPhotoUrl: productDTO.productImageThumbUrl,
						productId: productDTO.id,
						productProductName: productDTO.productName
					},
					ordersLineVariantsDTOFullList: product
				}
			]
		}
		this.setState({ order: orderDTO }, () =>
			console.tron.display({
				name: '🔥 OrderDTO 🔥',
				preview: 'this is OrderDTO',
				value: { order: this.state.order }
			})
		)
	}
	_onSingleVarientyToggle(product) {
		if (product.id === this.context.variantId) {
			this.context.setVariantId(null)
			console.tron.log('calledSingleVariant')
			this.setState({ order: null })
		} else {
			this.context.setVariantId(product.id)
			this._prepareOrderDTO(product)
		}
	}

	// this function is triggerd as prop in ProductModifiers
	onSaveOrder = () => {
		console.tron.log('full order', this.state.order)
		if (this.state.order) {
			this.setState({ orderDone: true }, () => this.props.customerOrderSave(this.state.order))
		} else {
			console.tron.log('atleast choose one variant')
		}
	}

  _dismissModal=()=>{
	Navigation.dismissAllModals();
	}

	//all render Function return view ;
	_renderProductVariety(item) {
		return (
			<View style={styles.itemContainer}>
				<ProductVarietyItem
					food={item}
					onPress={() => {
						this._onSingleVarientyToggle(item)
					}}
					
				/>
			</View>
		)
	}
	_renderMultiVariant = (item) => {
		return <ProductMultiVariant product={item} onChange={(p) => this._onChangePercentage(p, item.id)} />
	}

	renderEmpty = () => <AlertMessage title="No ProductVariants Found" show={!this.props.fetching} />

	keyExtractor = (item, index) => String(index)

	// How many items should be kept im memory as we scroll?
	oneScreensWorth = 20

	componentWillReceiveProps(newProps) {
		console.tron.log('customerOrder', newProps)
		if (newProps && newProps.product) {
			var array = this.props.product.productVariantsDTOList
				? _.values(this.props.product.productVariantsDTOList)
				: []
			this.setState({ dataObjects: array })
			//automatically put all variant to order line if  product is multi Variant
			if (this.props.product.productDTO.isVariantProduct) {
				this._prepareOrderDTO(_.values(this.props.product.productVariantsDTOList))
			}
		}
		console.tron.log('customer Order succes ', newProps.customerOrders, this.state.orderDone, newProps.saving)
		if (newProps.customerOrders && this.state.orderDone && !newProps.saving) {
			this.setState({
				orderDone: false
				//order: newProps.order
			})
			this._dismissModal();

			console.tron.log('customer Order succes ', newProps.customerOrders)
		}
	}


	componentWillMount() {
		console.tron.log('wtf', this.props)
		this.props.onRef(this)

		if (this.props.product) {
			this.setState({ productDTO: this.props.product.productDTO }, () =>
				console.tron.log('whyde', this.state.productDTO)
			)
			var array = this.props.product.productVariantsDTOList
				? _.values(this.props.product.productVariantsDTOList)
				: []
			this.setState({ dataObjects: array })

			//automatically put all variant to order line if  product is multi Variant
			if (this.props.product.productDTO.isVariantProduct) {
				this._prepareOrderDTO(_.values(this.props.product.productVariantsDTOList))
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<GridView
					style={styles.gridView}
					itemContainerStyle={styles.itemContainer}
					items={this.state.dataObjects}
					renderItem={(item) =>
						this.state.productDTO.isVariantProduct
							? this._renderMultiVariant(item)
							: this._renderProductVariety(item)}
					keyExtractor={this.keyExtractor}
					initialNumToRender={this.oneScreensWorth}
					onEndThreshold={100}
					itemDimension={moderateScale(this.state.productDTO.isVariantProduct ? 100 : 160)}
					scrollEnabled={!this.state.productDTO.isVariantProduct}
					spacing={20}
					// ListHeaderComponent={this.renderHeader}
					/* ListFooterComponent={this.renderFooter} */
					ListEmptyComponent={() => this.renderEmpty()}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
	customerOrders: state.orders.customerOrders,
	account: state.account.account,
	saving: state.orders.savingCustomerOrder,
	error: state.orders.errorSaveCustomerOrders
})

const mapDispatchToProps = (dispatch) => ({
	customerOrderSave: (order) => dispatch(OrderActions.customerOrderSave(order))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductVariant)
