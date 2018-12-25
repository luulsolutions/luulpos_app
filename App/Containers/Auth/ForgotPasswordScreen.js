import React from 'react';
import { Alert, ScrollView, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Navigation } from 'react-native-navigation';
import PasswordActions from '../../Redux/PasswordRedux';
import t from 'tcomb-form-native';
// Styles
import styles from './Styles/ForgotPasswordScreenStyle';

const Form = t.form.Form;

class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      formModel: t.struct({
        email: t.String,
      }),
      formValue: this.props.forgotPassword,
      formOptions: {
        email: {
          returnKeyType: 'done',
          onSubmitEditing: () => this.submitForm(),
        },
      },
      success: false,
    };
    this.submitForm = this.submitForm.bind(this);
    this.formChange = this.formChange.bind(this);
  }

  submitForm() {
    this.setState({
      success: false,
    });
    // call getValue() to get the values of the form
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      this.props.resetPassword(value.email);
    }
  }

  componentWillReceiveProps(newProps) {
    // Did the update attempt complete?
    if (!newProps.fetching) {
      if (newProps.error) {
        if (newProps.error === 'WRONG') {
          Alert.alert('Error', 'Something when wrong resetting your password', [{ text: 'OK' }]);
        }
      } else {
        this.setState({
          success: true,
        });
        Alert.alert('Success', 'Password reset email sent', [{ text: 'OK' }]);
        Navigation.popToRoot(this.props.componentId);
      }
    }
  }

  formChange(newValue) {
    this.setState({
      formValue: newValue,
    });
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <ScrollView style={styles.container}>
          <Form
            ref="form"
            type={this.state.formModel}
            options={this.state.formOptions}
            value={this.state.formValue}
            onChange={this.formChange}
          />
          <TouchableHighlight style={styles.button} onPress={this.submitForm} underlayColor="#99d9f4">
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableHighlight>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.password.fetching,
  error: state.password.error,
});

const mapDispatchToProps = dispatch => ({
  resetPassword: email => dispatch(PasswordActions.forgotPasswordRequest(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);
