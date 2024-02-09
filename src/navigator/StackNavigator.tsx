import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { Primary_Color } from '../commons/constantColor';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:Primary_Color}}}>
      <Stack.Screen name="LoginScreen" options={{headerShown:false}} component={LoginScreen} />
      
    </Stack.Navigator>
  );
}   