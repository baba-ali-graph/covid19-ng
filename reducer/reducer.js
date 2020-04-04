import {currentDay} from '../tools/index'
import * as types from '../actions/types'
import testapi from '../store/testapi'
import {transformPayload, generateMsg} from '../tools/index'
export const initialState = {...testapi}
console.log(currentDay)
export default function reducer(state = {}, action){
    switch(action.type){
        case types.REQUEST_SUCCESS:
            console.log("successful")
            return {...state, ...action.payload}
        case types.REQUEST_FAILED:
            return {...state, message : generateMsg('error')}
        case types.REQUEST_START:
            return {...state, message : generateMsg('progress') }
        case types.COMPARE_SUCCESS:
            console.log("successful")
            return {...state, compareCountry : transformPayload(action.payload)}
        case types.HIDE_MESSAGE:
            return {...state, message : null }
        default:
            return state
    }
}

