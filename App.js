import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const appName = 'Penny Lane';
  const [receivedData, setReceivedData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleInputData(receivedData) {
    // console.log("App ", receivedData);
    setReceivedData(receivedData); // don't pass setter function as a prop
    setModalVisible(false);
  }
  
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Header name={appName}/>
      <Input autoFocus={true} 
        inputHandler={handleInputData} 
        modalVisibile={modalVisible}/>
      <Button title="Add a goal" onPress={() => setModalVisible(true)} />
      <Text>{receivedData}</Text>
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
