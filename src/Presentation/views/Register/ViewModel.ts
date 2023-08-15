import React, { useState } from 'react'

//type
import { FormRegister } from './type'

const RegisterViewModel = () => {
    const [form, setForm] = useState<FormRegister>({
        name : "",
        lastName :"",
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

  return {
    onChange,
    ...form
  }
}

export default RegisterViewModel