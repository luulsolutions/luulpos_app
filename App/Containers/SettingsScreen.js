import React from 'react';
import { Alert, ScrollView,  TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import t from 'tcomb-form-native';
import { Container,Button, Header, Content, List, ListItem, Text,  Left, Body, Right, Switch } from 'native-base';
import {Icon} from 'react-native-elements'
// Styles
import styles from './Styles/SettingsScreenStyle';
import { Colors } from '../Themes';

import {changePinScreen,changePasswordScreen} from '../Navigation/Layouts'
class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      account:null
    }
  }



handlePinChange=()=>{
 const username = this.props.account.login;

  changePinScreen({mode:'choose',username:username,from:'settings'})
}
 
  render() {

    return (
      <Container>
      <Header />
      <Content>
        <ScrollView>
        <ListItem icon onPress={()=> this.handlePinChange()}>
          <Left>
            <Button style={styles.buttonIcon}>
              <Icon color={Colors.text} active name="textbox-password"  type="material-community"/>
            </Button>
          </Left>
          <Body>
            <Text>Change pinCode</Text>
          </Body>
          <Right>
            <Icon active name="navigate-next"  type=" ionicon"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={()=>changePasswordScreen()}>
          <Left>
            <Button style={styles.buttonIcon}>
              <Icon color={Colors.text} name="onepassword" type="material-community" />
            </Button>
          </Left>
          <Body>
            <Text>Change Password</Text>
          </Body>
          <Right>
            <Icon active name="navigate-next"  type=" ionicon"/>
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={styles.buttonIcon}>
              <Icon color={Colors.text} active name="bluetooth" />
            </Button>
          </Left>
          <Body>
            <Text>Login Screen Time</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        </ScrollView>
      </Content>
    </Container>
    );
  }
}

const mapStateToProps = (state) => ({
	account: state.account.account,
})
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
