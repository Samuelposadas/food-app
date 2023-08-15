import React from "react"

//componentes
import {  Image, ImageBackground,  Text,  ToastAndroid, View,} from 'react-native';
import Button from '../../Components/Button/Button';
import CustomInput from "../../Components/CustomInput/TextInput";

//styles
import { RegisterStyle } from "./styles";

//ViewModel
import RegisterViewModel from "./ViewModel";



const RegisterScreen = () => {

    const {confirmPassword,email,lastName,name,password,phone,onChange} = RegisterViewModel()
    return (
        <View style={RegisterStyle.container}>
          <ImageBackground style={RegisterStyle.backgroundImage} alt="Background image" source={require("../../../../assets/Background.jpg")}/>
          <View style={RegisterStyle.logoContainer}>
            <Image style={RegisterStyle.logoImage}  source={require("../../../../assets/UserRegister.jpg")} alt='Logo image' />
            <Text style={RegisterStyle.title}>Upload image</Text>
          </View>
          <View style={RegisterStyle.form}>
           <Text style={RegisterStyle.formText}>Register</Text>
           <CustomInput image={require("../../../../assets/UserRegister1.jpg")} onChange={onChange} placeholder="Name" value={name} property="name" keyboard="default"/>
           <CustomInput image={require("../../../../assets/UserRegister2.jpg")} onChange={onChange} placeholder="Last name" value={lastName} property="lastName"  keyboard="default"/>
           <CustomInput image={require("../../../../assets/EmaillAddress.jpg")} onChange={onChange} placeholder="Email address" value={email} property="email"  keyboard="email-address"/>
           <CustomInput image={require("../../../../assets/Phone.jpg")} onChange={onChange} placeholder="Phone" value={phone} property="phone" keyboard="numeric"/>
           <CustomInput image={require("../../../../assets/Password1.jpg")} onChange={onChange} placeholder="Password" secureTextEntry value={password} property="password" keyboard="default"/>
           <CustomInput image={require("../../../../assets/Password2.jpg")} onChange={onChange} placeholder="Confirm password" secureTextEntry value={confirmPassword} property="confirmPassword" keyboard="default"/>
            <Button onPress={()=>ToastAndroid.show("hola",4)} text='Register now'/>
           <View style={RegisterStyle.formRegister}>
   
            
           </View>
          </View>
    
        </View>
      )
}

export default RegisterScreen

