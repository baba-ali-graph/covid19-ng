import {takeEvery} from 'redux-saga/effects'
export function* watchAppLoad(){
    yield takeEvery("APP_LOADED", fetchNigeriaDetails)
}

function* fetchNigeriaDetails(){
    try{
        const resp = yield fetch(endpoint)
        resp = yield resp.json()
        yield put({type:"APP_LOADED_SUCCESS", data : resp})
    }
    catch(e){
        yield put({type:"APP_LOADED_FAILURE", data : e})
    }
}
