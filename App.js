import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
  const appName = 'Penny Lane';
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Header name={appName}/>
      <TextInput placeholder="Input sth here"
        keyboardType='default'
        style={{borderBottomColor: "blue", borderBottomWidth: 2}}
        value={text}
        onChangeText={function (changedText) { // alternative: use arrow function
          // console.log(changedText);
          setText(changedText);  // don't just call the function here
        }}/>
      <Text>{text}</Text>

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
