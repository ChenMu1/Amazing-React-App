import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import calendarSagas from './calendar/saga';
import contactSagas from './contacts/saga';
import mailSagas from './mail/saga';
import notesSagas from './notes/saga';
import todosSagas from './todos/saga';
import cardsSagas from './card/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    calendarSagas(),
    contactSagas(),
    mailSagas(),
    notesSagas(),
    todosSagas(),
    cardsSagas()
  ]);
}
