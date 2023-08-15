import React from 'react'


import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../theme/theme';


interface Props {
    text : string;
    onPress ?: ()=>void;
}

const Button = ({text,onPress}:Props) => {
  return (
    <TouchableOpacity  style={styles.roundedButton} onPress={onPress} >
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    roundedButton : {
        width : "95%",
        height : 40,
        backgroundColor : COLORS.primary,
        borderRadius : 5,
        marginTop : 10,
        marginLeft : 20,
        alignItems : 'center',
        justifyContent : 'center'
        
    },
    textButton : {
        color :"white",
        fontSize : 16,
        fontWeight : "600"
    }
})