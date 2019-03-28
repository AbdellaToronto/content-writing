import {applyMiddleware, compose, createStore, Store} from 'redux';
import {reducer, RootState} from './redux';
import {DEV} from './constants/env';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import {session} from './redux/system';
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic} from './redux/epics';

const epicMiddleware = createEpicMiddleware();

export const getStore = (state, isServer?): Store<RootState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<RootState, any, {}, undefined>(reducer, state, applyMiddleware(thunk));
  } else {
    const composeEnhancers = DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    if(DEV && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
    }

      const middleware = [
        thunk,
        createLogger({
        predicate: (getState, action) => !/^@@/.test(action.type),
        collapsed: true
      }),
        epicMiddleware
      ];

      const store = createStore<RootState, any, {}, undefined>(
        reducer,
        state,
        composeEnhancers(applyMiddleware(...middleware), autoRehydrate())
      );
      epicMiddleware.run(rootEpic);
      store.dispatch(session());

      const whitelist = ['persist'];
      persistStore(store, {whitelist}, () => {
        console.log(`define whitelist: ${whitelist.join(', ')}`);
      });

    return store;
  }
};
