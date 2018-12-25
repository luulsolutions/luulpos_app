import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Themes';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../../Themes/Colors';

export default ScaledSheet.create({
  container: {
     
    backgroundColor: Colors.background,
  },
  form: {
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor:Colors.border,
    width: '300@ms0.7',
    alignSelf: 'center',
    padding:5,

  },
  row: {
    marginVertical: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    height: 60,
    borderColor: Colors.grey,
  },
  rowLabel: {
    color: Colors.charcoal,
  },
  textInput: {
    height: '30@ms0.5',
    color: Colors.coal,
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel,
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
     
  },
  loginButtonWrapper: {
    flex: 1,
    borderColor: Colors.primary

  },
  loginButton: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    height: 65,
  },

  loginText: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.silver,
  },
  topLogo: {
    alignSelf: 'center',
    maxWidth: '200@ms0.5',
    maxHeight: '50@ms0.5',
    resizeMode: 'contain',
  },
  valid: {
    color: '#ff3106',
    alignSelf: 'center',
  },
});
