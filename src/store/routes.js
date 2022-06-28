import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

function AppRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={ <Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;