import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { useState } from "react"

export const RoutesMain = () => {


    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/dashboard" element={<HomePage/>}></Route>
            <Route path="/register" element={<Register/>} ></Route>
        </Routes>
    )
}