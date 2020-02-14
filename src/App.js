import React from "react"
import { Provider } from "react-redux"

import { store } from "../src/store/mainStrore"

import NavigationBar from "./components/navigationBar"
import Routes from "./routes/index"

//
const App = () => {
  return (
    <Provider store={store}>
      <>
        <NavigationBar />
        <section className="main">
          <Routes></Routes>
        </section>
      </>
    </Provider>
  )
}

//
export default App
