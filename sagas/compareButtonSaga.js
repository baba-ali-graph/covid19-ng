import {put, takeEvery} from 'redux-saga/effects'
export function* watchCompareButton(){
    yield takeEvery('COMPARE_START', fetchCountry)
}

function* fetchCountry(action){
    try{
        let country = yield fetch(endpointCompare(action.data))
        country = yield country.json()
        yield put({type:"COMPARE_SUCCESS", data : country})
        
    }
    catch(e) {
        yield put({type:"COMPARE_FAILED", e})
    }
}
