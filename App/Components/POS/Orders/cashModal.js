import React from 'react'
import { View, Modal, Text, TouchableWithoutFeedback,Alert, TouchableHighlight,aware} from 'react-native'
import styles from './styles/cashmodal'
import {} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Btn from 'react-native-micro-animated-button';
import Payment from '../../../Containers/POS/Payments/Payments'
import orderReduxAction from '../../../Redux/OrderRedux'
import { connect } from 'react-redux'
import {appStack} from '../../../Navigation/Layouts'


import { Content, Body, Card, CardItem, Left, Button, Right, Item,Icon, Input } from 'native-base'
  
export const CashModal = (props) => {
     
	 
    done = function(){
        console.tron.log("all props", props)
		var orderDTO = props.order.orderDTO
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
			ordersLineDTOFullList:props.order.ordersLineDTOFullList,
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
        props.customerOrderCreate(payment)
        return appStack()
 		
	}
 

  
     



	return (
		<TouchableWithoutFeedback onPress={props.toggleModal} style={{ flex: 1 }}>
			<Modal
				animationType="slide"
				 
				transparent={true}
				visible={props.isModalVisible}
				onDismiss={() => {
 				}}
			>
			
				<KeyboardAwareScrollView contentContainerStyle={styles.container}>
					<View styles={styles.modalContent}>
					 
						<Card style={styles.modalCard}>
                        <CardItem>
								<Body style={styles.modalCardButtons}>
									 <Text style={{fontSize:30,}}>{props.value}</Text>
								</Body>
							</CardItem>
							 
							<CardItem>
								<Body style={styles.modalCardButtons}>
									
                                    <Btn
                                        label="PAY"
                                        onPress={() => this.done()}
                                        ref={ref => (this.orderSuccess = ref)}
                                        successIcon="check"
                                     />
								</Body>
							</CardItem>
						</Card>
						
					</View>
				</KeyboardAwareScrollView>
			
			</Modal>
		</TouchableWithoutFeedback>
	)
}
const mapStateToProps = (state) => ({
	fullProfile: state.profiles.fullProfile,
})

const mapDispatchToProps = (dispatch) => ({
    customerOrderCreate:(Orders) => dispatch(orderReduxAction.customerOrderCreate(Orders)),

 
})

export default connect(mapStateToProps, mapDispatchToProps)(CashModal)


 