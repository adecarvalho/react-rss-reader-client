import React from "react"

//
const AboutPage = () => {
  const content = (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 ">
          <div className="card white">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p className="black-text about-text">
                Application web pour la lecture de flux rss, du journal Le
                Monde.
              </p>
            </div>
            <div className="card-action">
              <a href="/">Les flux</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  //
  return content
}

//
export default AboutPage
