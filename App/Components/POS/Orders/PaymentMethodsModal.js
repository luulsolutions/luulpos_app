import React from 'react'
import { View, Modal, Text, TouchableWithoutFeedback, Alert, TouchableHighlight, aware } from 'react-native'
import styles from '../Styles/PaymentMethodsModalStyle'
import {} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Content, Body, Card, CardItem, Left, Button, Right, Item, Icon, Input } from 'native-base'

export const PaymentMethodsModal = (props) => {
	return (
		<TouchableWithoutFeedback onPress={props.onCancel} style={{ flex: 1 }}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={props.isModalVisible}
				onDismiss={() => {
					console.tron.log('Modal has been closed.')
				}}
			>
				<KeyboardAwareScrollView contentContainerStyle={styles.container}>
					<View styles={styles.modalContent}>
						<Card style={styles.modalCard}>
							<CardItem header style={styles.modalCardHeader}>
								<Text style={styles.modalHeaderText}>PaymentMethods</Text>
								<TouchableHighlight onPress={()=>props.onCancel(1)} style={styles.closebutton}>
									<Icon name="close" size={45} style={styles.closebuttonIcon} />
								</TouchableHighlight>
							</CardItem>
							<CardItem>
								<Body style={styles.modalCardButtons}>
									<Button onPress={()=>props.onMethods(1)} style={styles.Buttons}>
									<Icon name="cash-multiple"  type="MaterialCommunityIcons" size={40} color="white"/>
										<Text style={styles.modalButtonText}>Cash</Text>
									</Button>
								</Body>
							</CardItem>
							<CardItem>
								<Body style={styles.modalCardButtons}>
									<Button onPress={()=>props.onMethods(2)} style={styles.Buttons}>
										<Icon name="credit-card-alt" type="FontAwesome" size={25} color="white"  />
										<Text style={styles.modalButtonText}>Credit Card</Text>
									</Button>
								</Body>
							</CardItem>
						</Card>
					</View>
				</KeyboardAwareScrollView>
			</Modal>
		</TouchableWithoutFeedback>
	)
}

export default PaymentMethodsModal
