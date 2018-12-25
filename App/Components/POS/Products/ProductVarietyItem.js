/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import PropTypes, { number } from 'prop-types';
import { Colors } from '../../../Themes';
import LoadingProducts from '../../../base_components/LoadingProducts'
 import { Icon } from 'react-native-elements';
import { Button, Card, CardItem } from 'native-base';
 import styles from '../Styles/ProductVarietyItemStyles';
import ModifiersContext from '../../../Containers/POS/Products/ProductModifiers/ModifiersContext'
class ProductVarietyItem extends React.Component {
  static contextType = ModifiersContext;
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  _toggleChecked=() => {
    
  }
  render() {
    const { food, onPress } = this.props;
    if (!food) {
      return <LoadingProducts />;
    }
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={() => { onPress(); this._toggleChecked(); }}>
        <Card key={food._id} style={styles.container}>
          <ImageBackground
            source={{
              uri: food.fullPhotoUrl,
            }}
            resizeMode="center"
            style={styles.image}
            resizeMode="stretch"
          >
           <View  style={styles.addToCart}>
            <Icon
              containerStyle={styles.checkIcon}
              size={40}
              color="white"
              name={ this.context.variantId===food.id ?'checkbox-marked': 'checkbox-blank-outline'}
              type={'material-community'}
            />
           
            <Text style={styles.addToCartText}> {food.variantName}</Text>
            <Text style={styles.addToCartText}>${food.price}</Text>
            </View>
          </ImageBackground>
  
        </Card>
      </TouchableOpacity>
    );
  }
}

ProductVarietyItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  food: PropTypes.object.isRequired,
};

export default ProductVarietyItem;
