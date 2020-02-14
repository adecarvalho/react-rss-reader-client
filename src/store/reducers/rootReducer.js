import { combineReducers } from "redux"

import articleReducer from "./articleReducer"
import fluxReducer from "./fluxReducer"

const rootReducer = combineReducers({
  articleReducer,
  fluxReducer
})

//
export default rootReducer
