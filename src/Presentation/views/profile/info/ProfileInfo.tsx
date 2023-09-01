import React from 'react'
import { View,Text, Button } from 'react-native'
import useViewModel from "./ViewModel"
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';

interface Props extends StackScreenProps<RootStackParamList,"ProfileInfoScreen">{}
const ProfileInfoScreen = ({navigation}:Props) => {

    const {removeSession} = useViewModel();
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
       <Button title='Log out' 
       onPress={()=>{
        removeSession(),
        navigation.navigate("LoginScreen")
       }}   
       />
    </View>
  )
}

export default ProfileInfoScreen