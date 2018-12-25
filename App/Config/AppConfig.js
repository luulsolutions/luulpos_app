// Simple React Native specific changes
import {Platform} from 'react-native'
;

export default {
  apiUrl: Platform.OS === 'ios' ? 'https://somaliapp.com:8080' : 'http://somaliapp.com:8080',
  appUrlScheme: 'easypos',
};
