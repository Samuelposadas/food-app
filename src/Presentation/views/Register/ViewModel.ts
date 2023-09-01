import React, { useEffect, useState } from 'react'
import { registerAuthUseCase } from '../../../Domain/useCases/auth/registerAuth'
import { User } from '../../../Domain/entities/User'
import * as ImagePicker from  "expo-image-picker"



const RegisterViewModel = () => {
    const [form, setForm] = useState<User>({
        name : "",
        lastname :"",
        email : "",
        phone : null ,
        password : "",
        confirmPassword : "",
        image : "",
    })
    const [modal, setModal] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset   >()

    const pickImage = async()=>{
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes : ImagePicker.MediaTypeOptions.All,
        allowsEditing : true,
        quality:1
      })
      if(!result.canceled){
        onChange("image",result.assets[0].uri)
        setFile(result.assets[0])
      }
    }
    const takePhoto = async()=>{
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes : ImagePicker.MediaTypeOptions.All,
        allowsEditing : true,
        quality:1
      })
      if(!result.canceled){
        onChange("image",result.assets[0].uri)
        setFile(result.assets[0])
      }
    }

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

   
    
  return {
    onChange,
    ...form,
    register,
    error,
    pickImage,
    modal,
    setModal,
    takePhoto
  }
}

export default RegisterViewModel