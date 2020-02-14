import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { REQUEST_GET_ARTICLE } from "../store/types/index"
//
import ListArticles from "../components/listArticles"
import ErrorsInfo from "../components/errorsInfo"
//
const ArticlesPage = props => {
  const dispatch = useDispatch()
  const articleReducer = useSelector(state => state.articleReducer)
  //
  //console.log(articleReducer)
  //
  const id = props.match.params.id

  const getArticleHandler = () => {
    dispatch({ type: REQUEST_GET_ARTICLE, payload: id })
  }
  //
  useEffect(() => {
    getArticleHandler()
  }, [])
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
  const content = (
    <div className="container">
      {/** */}
      <div className="row">
        <div className="col s12">{afficheBar(articleReducer.loading)}</div>
      </div>
      {/** */}
      <div className="row">
        <ErrorsInfo errors={articleReducer.error}></ErrorsInfo>
      </div>
      {/** */}
      <div className="row">
        <ListArticles lesarticles={articleReducer.data}></ListArticles>
      </div>
    </div>
  )
  //
  return content
}

//
export default ArticlesPage
