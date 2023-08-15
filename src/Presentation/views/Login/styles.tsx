import { StyleSheet } from "react-native";
//theme
import { COLORS } from '../../theme/theme';

export const HomeStyle = StyleSheet.create({
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
  
  
  