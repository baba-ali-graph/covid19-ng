import {currentDay} from '../tools/index'
import * as types from '../actions/types'
import testapi from '../store/testapi'
import {transformPayload} from '../tools/index'
export const initialState = {...testapi}
console.log(currentDay)
export default function reducer(state = initialState, action){
    switch(action.type){
        case types.REQUEST_SUCCESS:
            return {...state, baseCountry : transformPayload(action.payload)}
        case types.REQUEST_FAILURE:
            return {...state, message : {type:"error", text : "An error occured"}}
        case types.REQUEST_START:
            console.log("where are")
            return {...state, hidden:false, message : {type:"info", text:"loading"} }
        case types.COMPARE_SUCCESS:
            console.log("successful")
            return {...state, compareCountry : transformPayload(action.payload)}
        default:
            return state
    }
}

