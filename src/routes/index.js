import React from "react"
import { Route, Switch } from "react-router-dom"

import HomePage from "../pages/homePage"
import ArticlesPage from "../pages/articlesPage"

//
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/article/:id" component={ArticlesPage}></Route>
    </Switch>
  )
}

//
export default Routes
