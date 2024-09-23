import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
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

  function handleCancelButton() {
    Alert.alert(
      "Confirm Action", // Title of the Alert
      "Are you sure you want to cancel?", // Message in the Alert
      [
        {
          text: "Cancel",
          style: "cancel", 
        },
        {
          text: "OK",
          onPress: () => setModalVisible(false), // Handle OK action
        },
      ],
      { cancelable: true } // Allows the user to dismiss the alert by tapping outside
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={styles.topView}>
        <Header name={appName} />
        
        <View style={styles.buttonContainer}>
          <Button title="Add a goal" onPress={() => setModalVisible(true)} />
        </View>
      </View>
      <Input autoFocus={true} 
          inputHandler={handleInputData} 
          modalVisibile={modalVisible}
          cancelHandler={handleCancelButton}/>
      <View style={styles.bottomView}>
        <Text style={styles.textInput}>{receivedData}</Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    // marginTop: 10,
    // textAlign: 'center',
    color: 'coral',
    fontSize: 20,
    paddingHorizontal: 10,    
  },
  buttonContainer: {
    marginVertical: "5%",
    width: '30%',
  },
  topView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: "10%",
  },
  bottomView: {
    flex:4,
    alignItems: 'center',
    // textAlign: 'center',
    backgroundColor: 'aliceblue',
  },
});
