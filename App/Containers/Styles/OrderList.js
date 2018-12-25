
import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes';

export default  StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    textTitle: { textAlign: 'center' },
    headOrder: {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    headOrderText: {},
  });