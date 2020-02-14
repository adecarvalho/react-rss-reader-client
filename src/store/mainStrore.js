import { createStore, applyMiddleware } from "redux"

import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducers/rootReducer"
import saga from "./sagas/index"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export { store }
