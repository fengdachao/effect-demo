import { take, fork, call, takeEvery, put, cancel } from 'redux-saga/effects';

export function* loginSaga(action) {
  yield put({ type: 'ShowModal' })
  const requestAction = yield take('LoginRequest');
  console.log(requestAction);
  setTimeout(function() {
    console.log('login success');
  }, 5 * 1000);
}

export function* watcherLoginSaga() {
  let task;
  while(true) {
    const action = yield take('Login');
    if(task) {
      yield cancel(task);
      console.log(task);
    }
    task = yield fork(loginSaga, action);
  }
  // yield takeEvery('Login', loginSaga);
}
