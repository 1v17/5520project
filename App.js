
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
        <Stack.Screen name="Home" component={Home} 
          options={{title: "All my goals",
          headerStyle: {
            backgroundColor: 'royalblue',
          },
          headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Details" component={GoalDetails}
          options={{title: "Goal Details", // change it so that no code is duplicated
            headerStyle: {
              backgroundColor: 'royalblue',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
 
});
