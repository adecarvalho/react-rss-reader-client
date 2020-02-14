import React from "react"

//
const CardArticle = ({ article }) => {
  //
  const content = (
    <div className="col s12 m8 offset-m2">
      <div className="card">
        <div className="card-image">
          <h5 className="center">
            <span className="blue-text text-darken-2">{article.title}</span>
          </h5>
          <img
            src={article.imageUrl.url}
            alt="img"
            className=" responsive-img circle imageUrl"
          />
        </div>
        <div className="card-content">
          <p className="">{article.description}</p>
        </div>
        <div className="card-action">
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            Ouvrir
          </a>
        </div>
      </div>
    </div>
  )
  //
  return content
}
//
export default CardArticle
