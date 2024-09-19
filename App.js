import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

import Input from './components/Input';

export default function App() {
  const appName = 'Penny Lane';
  function handleInputData(text) {
    console.log(text);
  }
  
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Header name={appName}/>
      <Input autoFocus={true} inputHandler={handleInputData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
