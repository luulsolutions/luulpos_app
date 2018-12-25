import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../../Themes';
import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    justifyContent: 'space-between',
    width: '100%',

  },
  itemContainer: {
    borderRadius: 10,
    paddingTop: 1,
  },
  gridView: {
    flex: 1,
    width: '100%',
  },
  Modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 20 : 0,
    width: Metrics.screenWidth,
    width: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ModalInsideView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: '80%',
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  modalButton: {
    marginLeft: 10,
  },
  card: {
    backgroundColor: Colors.background,
  },
  modalFooter: {
    justifyContent: 'flex-end',
    backgroundColor: Colors.background,
    alignContent: 'flex-end',
  },
  modalHeader: {
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  modalHeaderText: {
    color: Colors.text,
    fontSize: 23,
  },
  TextStyle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#fff',
    padding: 20,
    textAlign: 'center',
  },

});
