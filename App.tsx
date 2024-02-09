import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

 const App = () => {
  return (
    <NavigationContainer>
      {/* <LoginScreen/> */}
      <StackNavigator/>
    </NavigationContainer>
  )
}
export default App;