import watchCompareButton from './compareButtonSaga'
import watchAppLoad from './appLoadSaga'
import {fork} from 'redux-saga/effects'
export default function* rootSaga(){
    yield fork(watchCompareButton)
    yield fork(watchAppLoad)
}