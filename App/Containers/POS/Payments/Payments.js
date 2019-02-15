import React from 'react'
import { View, ScrollView,Image, Text, FlatList, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Images } from '../../../Themes'
import {_} from 'lodash'
import orderReduxAction from '../../../Redux/OrderRedux'
import styles from './styles/Paymentstyles'
import PosOrderScreen from '../Orders/PosOrderScreen'
import { Container,Content, Grid, Footer, Col, Tabs,Tab, TabHeading, Row,Icon, Button, Header, Right, Left, Body ,Card, CardItem, Title} from 'native-base'
import { Navigation } from 'react-native-navigation'
import Icons from 'react-native-vector-icons/Feather'
import Calculator from '../../../Components/POS/calculator/index'
import colors from '../../../Themes/Colors';
import { success } from '../../../Redux/ProductVariantRedux';
class Payments extends React.PureComponent {
 

	constructor(props) {
		super(props)
		Navigation.events().bindComponent(this)
	}
	state = {
		status: 'info',
		order:'',
		payment: "",
		modalVisible: false,
		
		
	}
	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	  }

	 
	done = function(){
		var orderDTO = this.props.order.orderDTO
		const payment =   
		{
			orderDTO: {
			 
			  "customerName": orderDTO.customerName,
			  "totalPrice": orderDTO.totalPrice,
			  "quantity": orderDTO.quantity,
			  "discountPercentage": orderDTO.discountPercentage,
			  "discountAmount": orderDTO.discountAmount,
			  "taxPercentage": orderDTO.taxPercentage,
			  "taxAmount": orderDTO.taxAmount,
			  "orderStatus": orderDTO.orderStatus,
			  "note": "",
			  "isVariantOrder": false,
			  "paymentMethodId": orderDTO.paymentMethodId,
			  "paymentMethodPaymentMethod":"cash",
			  "soldById": "1",
			  "soldByFirstName": "Ahmed",
			  "preparedById": "1",
			  "preparedByFirstName": "Ahmed",
			  "shopDeviceId": orderDTO.shopDeviceId,
			  "shopDeviceDeviceName": orderDTO.shopDeviceDeviceName,
			  "sectionTableId": orderDTO.sectionTableId,
			  "sectionTableTableNumber": orderDTO.sectionTableTableNumber,
			  "shopId": orderDTO.shopId,
			  "shopShopName": orderDTO.shopShopName
			},
			ordersLineDTOFullList:this.props.order.ordersLineDTOFullList,
			paymentDTOList: [
			  {
			   "paymentProvider": "iZettle",
				"amount": 10,
				"paymentStatus": "PAID",
				"curency": "GBP",
				"customerName": "Mohamed Ali",
				"shopId": 1,
				"shopShopName": "Oasis Shisha Lounge in Acton",
				"processedById": 1,
				"processedByFirstName": "Ahmed",
				"paymentMethodId": 2,
				"paymentMethodPaymentMethod": "Card",
				"orderDescription": "Grape and Mint + Oreo Milkshake"
			  },
			   
			]
		  }
		this.props.customerOrderCreate(payment)
		
		 
	}
 

	componentDidMount(){
		this.setState({
			order:this.props.order
		})

	}

	
	_renderHeader(){
		return(
			<Row style={styles.headRow}>
				<Col style={styles.colName}>
				<Text style={styles.boldLabel}>Product Name</Text>
				</Col>
				<Col style={styles.colName}>
				<Text style={styles.boldLabel}>Variant</Text>
				</Col>
				<Col style={styles.colName}>
				<Text style={styles.boldLabel}>Total</Text>
				</Col>
			</Row>
		)




	}

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
 		return(
		

			<Row style={styles.row}>
 				<Col>
				<Text style={styles.label}>{item.ordersLineDTO.ordersLineName}</Text>
				</Col>
				<Col>
				{variant}
				</Col>
				<Col>
				<Text style={styles.label}>
				&#163;{item.ordersLineDTO.ordersLinePrice}
				</Text>
				</Col>	
 			</Row>
		)



	}
	keyExtractor = (item, index) => String(index)
 
	
	render() {
		 
 		return (
			 
            <View style={styles.container}>
 				<Header style={styles.header}>
					<Left>
                   <Icons name="arrow-left" size={30} color={colors.white}/>
					</Left>
					<Body>
					<Image source={Images.toplogo} style={[ styles.topLogo]} />
					</Body>
 				</Header>
                   <Grid>
                   <Col size={3}>
				   <Row size={26}>
				   <View style={styles.table}>

 				   <FlatList
 						data={this.props.order.ordersLineDTOFullList}
						renderItem={this._renderRow}
						keyExtractor={this.keyExtractor}
						ListHeaderComponent={this._renderHeader}


					/>
					</View>
 					</Row>
					<Row size={1} style={styles.total}>
					
 							   <Left>
								<Text style={styles.totaltext}>Sub-Total:{' '}</Text>
								</Left>
								<Right>
								<Text style={styles.summeryPrice}>
									&#163;{this.props.order ? (
										parseFloat(this.props.order.orderDTO.totalPrice).toFixed(2)
									) : (
										0
									)}
								</Text>
								</Right>
  					</Row>             
 				   </Col>
				   
				   <Col size={5}>
					<Tabs>
					<Tab heading={ <TabHeading><Text>Cash Payment</Text></TabHeading>}>
					<View style={{flex:1, justifyContent:"center", padding:50}}>
					<Calculator style={{flex:1}} value={this.props.order}/> 	
					<Button full  primary onPress={() => {
							this.setModalVisible(true);
						}}>
						<Text style={{color:colors.white }}>Done</Text>
					</Button>

    
					
					</View>
					   
					</Tab>
					<Tab heading={ <TabHeading><Text>Card Payment</Text></TabHeading>}>
							<Text>Cash</Text>
 					</Tab>
					 
					</Tabs>
 
 				   </Col>
				  </Grid>
				 <Modal
 					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert('Modal has been closed.');
					}}>
 
					<View style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center', alignSelf:'center', backgroundColor: colors.primary }}>
						
						<Card style={{flex:1}}>
						<Button onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
							}}>
							<Icons name="x" color="white" size={30} />
						</Button>
						</Card>
					</View>
				</Modal>
 			 </View>
		)
	}
}

const mapStateToProps = (state) => ({
	fullProfile: state.profiles.fullProfile,
})

const mapDispatchToProps = (dispatch) => ({
	customerOrderCreate:(Orders) => dispatch(orderReduxAction.customerOrderCreate(Orders)),
 
})

export default connect(mapStateToProps, mapDispatchToProps)(Payments)






