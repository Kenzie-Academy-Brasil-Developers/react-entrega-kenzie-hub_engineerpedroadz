import { useState } from 'react'
import { RoutesMain } from './routes/RoutesMain'
import { Link } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { Reset } from './styles/reset'

const App = () => {

  return (
    <>
      <Reset/>
      <GlobalStyles/>
      <RoutesMain/>

    
    </>
  )
}

export default App
