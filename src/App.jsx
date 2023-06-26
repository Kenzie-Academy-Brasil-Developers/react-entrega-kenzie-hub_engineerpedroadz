import { useState } from 'react'
import { RoutesMain } from './routes/RoutesMain'
import { Link } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { Reset } from './styles/reset'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  const notifySuccess = () => toast.success("Conta criada com sucesso!",{
    theme: "dark"
  });

  const notifyFail = () => toast.error("Ops! Algo deu errado",{
    theme: "dark"
  });

  return (
    <>
      <Reset/>
      <GlobalStyles/>
      <RoutesMain notifySuccess={notifySuccess} notifyFail={notifyFail}/>
      <ToastContainer></ToastContainer>
    
    </>
  )
}

export default App
