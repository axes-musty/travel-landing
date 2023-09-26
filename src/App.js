import React from 'react'
import { AppProvider } from './context/AppContext'
import './App.css'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'

const App = () => {
  return (
    <AppProvider>
      <PageOne />
      <PageTwo />
    </AppProvider>
  )
}

export default App
