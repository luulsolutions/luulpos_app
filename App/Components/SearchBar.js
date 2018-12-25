import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles/SearchBarStyles';
import { Colors, Metrics } from '../Themes/';
import Icon from 'react-native-vector-icons/FontAwesome';
import PosContext from '../Containers/POS/PosContext';
import Icons from 'react-native-vector-icons/MaterialIcons';
import colors from '../Themes/Colors';

export default class SearchBar extends React.Component {
  render() {
   // const { onSearch, onCancel, searchTerm } = this.props;
    return (
      <PosContext.Consumer>
        {value => (
          <View style={styles.container}>
            <Icon name="search" size={Metrics.icons.tiny} style={styles.searchIcon} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={Colors.snow}
              underlineColorAndroid="transparent"
              style={styles.searchInput}
              value={value.searchTerm}
              onChangeText={value.peformSearch}
              autoCapitalize="none"
              onSubmitEditing={value.peformSearch.bind(this, value.searchTerm)}
              returnKeyType={'search'}
              autoCorrect={false}
              selectionColor={Colors.snow}
            />
            <TouchableOpacity onPress={value.cancelSearch} style={styles.cancelButton}>
              <Text style={styles.buttonLabel}><Icons name="clear"  color={Colors.primary} size={Metrics.icons.tiny}/></Text>
            </TouchableOpacity>
          </View>
        )}
      </PosContext.Consumer>
    );
  }
}
