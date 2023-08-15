import React, { useState } from 'react'

//navigation
import {useNavigation} from "@react-navigation/native" 

//type
import {StackNavigationProp} from "@react-navigation/stack"

import { LoginForm } from './type'
import { RootStackParamList } from '../../../../App'


const LoginViewModel = () => {
    const [loginForm, setLoginForm] = useState<LoginForm>({
      emailAddress:"",
      password:""
    })

    const onChange = (property:string,value:string) =>{
      setLoginForm({
        ...loginForm,
        [property] : value
      })
    }

    const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>()

  return {
    navigate,
    onChange,
    ...loginForm

  }
}

export default LoginViewModel