import { takeLatest, all, call, delay, put, select } from "redux-saga/effects"

import {
  REQUEST_GET_FLUX,
  SUCCESS_GET_FLUX,
  FAILLURE_GET_FLUX,
  REQUEST_GET_ARTICLE,
  SUCCESS_GET_ARTICLE,
  FAILLURE_GET_ARTICLE
} from "../types/index"

import { getApiFlux, getApiArticle } from "../../api/rssApi"

//
function* getFlux(action) {
  try {
    const zeflux = yield call(getApiFlux)
    //
    yield delay(500)
    //
    yield put({ type: SUCCESS_GET_FLUX, payload: zeflux })
  } catch (error) {
    console.log(error)
    yield put({ type: FAILLURE_GET_FLUX, payload: error.message })
  }
}
//
//
function* getArticle(action) {
  try {
    const zeid = action.payload

    const theflux = yield select(state => state.fluxReducer.data)

    if (theflux.flux) {
      const filtab = theflux.flux.filter(item => {
        return item.id === zeid
      })
      //
      if (filtab.length > 0) {
        const articles = yield call(getApiArticle, filtab[0].url_end)
        //
        yield delay(500)

        yield put({ type: SUCCESS_GET_ARTICLE, payload: articles })
      }
    }
  } catch (error) {
    console.log(error)
    yield put({ type: FAILLURE_GET_ARTICLE, payload: error.message })
  }
}
//
export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_GET_FLUX, getFlux),
    takeLatest(REQUEST_GET_ARTICLE, getArticle)
  ])
}
