import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Register } from "../pages/Register"
import { Login } from "../pages/Login"
import { useState } from "react"

export const RoutesMain = ({notifySuccess,notifyFail}) => {

    const [user, setUser] = useState(null);

    return(
        <Routes>
            <Route path="/" element={<Login user={user} setUser={setUser}/>}></Route>
            <Route path="/dashboard" element={<HomePage user={user}/>}></Route>
            <Route path="/register" element={<Register 
            notifySuccess={notifySuccess}
            notifyFail={notifyFail} />} ></Route>
        </Routes>
    )
}