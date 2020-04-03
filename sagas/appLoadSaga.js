import {takeEvery} from 'redux-saga/effects'
import {endpoint} from '../api'
import {REQUEST_START, REQUEST_SUCCESS, REQUEST_FAILURE} from '../actions/types'
export default function* watchAppLoad(){
    yield takeEvery(REQUEST_START, fetchNigeriaDetails)
}

function* fetchNigeriaDetails(){
    try{
let payload = await Promise.all([fetch(endpoint),fetch(endpoint('Nigeria'))])
            let baseCountry = await payload[1].json()
            let global = await payload[0].json()
            let resp = {baseCountry : transformPayload(baseCountry), totalGlobally: global.total.value}
        yield put({type:REQUEST_SUCCESS, payload : resp})
    }
    catch(e){
        yield put({type:REQUEST_FAILURE, payload : e})
    }
}
