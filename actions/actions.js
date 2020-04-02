import * as type from './types'
export const requestStart = () => ({type: REQUEST_START})
export const compareStart = (payload) => ({type:COMPARE_START, payload : payload})
export const requestSuccess = (payload) => ({type:REQUEST_SUCCESS, payload})
export const compareSuccess = (payload) => ({type:COMPARE_SUCCESS, payload})
export const requestError = (payload) => ({type:REQUEST_ERROR, payload})
