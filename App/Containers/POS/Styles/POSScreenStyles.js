import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../../Themes/';
import colors from '../../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingBottom: Metrics.baseMargin,
    backgroundColor: Colors.primary,
  },
  col: {
    borderColor: Colors.jhipsterBlue,
    borderRadius: 5,
    borderWidth: 1,
  },
  header: {
    backgroundColor: Colors.primary,
  },
  searchBar: {
    marginTop: 500,
    backgroundColor: Colors.green,
  },
  crumbsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin:5,
    borderRadius: 5,
    borderColor: Colors.primary,
    borderWidth: 2,
  },

  crumbText: {
    textAlign:'center',
    color: Colors.white,
    fontSize: 20,

  },

  crumb: {
   
    alignSelf:'center'

  },
  activecrumb: {
    backgroundColor: Colors.primary,
     
  },
  productCol: {
    backgroundColor: Colors.grey,
  },
  topLogo: {
    alignSelf: 'center',
    width: 150,
    height: 35,
    marginRight:500,
   
     
  },
});
