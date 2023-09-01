import React, { useState,useEffect } from 'react'

//navigation


//type

import { loginAuthUseCase } from '../../../Domain/useCases/auth/loginAuth'


import { saveUserLocalUseCase } from '../../../Domain/useCases/localUser/saveUserLocal'
import useUserlocal from '../../hooks/useUserlocal'


const LoginViewModel = () => {
    const [loginForm, setLoginForm] = useState({
      email:"",
      password:""
    })
    const [error, setError] = useState<string>("")

    const {user,getUserSeccion} = useUserlocal()
    console.log("Este es el usuario" , user);
    

    const onChange = (property:string,value:string) =>{
      setLoginForm({
        ...loginForm,
        [property] : value
      })
    }
    
    const login =async () => {
     if(validationForm()){

       const response = await loginAuthUseCase(loginForm.email,loginForm.password)
       if(!response.success){
        setError(response.message)
       } else {
        await saveUserLocalUseCase(response.data)
        getUserSeccion();
       }
       
     }
      
    }

    const validationForm = ():boolean =>{
      if(loginForm.email == ""){
        setError("Insert your email")
        return false
      } else if (loginForm.password == ""){
        setError("insert your password")
      }
      return true
    }


    
    

   
  return {
   
    onChange,
    ...loginForm,
    login,
    user

  }
}

export default LoginViewModel