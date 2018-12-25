import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import configureStore from './CreateStore';
import rootSaga from '../Sagas/';
import ReduxPersist from '../Config/ReduxPersist';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  appState: require('./AppStateRedux').reducer,
  users: require('./UserRedux').reducer,
  orders: require('./OrderRedux').reducer,
  products: require('./ProductRedux').reducer,
  productCategories: require('./ProductCategoryRedux').reducer,
  productVariants: require('./ProductVariantRedux').reducer,
  profiles: require('./ProfileRedux').reducer,
  // ignite-jhipster-redux-store-import-needle
  account: require('./AccountRedux').reducer,
  login: require('./LoginRedux').reducer,
  pin: require('./PinRedux').reducer,
  password: require('./PasswordRedux').reducer,
 // nav: require('./NavigationRedux').reducer,
  search: require('./SearchRedux').reducer,
});

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
};
