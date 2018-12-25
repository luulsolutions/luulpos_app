import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, FlatList, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Row, Col, Button, Title, Left, Body, Header } from 'native-base'
import OrderActions from '../../../Redux/OrderRedux'
import styles from '../Styles/OrderListStyle'
import AlertMessage from '../../../Components/AlertMessage'
import { Icon } from 'react-native-elements'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { isPhone } from 'react-native-device-detection'
import _ from 'lodash'
import { Colors } from '../../../Themes'
import colors from '../../../Themes/Colors'
import payment from '../Payments/PaymentGateway/PaymentGatewayNativeModule'
import PaymentMethodsModal from '../../../Components/POS/Orders/PaymentMethodsModal'
import { Navigation } from 'react-native-navigation'
import {goPaymentsScreen} from '../../../Navigation/Layouts'
class PosOrderScreen extends React.PureComponent {
	static getDerivedStateFromProps(nextProps, prevState) {
		// do things with nextProps.someProp and prevState.cachedSomeProp
		if (prevState.tableData !== nextProps.customerOrders) console.tron.log('hawl kale', nextProps.customerOrders)
		return {
			tableData: nextProps.customerOrders ? nextProps.customerOrders.ordersLineDTOFullList : [],
			order: nextProps.customerOrders ? nextProps.customerOrders : null
		}
	}
	constructor(props) {
		super(props)

		this.state = {
			tableData: [],
			order: null,
			isModalVisible: false
		}
		this.onCancel = this.onCancel.bind(this)
		this.onMethods = this.onMethods.bind(this)
	}
	// functions
	_deleteOrders = (id) => {
		this.props.orderDelete(id)
	}

	onCancel() {
		this.setState({ isModalVisible: false })
	}
   onMethods(methods){
	   switch(methods){
		   case 1:
		   this.onCancel()
		   case 2:
		   this.onCancel()
		   default:
		   this.onCancel()

	   }
   }



	//render row Draw Table
	_renderRow({ item }) {
		let variant = []
		let price = []
		if (_.some(item.ordersLineVariantsDTOFullList, _.isObject)) {
			for (let i = 0; i < item.ordersLineVariantsDTOFullList.length; i++) {
				variant.push(
					<Row>
						<Text style={styles.label}>{item.ordersLineVariantsDTOFullList[i].variantName}</Text>
					</Row>
				)
				price.push(
					<Row>
						<Text style={styles.label}>&#163;{item.ordersLineVariantsDTOFullList[i].price}</Text>
					</Row>
				)
			}
		} else {
			variant.push(<Text style={styles.label}>{item.ordersLineVariantsDTOFullList.variantName}</Text>)
			price.push(<Text style={styles.label}>&#163;{item.ordersLineVariantsDTOFullList.price}</Text>)
		}
		return (
			<Row style={styles.row}>
				<Col style={styles.colName}>
					<Text style={styles.label}>{item.ordersLineDTO.ordersLineName}</Text>
				</Col>
				<Col style={styles.colVaraint}>{variant}</Col>
				<Col style={styles.colPrice}>{price}</Col>
				<Col style={styles.colPrice}>
					<Text style={styles.label}>&#163;{item.ordersLineDTO.ordersLinePrice}</Text>
				</Col>
				<Col style={styles.colActions}>
					<Icon
						onPress={() => console.tron.log('addPressed')}
						size={30}
						name="ios-add-circle-outline"
						type="ionicon"
						color={Colors.darkgreen}
					/>
					<Icon
						onPress={() => console.tron.log('removePressed')}
						size={30}
						name="ios-remove-circle-outline"
						type="ionicon"
						color={Colors.darkgreen}
					/>
				</Col>
			</Row>
		)
	}
	//Header
	_renderHeader = () => {
		return (
			<View style={styles.headerContainer}>
				<View style={styles.headerTitle}>
					<Text style={styles.headerTitleText}>
						<Icons name="calculator" size={22} color={colors.violet} />
						Table#: {this.state.order ? this.state.order.orderDTO.sectionTableTableNumber : null}
						{'\n'}
						<Icons name="account" size={22} color={colors.violet} />
						Cus Name#: {this.state.order ? this.state.order.orderDTO.customerName : null}
						{'\n'}
					</Text>
					<Text style={styles.headerTitleText}>
						<Icons name="check" size={22} color={colors.violet} />
						Section: {this.state.order ? this.state.order.orderDTO.shopSectionName : null} {'\n'}
						<Icons name="credit-card" size={22} color={colors.violet} />
						Surcharge: {this.state.order ? this.state.order.orderDTO.surchargePercentage : 0}%
					</Text>
				</View>
				<Row style={styles.headRow}>
					<Col style={styles.colName}>
						<Text style={styles.boldLabel}>Product Name</Text>
					</Col>
					<Col style={styles.colVaraint}>
						<Text style={styles.boldLabel}>Variants</Text>
					</Col>
					<Col style={styles.colPrice}>
						<Text style={styles.boldLabel}>Price</Text>
					</Col>
					<Col style={styles.colPrice}>
						<Text style={styles.boldLabel}>Total</Text>
					</Col>
					<Col style={styles.colActions}>
						<Text style={styles.boldLabel}>Actions</Text>
					</Col>
				</Row>
			</View>
		)
	}
	_renderSummery = () => {
		return (
			<View style={styles.summeryContainer}>
				<Row style={styles.summeryRow}>
					<Col style={styles.colSum}>
						<Row>
							<Text style={styles.summeryText}>
								Discounts: {this.state.order ? this.state.order.orderDTO.discountPercentage : 0}%
							</Text>
						</Row>
						<Row>
							<Text style={styles.summeryText}>
								Tax: {this.state.order ? this.state.order.orderDTO.taxPercentage : 0}%
							</Text>
						</Row>
					</Col>
					<Col style={styles.colSum}>
						<Row>
							<Text style={styles.summeryText}>
								Sub-Total:{' '}
								<Text style={styles.summeryPrice}>
									&#163;{this.state.order ? (
										parseFloat(this.state.order.orderDTO.totalPrice).toFixed(2)
									) : (
										0
									)}
								</Text>
							</Text>
						</Row>
						<Row>
							<Text style={styles.summeryText}>
								Sub-Total:{' '}
								<Text style={styles.summeryPrice}>
									&#163;{this.state.order ? (
										parseFloat(this.state.order.orderDTO.totalPrice).toFixed(2)
									) : (
										0
									)}
								</Text>
							</Text>
						</Row>
					</Col>
				</Row>
				<View style={styles.summerButtonsContainer}>
					<Button onPress={() => this._deleteOrders(1)} style={styles.summerButtonCancel}>
						<Icons name="close" size={23} color={colors.darkgreen} />
						<Text style={styles.summeryButtonText}>Cancel</Text>
					</Button>
					<Button onPress={() => this._deleteOrders(1)} style={styles.summerButtonHold}>
						<Icons name="plus" size={23} color={colors.white} />
						<Text style={styles.summeryButtonTextHold}>Hold</Text>
					</Button>
					<Button onPress={() => 	goPaymentsScreen()} style={styles.summerButtonPay}>
						<Icon name="payment"  type="MaterialIcons" size={23} color={colors.white} />
						<Text style={styles.summeryButtonTextPay}>Card</Text>
					</Button>
					<Button onPress={() => 	goPaymentsScreen()} style={styles.summerButtonPay}>
						<Icon name="payment"  type="MaterialIcons" size={23} color={colors.white} />
						<Text style={styles.summeryButtonTextPay}>Cash</Text>
					</Button>
				</View>
			</View>
		)
	}

	// Show this when data is empty
	renderEmpty = () => <AlertMessage title="No Orders Found" show={!this.props.fetching} />
	_renderContainerHeader = () => {
		return (
			<Header style={{ backgroundColor: colors.primary }}>
				<Left>
					<Icon
						name="ios-arrow-back"
						onPress={() => Navigation.dismissAllModals()}
						size={40}
						color={Colors.text}
						type="ionicon"
					/>
				</Left>
				<Body>
					<Title style={{ color: Colors.text }}>POS Order</Title>
				</Body>
			</Header>
		)
	}

	componentDidMount() {
		//console.tron.log('payment', payment.getDeviceName())
	}
	keyExtractor = (item, index) => String(index)

	// How many items should be kept im memory as we scroll?
	oneScreensWorth = 20
	// () {
	// 	console.tron.log(this.props.customerOrders)
	//
	// }


	render() {
		const state = this.state
		return (
			<View style={styles.container}>
				{isPhone ? this._renderContainerHeader() : null}
				<View style={styles.table}>
					<FlatList
						contentContainerStyle={styles.listContent}
						data={this.state.tableData}
						renderItem={this._renderRow}
						keyExtractor={this.keyExtractor}
						initialNumToRender={this.oneScreensWorth}
						onEndThreshold={100}
						ListHeaderComponent={this._renderHeader}
						ListEmptyComponent={this.renderEmpty}
						ItemSeparatorComponent={this.renderSeparator}
					/>
				</View>

				<View style={styles.summery}>{this._renderSummery()}</View>

				<PaymentMethodsModal
					isModalVisible={this.state.isModalVisible}
					onMethods={this.onMethods}
					onCancel={this.onCancel}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state) => ({
	// ...redux state to props here
	customerOrders: state.orders.customerOrders,
	fetching: state.orders.fetchingAll,
	error: state.orders.errorAll
})

const mapDispatchToProps = (dispatch) => ({
	orderDelete: (orderId) => dispatch(OrderActions.orderDeleteRequest(orderId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PosOrderScreen)
