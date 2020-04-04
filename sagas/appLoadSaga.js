import {takeEvery, put} from 'redux-saga/effects'
import {endpoint} from '../api/index'
import {transformPayload} from '../tools/index'
import {REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILED} from '../actions/types'
export default function* watchAppLoad(){
    yield takeEvery(REQUEST_START, fetchAppData)
}

function* fetchAppData(){
    try{
        console.log("fetching ")
        let globally = yield fetch(endpoint())
        let baseCountry = yield fetch(endpoint('Nigeria'))
        globally = yield globally.json()
        baseCountry = yield baseCountry.json()
        baseCountry = transformPayload(baseCountry)
        yield put({type:REQUEST_SUCCESS, payload : {baseCountry, globally}})
    }
    catch(e){
        console.log(e, "error occured")
        yield put({type:REQUEST_FAILED, payload : e})
    }
}
