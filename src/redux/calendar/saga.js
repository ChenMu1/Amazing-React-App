import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* changeView() {
  yield takeEvery(actions.VIEW, function*() {});
}
export function* changeEvents() {
  yield takeEvery(actions.VIEW, function*() {});
}
export default function* rootSaga() {
  yield all([fork(changeView), fork(changeEvents)]);
}
