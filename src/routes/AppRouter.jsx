import React from 'react'
import { HashRouter, Route, Routes  } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import DestinationPage from '../pages/DestinationPage'
import CrewPage from '../pages/CrewPage'
import TechnologyPage from '../pages/TechnologyPage'



function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/destination' element={<DestinationPage  />} />
          <Route path='/crew' element={<CrewPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
        </Route>
      </Routes>

    </HashRouter>
  )
}

export default AppRouter