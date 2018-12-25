/* eslint-disable react/forbid-prop-types */
import React from 'react'
import {Image, TouchableOpacity, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Images, Colors } from '../../../Themes'
import Triangle from 'react-native-triangle';



import LoadingProducts from '../../../base_components/LoadingProducts'

import { Card, Button , CardItem} from 'native-base'
import styles from '../Styles/ProductItemStyles'
class ProductItem extends React.Component {
	render() {
		const { food, onPress } = this.props
		if (!food) {
			return <LoadingProducts />
		}
		return (
			<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
				<Card key={food._id} style={styles.container}>
				<View style={styles.triangle}/>

				<CardItem style={styles.name}>
							<Text  adjustsFontSizeToFit={true} size={18} align="center" color={Colors.black} style={styles.primaryText}>
								{food.productName}
							</Text>
						</CardItem>
					
				<CardItem cardBody>
					<Image 
						source={{
							uri: food.productImageThumbUrl
						}}
						style={styles.image}
						resizeMode="stretch"
					/>
				 </CardItem>
						
					 
				</Card>
				

 			</TouchableOpacity>
		)
	}
}

ProductItem.propTypes = {
	onPress: PropTypes.func.isRequired,
	food: PropTypes.object.isRequired
}

export default ProductItem
