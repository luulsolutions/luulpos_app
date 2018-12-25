import { createStore, applyMiddleware, compose } from 'redux';
import RehydrationServices from '../Services/RehydrationServices';
import ReduxPersist from '../Config/ReduxPersist';
import { composeWithDevTools } from 'redux-devtools-extension';
import Config from '../Config/DebugConfig';
import createSagaMiddleware from 'redux-saga';
// import { appNavigatorMiddleware } from '../Navigation/AppNavigation';
// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Navigation Middleware ------------ */
 // middleware.push(appNavigatorMiddleware);

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore;
  const composer = Config.useReduxDevTools ? composeWithDevTools : compose;
  const store = createAppropriateStore(rootReducer, composer(...enhancers));

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store);
  }

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};
