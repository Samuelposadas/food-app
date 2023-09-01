import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/Presentation/views/Login/Login';
import RegisterScreen from './src/Presentation/views/Register/Register';
import ProfileInfoScreen from './src/Presentation/views/profile/info/ProfileInfo';


export type RootStackParamList = {
  LoginScreen : undefined,
  RegisterScreen : undefined,
  ProfileInfoScreen : undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
  
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown:true,title : "Register"}}
        />
        <Stack.Screen
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
          
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App