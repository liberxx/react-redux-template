import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ADD_TEXT } from './actions';
import { MESSAGE } from '../store/actions/messages';


function* testSaga() {
    yield takeLatest(ADD_TEXT, testSagaWorker);
}

function* testSagaWorker(action: any) {
    yield put({type: MESSAGE, payload: action.payload});
}

export default testSaga;