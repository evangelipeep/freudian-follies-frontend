import React from "react"
import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout"

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </>
    </div>
  )
}

export default App
