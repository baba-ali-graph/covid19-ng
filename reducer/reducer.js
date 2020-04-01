import {currentDay} from '../tools/index'
import * as types from '../actions/types'
import testapi from '../store/testapi'
export const initialState = {...testapi}
console.log(currentDay)
export default function reducer(state = initialState, action){
    switch(action.type){
        case types.APP_LOAD_SUCCESS:
            return {...state, baseCountry : action.data}
        case types.APP_LOADED_FAILURE:
            return {...state, error : action.data}
        case types.COMPARE_START:
            console.log("where are")
            return {...state, hidden:false, message : {type:"info", text:"loading"} }
        case types.COMPARE_SUCCESS:
            return {...state, compareCountry : action.data }
        case types.COMPARE_FAILED:
            return {...state, error : action.data }
        default:
            return state
    }
}

