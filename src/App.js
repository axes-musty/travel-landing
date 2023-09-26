import React from 'react'
import { AppProvider } from './context/AppContext'
import Landing from './components/Landing'
import OurService from './components/OurService'
import MapStats from './components/MapStats'

const App = () => {
  return (
    <AppProvider>
      <Landing />
      <OurService />
      <MapStats />
    </AppProvider>
  )
}

export default App
