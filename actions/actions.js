import {APP_LOAD, COMPARE_START} from './types'
export const onload = () => ({type: APP_LOAD})
export const retrieve = (data) => ({type:COMPARE_START, data})
