import React from 'react';
import { Alert, ScrollView, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions as NavigationActions } from 'react-native-router-flux';
import RegisterActions from '../Redux/RegisterRedux';
import t from 'tcomb-form-native';
// Styles
import styles from './Styles/RegisterScreenStyle';

const Form = t.form.Form;

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountModel: t.struct({
        login: t.String,
        password: t.String,
        confirmPassword: t.String,
        email: t.String,
        langKey: t.String,
      }),
      accountValue: {
        login: null,
        password: null,
        confirmPassword: null,
        email: null,
        langKey: 'en',
      },
      options: {
        fields: {
          login: {
            label: 'Username',
            returnKeyType: 'next',
            onSubmitEditing: () => this.refs.form.getComponent('password').refs.input.focus(),
          },
          password: {
            secureTextEntry: true,
            returnKeyType: 'next',
            onSubmitEditing: () =>
              this.refs.form.getComponent('confirmPassword').refs.input.focus(),
          },
          confirmPassword: {
            secureTextEntry: true,
            returnKeyType: 'done',
            onSubmitEditing: () => this.submitUpdate(),
          },
          langKey: {
            hidden: true,
          },
        },
      },
      success: false,
    };
    this.submitUpdate = this.submitUpdate.bind(this);
    this.accountChange = this.accountChange.bind(this);
  }

  submitUpdate() {
    this.setState({
      success: false,
    });
    // call getValue() to get the values of the form
    const value = this.refs.form.getValue();
    if (value) {
      // if validation fails, value will be null
      if (value.password !== value.confirmPassword) {
        Alert.alert('Error', 'Passwords do not match', [{ text: 'OK' }]);
        return;
      }
      this.props.register(value);
    }
  }

  componentWillReceiveProps(newProps) {
    // Did the register attempt complete?
    if (!newProps.fetching) {
      if (newProps.error) {
        Alert.alert('Error', newProps.error, [{ text: 'OK' }]);
      } else {
        this.setState({
          success: true,
        });
        Alert.alert('Registration Successful', 'Please check your email', [{ text: 'OK' }]);
        NavigationActions.pop();
      }
    }
  }

  accountChange(newValue) {
    this.setState({
      accountValue: newValue,
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container}>
          <Form
            ref="form"
            type={this.state.accountModel}
            options={this.state.options}
            value={this.state.accountValue}
            onChange={this.accountChange}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.submitUpdate}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.register.fetching,
  error: state.register.error,
});

const mapDispatchToProps = dispatch => ({
  register: account => dispatch(RegisterActions.registerRequest(account)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterScreen);
