import React from "react"

import CardFlux from "./cardFlux"

//
const ListFlux = ({ lesFlux }) => {
  //
  const content = (
    <div className="row">
      {lesFlux.flux &&
        lesFlux.flux.map(item => {
          return <CardFlux key={item.id} flux={item}></CardFlux>
        })}
    </div>
  )
  //
  return content
}

//
export default ListFlux
