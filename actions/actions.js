import * as type from './types'
export const requestStart = () => ({type: type.REQUEST_START})
export const compareStart = (payload) => ({type:type.COMPARE_START, payload : payload})
export const requestSuccess = (payload) => ({type:type.REQUEST_SUCCESS, payload})
export const compareSuccess = (payload) => ({type:type.COMPARE_SUCCESS, payload})
export const requestError = (payload) => ({type:type.REQUEST_ERROR, payload})
