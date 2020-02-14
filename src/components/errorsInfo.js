import React from "react"

//
const ErrorsInfo = ({ errors }) => {
  return (
    <div className="col s12">
      <p className=" errors-content center-align red-text">{errors}</p>
    </div>
  )
}

//
export default ErrorsInfo
