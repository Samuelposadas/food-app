import React from 'react'

//components
import { Image, KeyboardType, StyleSheet, TextInput, View } from 'react-native'

interface Props {
    value : any;
    image : any;
    placeholder:string;
    onChange : (text:string,value:any) => void;
    keyboard : KeyboardType;
    secureTextEntry? : boolean;
    property : string;
}

const CustomInput = ({image,keyboard,placeholder,onChange,value,secureTextEntry = false,property}:Props) => {

  return (
    <View style={styles.inputContainer}>
    <Image style={styles.userIcon} source={image} />
    <TextInput style={styles.formTextInput} placeholder={placeholder} keyboardType={keyboard} value={value}  onChangeText={(text)=>onChange(property,text)} secureTextEntry={secureTextEntry} />
    </View>
  )
}

export default CustomInput


const styles = StyleSheet.create({
    formTextInput : {
        flex : 1 ,
        borderBottomWidth : 1,
        borderBottomColor : "#AAAAAA"
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
})