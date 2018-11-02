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
/* End */

const store = createStore(() => {}, composeEnhancers(
  applyMiddleware(sagaMiddleware),
  )
)

sagaMiddleware.run(watcherLoginSaga);

export default store;