import { createContext } from "react";
import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const notifySuccess = () => toast.success("Conta criada com sucesso!",{
        theme: "dark"
      });
    
      const notifyFail = () => toast.error("Ops! Algo deu errado",{
        theme: "dark"
      });

    const navigate = useNavigate();

    const registerUser = async (formData)=>{
        try{
            const postUser = await api.post('/users', formData)
            notifySuccess();
        }
        catch{
            notifyFail();
        }

    }

    const loginUser = async (formData) =>{

        try{
            
            const logar = await api.post('/sessions', formData)
            navigate("/dashboard")
            const data = logar.data;
            setUser(data.user)
            localStorage.setItem('userID', JSON.stringify(data.user.id));
            localStorage.setItem('token', JSON.stringify(data.token));

        }catch{

        }
    }

    return(
        <UserContext.Provider value={{user,setUser,loginUser,registerUser}}>
            {children}
        </UserContext.Provider>

    )
}