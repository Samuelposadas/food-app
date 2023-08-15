import React from 'react'

//componentes
import {  Image, ImageBackground, Text, ToastAndroid, View,TouchableOpacity } from 'react-native';
import Button from '../../Components/Button/Button';
import CustomInput from '../../Components/CustomInput/TextInput';

//styles
import { HomeStyle } from './styles';

//ViewModel
import LoginViewModel from './ViewModel';



const LoginScreen = () => {
    const {navigate,emailAddress,onChange,password}=LoginViewModel()

  return (
    <View style={HomeStyle.container}>
      <ImageBackground style={HomeStyle.backgroundImage} alt="Background image" source={require("../../../../assets/Background.jpg")}/>
      <View style={HomeStyle.logoContainer}>
        <Image style={HomeStyle.logoImage}  source={require("../../../../assets/Logo.jpg")} alt='Logo image' />
        <Text style={HomeStyle.title}>Food App</Text>
      </View>
      <View style={HomeStyle.form}>
       <Text style={HomeStyle.formText}>Ingresar</Text>
        <CustomInput image={require('../../../../assets/User.jpg')} placeholder='Email' onChange={onChange} keyboard='email-address' property='emailAddress' value={emailAddress} />
        <CustomInput  image={require('../../../../assets/Password.jpg')} placeholder='Password' onChange={onChange} keyboard='default' property='password' value={password} secureTextEntry/>
        <Button onPress={()=>ToastAndroid.show(`${emailAddress},${password}`,4)} text='Log in'/>
       <View style={HomeStyle.formRegister}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigate("RegisterScreen")}>
        <Text style={HomeStyle.formRegisterText}>Sign up</Text>
        </TouchableOpacity>
       </View>
      </View>

    </View>
  )
}

export default LoginScreen

