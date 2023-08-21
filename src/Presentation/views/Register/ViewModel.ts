import React, { useEffect, useState } from 'react'

//type
import { registerAuthUseCase } from '../../../Domain/useCases/auth/registerAuth'
import { User } from '../../../Domain/entities/User'
import { ToastAndroid } from 'react-native'

const RegisterViewModel = () => {
    const [form, setForm] = useState<User>({
        name : "",
        lastname :"",
        email : "",
        phone : null ,
        password : "",
        confirmPassword : ""
    })
    const [error, setError] = useState("")

    const onChange = (property : string , value : any) =>{
        setForm({
            ...form,
            [property] : value
        })
    }

    const validationForm = () : boolean => {
      if(form.name == ""){
        setError("Insert your name")
        return false
      }
      if(form.lastname == ""){
        setError("Insert your lastname")
        return false
      }
      if(form.email == ""){
        setError("Insert your email")
        return false
      }
      if(form.phone == ""){
        setError("Insert your phone")
        return false
      }
      if(form.password == ""){
        setError("Insert your password")
        return false
      }
      if(form.confirmPassword == ""){
        setError("Insert your confirmPassword")
        return false
      }
      return true
    }
    
    const register =async() =>{
     if(validationForm()){ 
       const response = await registerAuthUseCase(form)
       console.log(JSON.stringify(response));
     }
   
    }

    useEffect(() => {
      
      if(error !== ""){
        ToastAndroid.show(error,ToastAndroid.LONG)
      }
      
    }, [error])
    
  return {
    onChange,
    ...form,
    register,
  }
}

export default RegisterViewModel