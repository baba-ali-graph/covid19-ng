import {takeEvery} from 'redux-saga/effects'
import {REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE} from '../actions/types'
export default function* watchAppLoad(){
    yield takeEvery(REQUEST_START, fetchNigeriaDetails)
}

function* fetchNigeriaDetails(){
    try{
        const resp = yield fetch(endpoint)
        resp = yield resp.json()
        yield put({type:REQUEST_SUCCESS, payload : resp})
    }
    catch(e){
        yield put({type:REQUEST_FAILURE, payload : e})
    }
}
