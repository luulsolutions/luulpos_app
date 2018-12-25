import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles/DrawerButtonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import {  List, ListItem,  Left, Right, Body  } from 'native-base';


class DrawerButton extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    onPress: PropTypes.func,
  };

  render() {
    return (
      <List>
        <ListItem  onPress={this.props.onPress}>
        <Left>
        <Text style={styles.text}> <Icon name={this.props.name} size={20} color="#FF4081"  /> {this.props.text}</Text>
        </Left>
       
        
        <Right>
        <Icon  style={styles.icon} name="navigate-next" size={25}  /> 
        </Right>
      </ListItem>
      </List>
    );
  }
}

export default DrawerButton;
