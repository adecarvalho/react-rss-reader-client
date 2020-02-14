import React from "react"
import { NavLink } from "react-router-dom"

//
const NavigationBar = () => {
  //
  return (
    <nav className="navigation-container blue accent-1">
      {/** */}
      <div className="navigation-title">Rss Reader</div>
      {/** */}
      <div className="navigation-item">
        <NavLink to="/" className="black-text">
          Flux
        </NavLink>
        {/** */}
      </div>
      {/** */}
      <div className="navigation-item">
        <NavLink to="/about" className="black-text">
          About
        </NavLink>
      </div>
      {/** */}
    </nav>
  )
}

//
export default NavigationBar
