import {put, takeEvery} from 'redux-saga/effects'
import {COMPARE_START, COMPARE_SUCCESS, REQUEST_FAILED} from '../actions/types'
import {endpoint} from '../api/index'
i

export default function* watchCompareButton(){
    yield takeEvery(COMPARE_START, fetchCountry)
}

function* fetchCountry(action){
    try{
        console.log("trying to communicate with server")
        let country = yield fetch(endpoint(action.payload))
        country = yield country.json()
        country = transformPayload(country)
        yield put({type:COMPARE_SUCCESS, payload : country})
        
    }
    catch(e) {
        yield put({type:REQUEST_FAILED, data:e})
    }
}
