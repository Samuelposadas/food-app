import React from 'react'

//componentes
import {  Image, ImageBackground, StyleSheet, Text, TextInput, ToastAndroid, View,TouchableOpacity } from 'react-native';
import Button from '../../Components/Button/Button';

//theme
import { COLORS } from '../../theme/theme';

//hook
import useLogin from './useLogin';



const LoginScreen = () => {
    const {navigate}=useLogin()
    
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} alt="Background image" source={require("../../../assets/Background.jpg")}/>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage}  source={require("../../../assets/Logo.jpg")} alt='Logo image' />
        <Text style={styles.title}>Food App</Text>
      </View>
      <View style={styles.form}>
       <Text style={styles.formText}>Ingresar</Text>
       <View style={styles.inputContainer}>
       <Image style={styles.userIcon} source={require("../../../assets/User.jpg")} />
       <TextInput style={styles.formTextInput} placeholder='Email adress' keyboardType='email-address' />
       </View>
       <View style={styles.inputContainer}>
       <Image style={styles.userIcon} source={require("../../../assets/Password.jpg")} />
       <TextInput style={styles.formTextInput} placeholder='Password' keyboardType='default' secureTextEntry />
       </View>
        <Button onPress={()=>ToastAndroid.show("hola",4)} text='Log in'/>
       <View style={styles.formRegister}>
        <Text>No tienes cuenta?</Text>
        <TouchableOpacity onPress={()=>navigate("RegisterScreen")}>
        <Text style={styles.formRegisterText}>Registrate</Text>
        </TouchableOpacity>
       </View>
      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
  
    },
    backgroundImage:{
      width:"100%",
      height:"100%",
      objectFit : "cover",
      opacity: 0.7,
      bottom:"30%"
    },
    logoContainer: {
      position : 'absolute',
      textAlign : "center",
      alignSelf : "center",
      top : "20%"
    },
    logoImage: {
      width: 100,
      height: 100,
      borderRadius : 100,
    },
    title : {
      color : "white",
      textAlign : 'center',
      marginTop : 10,
      fontSize : 20,
      fontWeight : "600" 
    },
    form : {
      width : "100%",
      height : "35%",
      backgroundColor :"white",
      position : "absolute",
      bottom : 0,
      borderTopLeftRadius : 40,
      borderTopRightRadius : 40,
      padding : 30
    },
    formText : {
      fontWeight : "400",
      fontSize : 16,
      marginLeft : 10
    },
    formTextInput : {
      flex : 1 ,
      borderBottomWidth : 1,
      borderBottomColor : "#AAAAAA"
    },
    formRegister : {
      display : 'flex',
      flexDirection : "row",
      gap : 15,
      justifyContent : 'center',
      marginTop : 30
    },
    formRegisterText : {
      fontStyle : "italic",
      fontWeight : "bold",
      borderBottomWidth : 1,
      borderBottomColor :COLORS.primary, 
      color : COLORS.primary
    },
    inputContainer : {
      display : 'flex',
      flexDirection : 'row',
      gap : 10,
      textAlign : 'center',
      alignItems : 'center',
      marginTop : 10
    },
    userIcon : {
      width : 45,
      height:45
    },
    passwordIcon : {
      width : 45,
      height:45,
      backgroundColor : "white"
    }
  });
  
  
  