import {takeEvery, put} from 'redux-saga/effects'
import {endpoint} from '../api/index'
import {REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILED} from '../actions/types'
export default function* watchAppLoad(){
    yield takeEvery(REQUEST_START, fetchAppData)
}

function* fetchAppData(){
    try{
        console.log("fetching ")
        let globally = yield fetch(endpoint)
        let baseCountry = yield (endpoint('Nigeria'))
        globally = yield globally.json()
        baseCountry = yield baseCountry.json()
        let resp = {baseCountry : transformPayload(baseCountry), totalGlobally: globally.total.value}
            yield put({type:REQUEST_SUCCESS, payload : resp})
    }
    catch(e){
        yield put({type:REQUEST_FAILED, payload : e})
    }
}
