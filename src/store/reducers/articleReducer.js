import {
  REQUEST_GET_ARTICLE,
  SUCCESS_GET_ARTICLE,
  FAILLURE_GET_ARTICLE
} from "../types/index"

const INIT_STATE = {
  loading: false,
  data: {},
  error: ""
}

export default function(state = INIT_STATE, action) {
  let nstate = null
  //
  switch (action.type) {
    //
    case REQUEST_GET_ARTICLE:
      nstate = { ...state, loading: true, error: "" }
      return nstate

    //
    case SUCCESS_GET_ARTICLE:
      nstate = { ...state, loading: false, error: "", data: action.payload }
      //console.log(action.payload)
      return nstate

    //
    case FAILLURE_GET_ARTICLE:
      nstate = { ...state, loading: false, error: action.payload }
      return nstate

    default:
      return state
  }
}
