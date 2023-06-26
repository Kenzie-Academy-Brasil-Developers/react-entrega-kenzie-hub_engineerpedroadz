import { useState } from "react"
import { RoutesMain } from "./routes/RoutesMain"
import { Link } from "react-router-dom"
import { GlobalStyles } from "./styles/global"
import { Reset } from "./styles/reset"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./providers/userContext"

const App = () => {

  

  return (
    <>
      <Reset />
      <GlobalStyles />
      <UserProvider>
        <RoutesMain  />
      </UserProvider>
      <ToastContainer />
    
    </>
  )
}

export default App
