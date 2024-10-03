
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
          options={({ navigation, route }) => {
            return {
              title: route.params ? route.params.goal.text : "No goal selected",
              headerRight: () => {
                return (
                  <Button
                    title="Warning"
                    onPress={() => {
                      console.log("Warning");
                    }}
                  />
                );
              }
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
 
});
