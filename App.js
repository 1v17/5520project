
import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './components/Home';
import GoalDetails from './components/GoalDetails';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
// console.log(Stack);

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={GoalDetails} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
 
});
