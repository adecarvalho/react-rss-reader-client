import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import lemondelogo from "../images/LeMondeLogo.png"
import { REQUEST_GET_FLUX } from "../store/types/index"

import ListFlux from "../components/listFlux"
import ErrorsInfo from "../components/errorsInfo"
//
const HomePage = props => {
  //
  const dispatch = useDispatch()
  const fluxReducer = useSelector(state => state.fluxReducer)

  //
  const afficheBar = bool => {
    if (bool) {
      return (
        <div className="progress">
          <div className="indeterminate black"></div>
        </div>
      )
    } else {
      return null
    }
  }
  //
  async function gettingFlux() {
    if (fluxReducer.visa === false) {
      dispatch({ type: REQUEST_GET_FLUX, payload: null })
    }
  }
  //
  useEffect(() => {
    gettingFlux()
  }, [])
  //
  const content = (
    <div className="container">
      {/** */}
      <div className="row">{afficheBar(fluxReducer.loading)}</div>
      {/** */}
      <div className="row">
        {/* <h2 className="center">Les Flux Rss du journal LeMonde</h2> */}
        <div className="logo-container">
          <img
            className="responsive-img"
            width="400"
            src={lemondelogo}
            alt="logo_lemonde"
          />
        </div>
      </div>
      {/** */}
      <div className="row">
        <ErrorsInfo errors={fluxReducer.error}></ErrorsInfo>
      </div>
      {/** */}
      <div className="row">
        <ListFlux lesFlux={fluxReducer.data}></ListFlux>
      </div>

      {/** */}
    </div>
  )
  //
  return content
}

//
export default HomePage
