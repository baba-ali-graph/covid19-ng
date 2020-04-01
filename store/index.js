import reducer from '../reducer/reducer'
import indexSaga from '../sagas'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'

const newSaga = createSagaMiddleware() 
const store = createStore(reducer, applyMiddleware(newSaga))
newSaga.run(indexSaga)
export default store