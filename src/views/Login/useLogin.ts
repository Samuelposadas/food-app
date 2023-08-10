import React from 'react'

//navigation
import {useNavigation} from "@react-navigation/native" 

//type
import {StackNavigationProp} from "@react-navigation/stack"
import { RootStackParamList } from '../../../App'


const useLogin = () => {
    
    const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>()

  return {
    navigate
  }
}

export default useLogin