
import { StyleSheet, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './components/Home';
import GoalDetails from './components/GoalDetails';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
// console.log(Stack);

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: 'royalblue',
          },
          headerTintColor: 'coral',
        }}
      >
        <Stack.Screen name="Home" component={Home} 
          options={{title: "All my goals",
          }}
        />
        <Stack.Screen name="Details" component={GoalDetails}
          options={({ navigation, route }) => {
            return {
              title: route.params ? route.params.goal.text : "No goal selected",
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
 
});
