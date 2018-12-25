//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { PaymentGateway } = NativeModules

export default {
  exampleMethod () {
    return PaymentGateway.exampleMethod()
  },
  getDeviceName(){
    return PaymentGateway.getDeviceName((err, name) => console.tron.log(err, name))
  },

 // EXAMPLE_CONSTANT: PaymentGateway.EXAMPLE_CONSTANT
}
