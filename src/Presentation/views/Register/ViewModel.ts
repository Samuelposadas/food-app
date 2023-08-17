import React, { useState } from 'react'

//type
import { FormRegister } from './type'
import { api } from '../../../Data/sources/remote/api/Api'

const RegisterViewModel = () => {
    const [form, setForm] = useState<FormRegister>({
        name : "",
        lastname :"",
        email : "",
        phone : null ,
        password : "",
        confirmPassword : ""
    })

    const onChange = (property : string , value : any) =>{
        setForm({
            ...form,
            [property] : value
        })
    }

    const register =async() =>{
      try {
        
       const response =  await api.post("/users/create",form)
       console.log(response);
       
      } catch (error) {
        console.log(error)
      }
    }

  return {
    onChange,
    ...form,
    register
  }
}

export default RegisterViewModel