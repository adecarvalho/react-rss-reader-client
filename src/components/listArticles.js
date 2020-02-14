import React from "react"

import CardArticle from "./cardArticle"

//
const ListArticles = ({ lesarticles }) => {
  //
  //console.log(lesarticles)
  //
  return (
    <div className="row">
      {lesarticles.articles &&
        lesarticles.articles.map((item, index) => {
          return <CardArticle key={index} article={item}></CardArticle>
        })}
    </div>
  )
}

//
export default ListArticles
