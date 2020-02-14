import React from "react"
import { Link } from "react-router-dom"
//
const CardFlux = ({ flux }) => {
  //
  return (
    <div className="col s12 m6">
      <div className="card white darken-1">
        <div className="card-content black-text">
          <span className="card-title">{flux.name}</span>
          <p>{flux.url}</p>
        </div>
        <div className="card-action">
          <Link
            to={"/article/" + flux.id}
            className="btn blue-grey lighten-1 waves-effect waves-light"
          >
            Ouvrir
          </Link>
        </div>
      </div>
    </div>
  )
}

//
export default CardFlux
