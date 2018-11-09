import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

/**
 * Saga Middleware
 */
import { watcherLoginSaga } from './login.saga';
const sagaMiddleware = createSagaMiddleware()

/**
 * Thunk middleware
 */
import thunk from 'redux-thunk';
import { loginThunk, throwException } from './login.thunk';

/**
 * Observable middleware
 */
import { createEpicMiddleware } from 'redux-observable';
import rootEpics from './root.epics';

const epicsMiddleware = createEpicMiddleware()

/**
 * Custom middleware
 */
import { log, traceCapture } from './redux.middleware';

/**
 * Import reducer 
 */
import { initReducer } from './reducers';

const store = createStore(
  initReducer,
  composeEnhancers(
    // applyMiddleware(sagaMiddleware),
    applyMiddleware(epicsMiddleware, sagaMiddleware),
  ),
)

/**
 * Run saga watcher
 */
sagaMiddleware.run(watcherLoginSaga);

/**
 * Run observable middleware
 */
epicsMiddleware.run(rootEpics);

 /**
  * Dispatch a thunk action
  */
 store.dispatch({type: 'Init_APP'});
//  store.dispatch(loginThunk());
// store.dispatch(throwException());

export default store;
