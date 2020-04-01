import {takeEvery} from 'redux-saga/effects'
import {APP_LOAD, APP_LOAD_SUCCESS, APP_LOAD_FAILURE} from '../actions/types'
export function* watchAppLoad(){
    yield takeEvery(APP_LOAD, fetchNigeriaDetails)
}

function* fetchNigeriaDetails(){
    try{
        const resp = yield fetch(endpoint)
        resp = yield resp.json()
        yield put({type:APP_LOAD_SUCCESS, data : resp})
    }
    catch(e){
        yield put({type:APP_LOAD_FAILURE, data : e})
    }
}
