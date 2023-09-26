import React from 'react'
import { AppProvider } from './context/AppContext'
import Landing from './components/Landing'
import OurService from './components/OurService'

const App = () => {
  return (
    <AppProvider>
      <Landing />
      <OurService />
    </AppProvider>
  )
}

export default App
