import rootReducer from '../reducer/index'
import indexSaga from '../sagas'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

const newSaga = createSagaMiddleware() 
const store = createStore(rootReducer, applyMiddleware(newSaga))
newSaga.run(indexSaga)
export default store