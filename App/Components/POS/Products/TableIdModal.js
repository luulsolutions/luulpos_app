import React from 'react'
import { View, Modal, Text, TouchableWithoutFeedback,Alert, TouchableHighlight,aware} from 'react-native'
import styles from '../Styles/TableIdModalStyle'
import {} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Content, Body, Card, CardItem, Left, Button, Right, Item,Icon, Input } from 'native-base'
  
export const TableIdModal = (props) => {
	return (
		<TouchableWithoutFeedback onPress={props.toggleModal} style={{ flex: 1 }}>
			<Modal
				animationType="slide"
				 
				transparent={true}
				visible={props.isModalVisible}
				onDismiss={() => {
					props.getVariant();
					console.tron.log('Modal has been closed.')
				}}
			>
			
				<KeyboardAwareScrollView contentContainerStyle={styles.container}>
					<View styles={styles.modalContent}>
					 
						<Card style={styles.modalCard}>
							<CardItem header style={styles.modalCardHeader}>
								<Text style={styles.modalHeaderText}>Enter Table Number and Customer Name</Text>
								<TouchableHighlight onPress={props.onCancel} style={styles.closebutton}>
										<Icon name="close" size={25} style={styles.closebuttonIcon}/>
									</TouchableHighlight>
							</CardItem>
							<CardItem>
								<Body>
									<Item bordered   style={styles.input}>
										<Input placeholder="Customer Name Optional" />
									</Item>
									{props.status == 'error' ? (
										<Item bordered error>
											<Input onChangeText={props.onSetTableId}  placeholder="Table Number Required" />
											<Icon name="cancel"  type="MaterialIcons"/>
										</Item>
									) : props.status == 'success' ? (
										<Item  bordered  success>
											<Input onChangeText={props.onSetTableId}  placeholder="Table Number Required" />
											<Icon name="done" type="MaterialIcons" />
										</Item>
									) : (
										<Item bordered   info >
											<Input onChangeText={ props.onSetTableId} placeholder="Table Number Required" />
											<Icon  name='highlight-off' type="MaterialIcons" />
										</Item>
									)}
								</Body>
							</CardItem>
							<CardItem>
								<Body style={styles.modalCardButtons}>
									
									<Button onPress={props.onSave} style={styles.Buttons}>
									    <Icon name="done" size={25} color="white"  type="MaterialIcons"/>
										<Text style={styles.modalButtonText}>Save</Text>
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

export default TableIdModal
