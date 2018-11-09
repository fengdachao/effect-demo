import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import store from './store';
import { loginThunk } from './login.thunk';

class App {
  constructor() {
  }
  run(store) {
    const data = [1, 2, 3];
    const spread = [
      ...data,
      4
    ]
    console.log(spread);
    store.dispatch({ type: 'run app' });
  }
}

const a = new App();
a.run(store);
