import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/views/Login/Login';
import RegisterScreen from './src/views/Register/Register';

export type RootStackParamList = {
  HomeScreen : undefined,
  RegisterScreen : undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="HomeScreen"
          component={LoginScreen}
  
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App