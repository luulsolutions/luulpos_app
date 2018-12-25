/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Image,ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Images, Colors } from '../../../Themes';
import LoadingProducts from '../../../base_components/LoadingProducts';
import ViewRow from '../../../base_components/ViewRow';
import styels from '../Styles/ProductCategoryItem';
import { Card, CardItem } from 'native-base';
import {Tile} from 'react-native-elements'

class ProductCategoryItem extends React.Component {
  render() {
    const { food, onPress } = this.props;

    if (!food) {
      return <LoadingProducts />;
    }
    return (
      <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
        <Card key={food._id} style={styels.container}>
          <ImageBackground
            source={{
              uri: food.imageFullUrl,
            }}
            style={styels.image}
            resizeMode="stretch"
          >

            <View style={styels.name}>
              <Text size={25} align="center" color={Colors.black} style={styels.primaryText}>
                {food.category}
              </Text>
            </View>
          </ImageBackground>
        </Card>
     
      </TouchableOpacity>
    );
  }
}

ProductCategoryItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  food: PropTypes.object.isRequired,
};

export default ProductCategoryItem;
