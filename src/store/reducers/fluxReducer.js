import {
  REQUEST_GET_FLUX,
  SUCCESS_GET_FLUX,
  FAILLURE_GET_FLUX
} from "../types/index"

//
const INIT_STATE = {
  loading: false,
  data: {},
  error: "",
  visa: false
}

//
export default function(state = INIT_STATE, action) {
  let newstate = null
  //
  switch (action.type) {
    //
    case REQUEST_GET_FLUX:
      newstate = { ...state, loading: true, visa: false, error: "" }
      return newstate

    //
    case SUCCESS_GET_FLUX:
      newstate = {
        ...state,
        loading: false,
        error: "",
        visa: true,
        data: action.payload
      }
      return newstate

    //
    case FAILLURE_GET_FLUX:
      newstate = { ...state, loading: false, visa: true, error: action.payload }
      return newstate

    default:
      return state
  }
}
