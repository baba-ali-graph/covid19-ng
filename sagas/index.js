import watchCompareButton from './compareButtonSaga'
import watchAppLoad from './appLoadSaga'
import {all} from 'redux-saga/effects'
export default function* rootSaga(){
    yield all([
        watchCompareButton,
        watchAppLoad
    ])
}