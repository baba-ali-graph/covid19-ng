import {currentDay} from '../tools/index'
import * as types from '../actions/types'
import testapi from '../store/testapi'
import {transformPayload} from '../tools/index'
export const initialState = {...testapi}
console.log(currentDay)
export default function reducer(state = {}, action){
    switch(action.type){
        case types.REQUEST_SUCCESS:
            console.log(action.payload)
            return {...state, ...action.payload}
        case types.REQUEST_FAILED:
            return {...state, showMsg:true ,message : {type:"error", text : "An error occured"}}
        case types.REQUEST_START:
            console.log("trying to fetch details..")
            return {...state, showMsg : true, message : {type:"info", text:"loading"} }
        case types.COMPARE_SUCCESS:
            console.log("successful")
            return {...state, compareCountry : transformPayload(action.payload)}
        default:
            return state
    }
}

