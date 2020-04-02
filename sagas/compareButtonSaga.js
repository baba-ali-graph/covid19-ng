import {put, takeEvery} from 'redux-saga/effects'
import {REQUEST_START, COMPARE_SUCCESS, REQUEST_FAILED} from '../actions/types'
import {compareEndpoint} from '../api/index'

export function* watchCompareButton(){
    yield takeEvery(REQUEST_START, fetchCountry)
}

function* fetchCountry(action){
    try{
        console.log("trying to communicate with server")
        let country = yield fetch(compareEndpoint(action.payload))
        country = yield country.json()
        yield put({type:COMPARE_SUCCESS, payload : country})
        
    }
    catch(e) {
        yield put({type:REQUEST_FAILED, data:e})
    }
}
