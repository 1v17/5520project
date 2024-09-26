import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Alert, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import GoalItem from './components/GoalItem';

export default function App() {
  const appName = 'Penny Lane';
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function handleInputData(receivedData) {
    // console.log("App ", receivedData);
    let newGoal = {text: receivedData, id: Math.random()};

    setModalVisible(false);
    setGoals((previousGoals) => {
      return [...previousGoals, newGoal]
    });
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

  function handleDeleteGoal(goalId) {
    setGoals((previousGoals) => {
      return previousGoals.filter((goal) => {
        return goal.id !== goalId;
      });
    });
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
        <FlatList 
          data={goals} 
          renderItem={({item}) => {
          return (
            <GoalItem 
              goal={item}
              deleteGoalHandler={handleDeleteGoal}
            />
            );
          }}
          contentContainerStyle={styles.contentContainer}
        />
        {/* <ScrollView contentContainerStyle={styles.contentContainer} >
          {goals.map((goal) => {
            return (
              <View key={goal.id} style={styles.textBox}>
                <Text style={styles.textInput}>{goal.text}</Text>
              </View>
              );
            })
          }
        </ScrollView> */}
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
    fontSize: 50,
    padding: 10,
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
    // alignItems: 'center',
    // textAlign: 'center',
    backgroundColor: 'aliceblue',
  },
  textBox: {
    backgroundColor: 'royalblue',
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  contentContainer: {
    alignItems: 'center',
  },
});
