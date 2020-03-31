import {currentDay} from '../tools/index'

const initialState = {
    baseCountry : {},
    compareCountry : {},
    currentDay : currentDay,
    error : false
}
console.log(currentDay)
export default function reducer(state = initialState, action){
    switch(action.type){
        case "APP_LOADED_SUCCESS":
            return {...state, baseCountry : action.data}
            break;
        case "APP_LOADED_FAILURE":
            return {...state, error : action.data}
            break
        case "COMPARE_START":
            return {...state, status : "loading" }
            break
        case "COMPARE_SUCCESS":
            return {...state, compareCountry : action.data }
            break
        case "COMPARE_FAILED":
            return {...state, error : action.data }
        default:
            return state
    }
}

