import React from "react"
import { NavLink } from "react-router-dom"
//
const NavigationBar = () => {
  //
  return (
    <nav className="navigation-container blue accent-1">
      {/** */}
      <div className="navigation-item">Rss Reader</div>
      {/** */}
      <div className="navigation-item">
        <NavLink to="/" className="black-text">
          Les flux
        </NavLink>
      </div>
      {/** */}
      {/* <div className="navigation-item">
        <NavLink to="/article" className="black-text">
          Articles
        </NavLink>
      </div> */}
      {/** */}
    </nav>
  )
}

//
export default NavigationBar
