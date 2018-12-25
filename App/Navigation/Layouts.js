import { AppState, Linking } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { Images } from '../Themes';
// import { StorybookUIRoot } from '../../storybook'
import createStore from '../Redux';
import Colors from '../Themes/Colors';
import '../Config/ReactotronConfig';
import AccountActions from '../Redux/AccountRedux';

import AuthLoadScreen from '../Containers/AuthLoadScreen';
import DrawerContent from '../Containers/DrawerContent';
import SettingsScreen from '../Containers/SettingsScreen';
import ChecksScreen from '../Containers/POS/checks/Checks';

// for authentication
import ForgotPasswordScreen from '../Containers/Auth/ForgotPasswordScreen';
import ChangePasswordScreen from '../Containers/Auth/ChangePasswordScreen';
import LoginScreen from '../Containers/Auth/LoginScreen';
import PinScreen from '../Containers/Auth/PinScreen';
// POS
import POSScreen from '../Containers/POS/POSScreen';
import ProductModifiers from '../Containers/POS/Products/ProductModifiers/ProductModifiers';
import PosOrderScreen from '../Containers/POS/Orders/PosOrderScreen';
// payments
import Payments from '../Containers/POS/Payments/Payments';

// ignite-jhipster-navigation-import-needle

export const LOGIN_SCREEN = 'nav.LoginScreen';

export const FORGOT_PASSWORD_SCREEN = 'nav.ForgotPasswordScreen';
export const CHANGE_PASSWORD_SCREEN = 'nav.ChangePasswordScreen';
export const SETTINGS_SCREEN = 'nav.SettingsScreen';
export const CHECKS_SCREEN = 'nav.settingsScreen';
export const POSS_SCREEN = 'nav.POSScreen';
export const DRAWER_CONTENT = 'nav.DrawerContent';
export const AUTHLOAD_SCREEN = 'nav.AuthLoadScreen';
export const PIN_SCREEN = 'nav.PinScreen';
export const PRODUCT_MODIFIERS = 'nav.ProductModifiers';
export const POS_ORDER_SCREEN = 'nav.PosOrderScreen';
export const PAYMENTS = 'nav.Payments';

// ignite-jhipster-navigation-declaration-needle

const store = createStore();

let lastAppState = 'active';
function handleAppStateChange(nextAppState) {
  if (lastAppState.match(/inactive|background/) && nextAppState === 'active') {
     refreshAccount(store);
   }
  lastAppState = nextAppState;
}

function refreshAccount() {
  store.dispatch(AccountActions.accountRequest());
}
// for deep linking
// function handleOpenURL(event) {
//   console.log('maxa jira is xidhid');
//   console.tron.log(event.url);
//   const splitUrl = event.url.split('/'); // ['https:', '', 'domain', 'route', 'params']
//   const importantParameters = splitUrl.splice(3); // ['route', 'params']
//   if (importantParameters.length === 0) {
//     console.tron.log('Sending to home page');
//     return null;
//   }
//   if (importantParameters.length === 1) {
//     switch (importantParameters[0]) {
//       case 'register':
//         console.tron.log('Sending to Register Page');
// 			//	registerScreen();
//         break;
//       default:
//         console.tron.warn(`Unhandled deep link: ${event.url}`);
// 			// default code block
//     }
//   }
// }

export function registerScreensAndStartApp() {
  Navigation.registerComponentWithRedux(LOGIN_SCREEN, () => LoginScreen, Provider, store);
  Navigation.registerComponentWithRedux(FORGOT_PASSWORD_SCREEN, () => ForgotPasswordScreen, Provider, store);
  Navigation.registerComponentWithRedux(CHANGE_PASSWORD_SCREEN, () => ChangePasswordScreen, Provider, store);
  Navigation.registerComponentWithRedux(SETTINGS_SCREEN, () => SettingsScreen, Provider, store);
  Navigation.registerComponentWithRedux(CHECKS_SCREEN, () => ChecksScreen, Provider, store);
  Navigation.registerComponentWithRedux(DRAWER_CONTENT, () => DrawerContent, Provider, store);
  Navigation.registerComponentWithRedux(POSS_SCREEN, () => POSScreen, Provider, store);
  Navigation.registerComponentWithRedux(AUTHLOAD_SCREEN, () => AuthLoadScreen, Provider, store);
  Navigation.registerComponentWithRedux(PIN_SCREEN, () => PinScreen, Provider, store);
  Navigation.registerComponentWithRedux(PRODUCT_MODIFIERS, () => ProductModifiers, Provider, store);
  Navigation.registerComponentWithRedux(POS_ORDER_SCREEN, () => PosOrderScreen, Provider, store);
  Navigation.registerComponentWithRedux(PAYMENTS, () => Payments, Provider, store);

   // ignite-jhipster-navigation-registration-needle

  Navigation.events().registerAppLaunchedListener(() => {
     Navigation.setDefaultOptions({
        topBar: {
           topBar: {
              title: {
                 color: Colors.snow
               }
            },
           backButton: {
              showTitle: false,
              icon: Images.chevronLeftIcon,
              color: Colors.snow,
              iconColor: Colors.snow
            },
           background: {
              color: Colors.primary
            }
         },
        sideMenu: {
           left: {
              enabled: false
            }
         }
      });

     Navigation.setRoot(AuthLoad);

      // handle app state and deep links
     AppState.addEventListener('change', handleAppStateChange);
      // Linking.addEventListener('url', handleOpenURL);
   });
}

export const appStack = () =>
   Navigation.setRoot({
     root: {
        sideMenu: {
           left: {
              component: {
                 name: DRAWER_CONTENT
               }
            },
           center: {
              stack: {
                 id: 'center',
                 children: [
                    {
                      component: {
                          name: POSS_SCREEN,
                          options: {
                             topBar: {
                                visible: false,
                                drawBehind: true
                              }
                           }
                        }
                    }
                  ]
               }
            }
         }
      }
   });

export const loginScreen = () =>
   Navigation.setRoot({
     root: {
        stack: {
           id: 'login',
           children: [
              {
                component: {
                    name: LOGIN_SCREEN,
                    options: {
                       topBar: {
                          visible: false,
                          drawBehind: true
                        }
                     }
                  }
              }
            ]
         }
      }
   });

export const forgotPasswordScreen = () =>
   Navigation.push('center', {
     component: {
        name: FORGOT_PASSWORD_SCREEN,
        options: {
           topBar: {
              title: {
                 text: 'Forgot Password',
                 color: Colors.snow
               }
            }
         }
      }
   });
export const changePasswordScreen = () =>
   Navigation.push('center', {
     component: {
        name: CHANGE_PASSWORD_SCREEN,
        options: {
           topBar: {
              title: {
                 text: 'Change Password',
                 color: Colors.snow
               }
            }
         }
      }
   });

export const changePinScreen = (user) =>
   Navigation.push('center', {
     component: {
        name: PIN_SCREEN,
        passProps: {
           user
         },
        options: {
           topBar: {
              title: {
                 text: 'Change PIN',
                 color: Colors.snow
               }
            }
         }
      }
   });

export const settingsScreen = () =>
   Navigation.push('center', {
     component: {
        name: SETTINGS_SCREEN,
        options: {
           topBar: {
              title: {
                 text: 'Settings',
                 color: Colors.snow
               }
            }
         }
      }
   });
export const checksScreen = () =>
   Navigation.push('center', {
     component: {
        name: CHECKS_SCREEN,
        options: {
           topBar: {
              title: {
                 text: 'Checks',
                 color: Colors.snow
               }
            }
         }
      }
   });

export const AuthLoad = {
  root: {
     stack: {
        children: [
           {
             component: {
                 name: AUTHLOAD_SCREEN,
                 options: {
                    topBar: {
                       visible: false,
                       drawBehind: true
                     }
                  }
               }
           }
         ]
      }
   }
};

export const goProductModifierScreen = (product) =>
   Navigation.showModal({
     stack: {
        children: [
           {
             component: {
                 name: PRODUCT_MODIFIERS,
                 passProps: {
                    product
                  },
                 options: {
                    topBar: {
                       visible: false,
                       drawBehind: true
                     },
                    modalPresentationStyle: 'pageSheet',
                    layout: {
                       orientation: ['portrait'] // An array of supported orientations
                     }
                  }
               }
           }
         ]
      }
   });

export const goProductPOSOrderScreen = (product) =>
   Navigation.showModal({
     stack: {
        children: [
           {
             component: {
                 name: POS_ORDER_SCREEN,
                 options: {
                    topBar: {
                       visible: false,
                       drawBehind: true
                     },
                    modalPresentationStyle: 'pageSheet',
                    layout: {
                       orientation: ['portrait'] // An array of supported orientations
                     }
                  }
               }
           }
         ]
      }
   });

export const goPaymentsScreen = (product) =>
   Navigation.showModal({
     stack: {
        children: [
           {
             component: {
                 name: PAYMENTS,
                 options: {
                    topBar: {
                       visible: false,
                       drawBehind: true
                     },
                    modalPresentationStyle: 'pageSheet',
                    layout: {
                       orientation: ['portrait', 'landscape'] // An array of supported orientations
                     }
                  }
               }
           }
         ]
      }
   });

export const goToPinScreen = (user) =>
   Navigation.setRoot({
     root: {
        stack: {
           children: [
              {
                component: {
                    name: PIN_SCREEN,
                    passProps: {
                       user
                     },
                    options: {
                       topBar: {
                          visible: false,
                          drawBehind: true
                        },
                       modalPresentationStyle: 'pageSheet',
                       layout: {
                          orientation: ['portrait'] // An array of supported orientations
                        }
                     }
                  }
              }
            ]
         }
      }
   });
// ignite-jhipster-navigation-method-needle
