import {createStore, applyMiddleware} from "redux";
import todo from "./reducers"
import  createSagaMiddleware from "redux-saga"
import todoSaga from "./saga"

// create the saga middle ware
let sagaMiddleware = createSagaMiddleware()

// create the store
export default createStore(todo, applyMiddleware(sagaMiddleware))

//start the saga.
sagaMiddleware.run(todoSaga)