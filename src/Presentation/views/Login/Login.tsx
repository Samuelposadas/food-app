import React, { useEffect } from 'react'

//componentes
import {  Image, ImageBackground, Text,  View,TouchableOpacity } from 'react-native';
import Button from '../../Components/Button/Button';
import CustomInput from '../../Components/CustomInput/TextInput';

//styles
import { HomeStyle } from './styles';

//ViewModel
import LoginViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';


interface Props extends StackScreenProps<RootStackParamList,"LoginScreen">{};

const LoginScreen = ({navigation}:Props) => {
    const {email,onChange,password,login,user}=LoginViewModel()

    useEffect(() => {
      if(user?.id !== null && user?.id !== undefined){
        navigation.replace("ProfileInfoScreen")
      }
    }, [user])
    

  return (
    <View style={HomeStyle.container}>
      <ImageBackground style={HomeStyle.backgroundImage} alt="Background image" source={require("../../../../assets/Background.jpg")}/>
      <View style={HomeStyle.logoContainer}>
        <Image style={HomeStyle.logoImage}  source={require("../../../../assets/Logo.jpg")} alt='Logo image' />
        <Text style={HomeStyle.title}>Food App</Text>
      </View>
      <View style={HomeStyle.form}>
       <Text style={HomeStyle.formText}>Ingresar</Text>
        <CustomInput image={require('../../../../assets/User.jpg')} placeholder='Email' onChange={onChange} keyboard='email-address' property='email' value={email} />
        <CustomInput  image={require('../../../../assets/Password.jpg')} placeholder='Password' onChange={onChange} keyboard='default' property='password' value={password} secureTextEntry/>
        <Button onPress={()=>{login()
        }
        } text='Log in'/>
       <View style={HomeStyle.formRegister}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("RegisterScreen")}>
        <Text style={HomeStyle.formRegisterText}>Sign up</Text>
        </TouchableOpacity>
       </View>
      </View>

    </View>
  )
}

export default LoginScreen

